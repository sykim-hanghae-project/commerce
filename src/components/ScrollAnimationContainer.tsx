import useScrollAnimation from '@/hooks/useScrollAnimation'
import React from 'react'

interface ScrollAnimationContainerProps {
  children: React.ReactNode
}

const ScrollAnimationContainer = ({ children }: ScrollAnimationContainerProps) => {
  const { ref, isInViewport } = useScrollAnimation()

  return (
    <div ref={ref} className={isInViewport ? 'animate-frameIn' : ''}>
      {children}
    </div>
  )
}

export default ScrollAnimationContainer