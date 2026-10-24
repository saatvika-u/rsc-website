import { useEffect, useState } from "react"

export default function AnimatedCount({
  value,
  label,
  inline = false,
}: {
  value: number
  label?: string
  inline?: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value)
      return
    }

    let animationFrame = 0
    const duration = 900
    const startedAt = performance.now()

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      }
    }

    animationFrame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationFrame)
  }, [value])

  if (inline) {
    return (
      <span className="research-count-inline" aria-label={String(value)}>
        {count}
      </span>
    )
  }

  return (
    <div className="research-count" aria-label={`${value} ${label}`}>
      <strong aria-hidden="true">{count}</strong>
      <span>{label}</span>
    </div>
  )
}
