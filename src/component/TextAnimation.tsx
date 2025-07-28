'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// @ts-ignore
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

type AnimatedHeadingProps = {
  text: string
  className?: string
}

export default function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    const split1 = new SplitText(headingRef.current, {
      type: 'lines',
      linesClass: 'overflow-hidden'
    })

    const split2 = new SplitText(split1.lines, {
      type: 'lines',
      linesClass: 'line'
    })

    const lines = headingRef.current.querySelectorAll('.line')

    const tl = gsap.timeline({ paused: true }).from(lines, {
      yPercent: 100,
      duration: 1.1,
      stagger: 0.1,
      ease: 'power2.out'
    })

    const trigger = ScrollTrigger.create({
      trigger: headingRef.current,
      start: 'top 80%',
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse()
    })

    return () => {
      trigger.kill()
      split1.revert()
      split2.revert()
    }
  }, [])

  return (
    <div
      ref={headingRef}
      className={`heading__animation ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  )
}
