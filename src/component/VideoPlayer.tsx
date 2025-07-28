'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VideoScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return

    gsap.fromTo(
      videoRef.current,
      { width: '100%' },
      {
        width: '110vw',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          markers: false
        }
      }
    )
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black relative">
      <video
        ref={videoRef}
        className="absolute top-0 -right-[30px]"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/home.mp4"
        style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
      />
    </div>
  )
}

export default VideoScroll
