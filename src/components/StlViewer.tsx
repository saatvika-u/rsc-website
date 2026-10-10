import { useEffect, useRef, useState } from "react"

type ViewerStatus = "loading" | "ready" | "error"

export default function StlViewer({
  modelUrl = "/models/SuperFinalSR-reduced.stl",
}: {
  modelUrl?: string
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const resetRef = useRef<() => void>(() => undefined)
  const [status, setStatus] = useState<ViewerStatus>("loading")

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let disposed = false
    let animationFrame = 0
    let disposeViewer = () => undefined

    async function initialiseViewer() {
      try {
        const [THREE, { STLLoader }, { OrbitControls }] = await Promise.all([
          import("three"),
          import("three/addons/loaders/STLLoader.js"),
          import("three/addons/controls/OrbitControls.js"),
        ])

        if (disposed) return

        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x081221)
        scene.fog = new THREE.Fog(0x081221, 8, 16)

        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
        camera.position.set(4.8, 3.2, 5.8)

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          powerPreference: "high-performance",
        })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.outputColorSpace = THREE.SRGBColorSpace
        renderer.domElement.setAttribute(
          "aria-label",
          "Interactive 3D model. Drag to rotate and scroll to zoom.",
        )
        renderer.domElement.setAttribute("role", "img")
        viewport.appendChild(renderer.domElement)

        scene.add(new THREE.HemisphereLight(0xcbdcff, 0x07101f, 2.4))
        const keyLight = new THREE.DirectionalLight(0xffffff, 3.8)
        keyLight.position.set(4, 6, 5)
        scene.add(keyLight)
        const accentLight = new THREE.DirectionalLight(0xee353d, 2.2)
        accentLight.position.set(-4, 1, -3)
        scene.add(accentLight)

        const grid = new THREE.GridHelper(12, 24, 0x31445f, 0x16263b)
        grid.position.y = -1.75
        scene.add(grid)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enablePan = false
        controls.minDistance = 3
        controls.maxDistance = 11
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.8
        controls.target.set(0, 0, 0)
        controls.addEventListener("start", () => {
          controls.autoRotate = false
        })

        const resetView = () => {
          camera.position.set(4.8, 3.2, 5.8)
          controls.target.set(0, 0, 0)
          controls.autoRotate = true
          controls.update()
        }
        resetRef.current = resetView
        resetView()

        const loader = new STLLoader()
        loader.load(
          modelUrl,
          (geometry) => {
            if (disposed) {
              geometry.dispose()
              return
            }

            geometry.computeVertexNormals()
            geometry.center()
            geometry.computeBoundingBox()
            const size = new THREE.Vector3()
            geometry.boundingBox?.getSize(size)
            const largestDimension = Math.max(size.x, size.y, size.z) || 1
            geometry.scale(
              3.7 / largestDimension,
              3.7 / largestDimension,
              3.7 / largestDimension,
            )

            const material = new THREE.MeshStandardMaterial({
              color: 0xee353d,
              metalness: 0.62,
              roughness: 0.32,
            })
            const model = new THREE.Mesh(geometry, material)
            scene.add(model)

            const edges = new THREE.LineSegments(
              new THREE.EdgesGeometry(geometry, 28),
              new THREE.LineBasicMaterial({
                color: 0xffa0a4,
                transparent: true,
                opacity: 0.32,
              }),
            )
            scene.add(edges)
            setStatus("ready")
          },
          undefined,
          () => {
            if (!disposed) setStatus("error")
          },
        )

        const resize = () => {
          const width = viewport.clientWidth
          const height = viewport.clientHeight
          if (!width || !height) return
          camera.aspect = width / height
          camera.updateProjectionMatrix()
          renderer.setSize(width, height, false)
        }
        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(viewport)
        resize()

        const render = () => {
          controls.update()
          renderer.render(scene, camera)
          animationFrame = window.requestAnimationFrame(render)
        }
        render()

        disposeViewer = () => {
          window.cancelAnimationFrame(animationFrame)
          resizeObserver.disconnect()
          controls.dispose()
          scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              object.geometry.dispose()
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose())
              } else {
                object.material.dispose()
              }
            }
            if (object instanceof THREE.LineSegments) {
              object.geometry.dispose()
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose())
              } else {
                object.material.dispose()
              }
            }
          })
          renderer.dispose()
          renderer.domElement.remove()
        }
      } catch {
        if (!disposed) setStatus("error")
      }
    }

    initialiseViewer()

    return () => {
      disposed = true
      disposeViewer()
      resetRef.current = () => undefined
    }
  }, [modelUrl])

  return (
    <div className="stl-viewer">
      <div className="stl-viewport" ref={viewportRef}>
        {status !== "ready" && (
          <div className="stl-status" role="status">
            <span />
            {status === "loading"
              ? "Loading sample model"
              : "Model could not be loaded"}
          </div>
        )}
        <div className="stl-axis" aria-hidden="true">
          <span>X</span>
          <span>Y</span>
          <span>Z</span>
        </div>
      </div>
      <div className="stl-toolbar">
        <button type="button" onClick={() => resetRef.current()}>
          Reset
        </button>
      </div>
    </div>
  )
}
