'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

type SplitTextEffectProps = {
  text: string
  className?: string
}

export default function SplitTextEffect({ text, className = '' }: SplitTextEffectProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const splitInstance = useRef<any>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    const style = document.createElement('style')
    style.textContent = `
      [data-split-text] {
        white-space: normal;
        word-break: normal;
      }
      [data-split-text] span {
        display: inline-block;
        white-space: pre;
      }
    `
    document.head.appendChild(style)

    splitInstance.current = new SplitText(element, {
      type: 'words,chars',
      tag: 'span'
    })

    const handleMouseEnter = () => {
      gsap.fromTo(
        splitInstance.current.chars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          stagger: {
            amount: 0.3,
            from: 'random'
          }
        }
      )
    }

    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      splitInstance.current?.revert()
    }
  }, [])

  return (
    <div ref={textRef} data-split-text className={className}>
      {text}
    </div>
  )
}
