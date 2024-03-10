import { useEffect, useRef, useState } from "react"

const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { // 요소가 뷰포트에 나타남
          setIsInViewport(true)
        } else {
          setIsInViewport(false)
        }
      })
    }

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }
    const observer = new IntersectionObserver(callback, option)
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return {
    isInViewport,
    ref
  }
}

export default useScrollAnimation