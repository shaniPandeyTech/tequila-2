'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import SplitTextEffect from './SplitTextEffect'
import Button from '@/component/Button'

const Header = () => {
  const subNavRef = useRef<HTMLDivElement>(null)
  const subNavItemsRef = useRef<NodeListOf<HTMLDivElement> | null>(null)
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const el = subNavRef.current
    if (!el) return

    if (activeMenu === 'what-we-do') {
      el.style.display = 'block'

      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out'
        }
      )

      subNavItemsRef.current = el.querySelectorAll('.sub-col')
      if (subNavItemsRef.current) {
        gsap.fromTo(
          subNavItemsRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.2,
            ease: 'power2.out'
          }
        )
      }
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          if (el) el.style.display = 'none'
        }
      })
    }
  }, [activeMenu])

  const menuItems = [
    { label: 'Case Studies', id: null },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'The Agency', id: null },
    { label: 'Insights', id: null },
    { label: 'FAQ', id: null }
  ]

  return (
    <header className="fixed top-0 bg-black w-full z-50 text-white">
      <div className="container mx-auto flex items-center justify-between py-[36px]">
        <div className="w-5/12 text-center">
          <Link href="/">
            <svg
              width="167"
              height="41"
              viewBox="0 0 167 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M79.2151 34.6832H0V40.1891H79.2151V34.6832Z" fill="#F9F8FC" />
              <path d="M147.532 34.6832H123.638V40.1891H147.532V34.6832Z" fill="#F9F8FC" />
              <path d="M117.293 0.976524H85.628V6.48244H117.293V0.976524Z" fill="#F9F8FC" />
              <path
                d="M22.3206 0.976524H0V6.48244H8.40525V27.1564H13.9154V6.48104H22.3206V0.976524Z"
                fill="#F9F8FC"
              />
              <path
                d="M43.827 6.48104V0.976524H26.6238V27.1662H43.827V21.6448H32.1339V16.6526H43.827V11.1467H32.1339V6.47963H43.827V6.48104Z"
                fill="#F9F8FC"
              />
              <path
                d="M79.4725 27.2761L72.8141 20.5957C76.7466 14.3013 74.8454 5.99729 68.5718 2.05178C62.294 -1.89373 54.0216 0.0137424 50.0891 6.30669C46.1566 12.6011 48.0578 20.9051 54.3314 24.8506C58.7746 27.6465 64.4385 27.5812 68.8222 24.6931L71.4081 27.2874H79.4739V27.2761H79.4725ZM61.4792 21.1676C57.2369 21.1676 53.7939 17.7189 53.7939 13.4569C53.7939 9.19486 57.2313 5.74609 61.4792 5.74609C65.7271 5.74609 69.1645 9.19486 69.1645 13.4569C69.1645 17.7189 65.7215 21.162 61.4792 21.1676Z"
                fill="#F9F8FC"
              />
              <path
                d="M96.6158 40.7242C90.498 40.7185 85.5376 35.7579 85.5262 29.6398V13.9211H91.1565V29.6398C91.1565 32.6561 93.5997 35.0993 96.6158 35.0993C99.632 35.0993 102.075 32.6561 102.075 29.6398V13.9211H107.7V29.6398C107.694 35.7579 102.734 40.7185 96.6101 40.7242"
                fill="#F9F8FC"
              />
              <path d="M117.293 13.9592H111.787V40.1912H117.293V13.9592Z" fill="#F9F8FC" />
              <path
                d="M139.142 27.162H123.638V0.976524H129.144V21.6406H139.137V27.162H139.142Z"
                fill="#F9F8FC"
              />
              <path
                d="M155.728 37.4282C155.728 38.9694 154.479 40.2178 152.937 40.2178C151.394 40.2178 150.147 38.9694 150.147 37.4282C150.147 35.8871 151.396 34.6387 152.937 34.6387C154.478 34.6387 155.728 35.8871 155.728 37.4282Z"
                fill="#F9F8FC"
              />
              <path
                d="M155.065 0.976524L143.614 27.1508H149.65L155.071 14.4669L160.494 27.1508H166.523L155.065 0.976524Z"
                fill="#F9F8FC"
              />
              <path
                d="M166.515 35.8507V34.6868H162.884V40.2166H166.515V39.0597H164.048V37.9957H166.515V36.8317H164.048V35.8507H166.515Z"
                fill="#F9F8FC"
              />
              <path
                d="M159.844 34.6868L157.42 40.225H158.698L159.844 37.5439L160.989 40.225H162.267L159.844 34.6868Z"
                fill="#F9F8FC"
              />
            </svg>
          </Link>
        </div>

        <div
          className="flex items-end justify-between w-7/12 relative"
          onMouseLeave={() => {
            hoverTimeout.current = setTimeout(() => setActiveMenu(null), 150)
          }}
        >
          <nav className="flex gap-[32px] relative">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href="/"
                onMouseEnter={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                  setActiveMenu(item.id)
                }}
                className="tq__FoundersGrotesk_22 relative after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-700 hover:after:left-0 hover:after:w-full"
              >
                <SplitTextEffect text={item.label} />
              </Link>
            ))}
          </nav>

          <div className="flex gap-[15px]">
            {/* <Link
              href="#"
              className="uppercase text-black font-medium px-[15px] pt-[10px] pb-[6px] bg-white border border-white rounded-full"
            >
              Get in touch
            </Link> */}
            <Button text={'Get in touch'} extraClasses="" onClick={() => {}} />
            <Link href={'#'}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="16.5" stroke="#F9F8FC" />
                <mask
                  id="mask0_2020_2"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="34"
                  height="34"
                >
                  <path
                    d="M23.5212 26.6662C23.5148 26.6662 23.5084 26.6661 23.502 26.6657C19.5089 26.6248 15.7546 25.0469 12.9296 22.2218C10.1018 19.3941 8.52351 15.6346 8.48553 11.6357C8.48544 11.6211 8.48591 11.6047 8.48694 11.5901C8.61325 9.85026 10.1171 8.48735 11.9106 8.48735L13.1332 8.48688C13.3494 8.48688 13.5445 8.61704 13.6274 8.81671C13.7498 9.11194 13.8766 9.40644 14.0034 9.70115C14.2877 10.3616 14.5816 11.0445 14.8275 11.7388L14.8495 11.8007C15.0165 12.2686 15.245 12.9094 14.954 13.5154C14.8887 13.6512 14.7027 14.0385 13.4022 14.6841C14.0531 16.2696 15.0032 17.6928 16.231 18.9206C17.4589 20.1485 18.8824 21.0986 20.468 21.7495C21.1163 20.4471 21.5012 20.2623 21.6362 20.1975C21.8276 20.1055 22.0419 20.0589 22.2733 20.0589C22.67 20.0589 23.0485 20.1941 23.3526 20.3028L23.4135 20.3246C24.1072 20.5701 24.7904 20.864 25.451 21.1483C25.7455 21.2751 26.0398 21.4017 26.3348 21.5242C26.5345 21.607 26.6646 21.8018 26.6646 22.018C26.6646 22.777 26.6646 23.0934 26.6599 23.2409H26.6642C26.6642 25.0321 25.3056 26.534 23.5696 26.6639C23.5534 26.6654 23.5373 26.6662 23.5212 26.6662ZM9.55505 11.6471C9.59496 15.354 11.0615 18.8416 13.6857 21.4658C16.3098 24.0898 19.7959 25.5563 23.5045 25.5964C24.659 25.5015 25.5948 24.4493 25.5948 23.2409C25.5948 23.2384 25.5948 23.2359 25.5948 23.2334C25.5951 23.187 25.5952 22.7153 25.5952 22.3735C25.4061 22.2933 25.2171 22.2119 25.0281 22.1306C24.3835 21.8533 23.7169 21.5664 23.0561 21.3326L22.9925 21.3098C22.7544 21.2248 22.4846 21.1283 22.2731 21.1283C22.2062 21.1283 22.1516 21.138 22.1067 21.158C21.9893 21.2412 21.6541 21.7068 21.235 22.626C21.0964 22.9299 20.8409 22.9627 20.7375 22.9627C20.6745 22.9627 20.6121 22.9516 20.5529 22.9299C18.6376 22.2256 16.9291 21.1311 15.4747 19.6767C14.0203 18.2223 12.9257 16.5138 12.2216 14.5985C12.213 14.5751 12.2061 14.5512 12.2008 14.5269C12.1554 14.317 12.2367 14.0475 12.5205 13.9188C13.4414 13.501 13.9093 13.1638 13.9934 13.0448C14.0846 12.8392 13.9504 12.463 13.8423 12.16L13.8194 12.0959C13.5853 11.4349 13.2985 10.7684 13.0211 10.1239C12.9397 9.93474 12.8583 9.74564 12.778 9.5564L11.9105 9.55674C10.7025 9.55674 9.65035 10.4926 9.55505 11.6471ZM17.575 34.1516C8.43552 34.1516 1 26.7161 1 17.5766C1 8.43709 8.43552 1.00156 17.575 1.00156C26.7145 1.00156 34.15 8.43709 34.15 17.5766C34.15 26.7161 26.7145 34.1516 17.575 34.1516ZM17.575 2.07092C9.02517 2.07092 2.06935 9.02673 2.06935 17.5766C2.06935 26.1264 9.02517 33.0822 17.575 33.0822C26.1248 33.0822 33.0806 26.1264 33.0806 17.5766C33.0806 9.02673 26.1248 2.07092 17.575 2.07092Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2020_2)">
                  <circle cx="18.025" cy="18.0266" r="14.025" fill="white" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={subNavRef}
        className="sub-navigation border-t-[0.5px] border-[rgba(255,255,255,0.3)]"
        style={{ height: 0, overflow: 'hidden', opacity: 0, display: 'none' }}
        onMouseEnter={() => {
          if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
          setActiveMenu('what-we-do')
        }}
        onMouseLeave={() => {
          hoverTimeout.current = setTimeout(() => setActiveMenu(null), 150)
        }}
      >
        <div className="container mx-auto flex items-start justify-between py-[36px]">
          <div className="w-5/12 text-center">
            <h2 className="tq__Instrument_36 px-[50px] mb-[32px]">
              We are there for any and <br />
              every one of your needs.
            </h2>
          </div>
          <div className="w-7/12 relative">
            <div className="flex justify-center gap-[48px]">
              {[
                {
                  title: 'Web Design & Development',
                  tag: 'Teq',
                  items: [
                    'Custom Website Design & Development',
                    'E-commerce Website Design & Development',
                    'Web Applications Design & Development',
                    'Domain & Hosting Management',
                    'Website Maintenance & Support'
                  ]
                },
                {
                  title: 'Branding',
                  tag: 'UI',
                  items: [
                    'Logo Design & Visual Identity',
                    'Rebranding',
                    'Brand Elevation',
                    'Graphic Design',
                    'Branding, Strategy & Development',
                    'Corporate Profile & Company Brochure',
                    'UI/ UX Design for Digital Products'
                  ]
                },
                {
                  title: 'Communication',
                  tag: 'LA',
                  items: [
                    'Social Media Strategy & Design',
                    'Search Engine Optimisation (SEO)',
                    'Photography & Visual Storytelling',
                    'Video Storyboarding & Production'
                  ]
                }
              ].map((col, idx) => (
                <div key={idx} className="w-4/12 sub-col">
                  <p className="tq__FoundersGrotesk_14 mb-[24px] uppercase relative z-1 after:content-[''] after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-white after:translate-y-[6px] after:-z-1">
                    <span className="bg-black pr-2">{col.tag}</span>
                  </p>
                  <h4 className="tq__Instrument_22 mb-[32px] uppercase">{col.title}</h4>
                  <div className="space-y-[10px]">
                    {col.items.map((item, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
