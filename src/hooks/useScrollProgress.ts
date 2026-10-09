import { useEffect, useRef, useState } from "react"

export default function useScrollProgress<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      frame = 0

      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const startLine = window.innerHeight * 0.72
      const travel = rect.height + window.innerHeight * 0.35
      const nextProgress = Math.min(
        Math.max((startLine - rect.top) / travel, 0),
        1,
      )

      setProgress(nextProgress)
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { elementRef, progress }
}
