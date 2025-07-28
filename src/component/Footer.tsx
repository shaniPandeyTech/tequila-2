'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="py-[100px] w-full bg-black">
      <div className="container mx-auto flex items-start justify-between gap-[100px] py-[36px]">
        <div className="w-[20%]">
          <Link href="/" className="inline-block mb-[24px]">
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
          <p className="tq__FoundersGrotesk_14  mb-[48px] opacity-70">
            A904, Tamani Arts, Business <br />
            Bay, Downtown Dubai, UAE
          </p>
          <h4 className="tq__Instrument_22 mb-[14px] opacity-70">Lots to talk? Then call us!</h4>
          <p className="tq__FoundersGrotesk_36 mb-[48px]">+971 50 937 2493</p>
        </div>
        <div className="flex justify-center gap-[48px] w-[60%]">
          <div className="w-4/12">
            <p className="tq__FoundersGrotesk_14 mb-[24px] uppercase relative z-1 after:content-[''] after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-white after:translate-y-[6px] after:-z-1">
              <span className="bg-[var(--background)] pr-2">Teq</span>
            </p>
            <h4 className="tq__Instrument_22 mb-[32px] uppercase">Web Design & Development</h4>
            <div className="space-y-[10px]">
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-5 hover:opacity-100 transition-all duration-700"
              >
                Custom Website Design & Development
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                E-commerce Website Design & Development
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Web Applications Design & Development
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Domain & Hosting Management
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Website Maintenance & Support
              </Link>
            </div>
          </div>
          <div className="w-4/12">
            <p className="tq__FoundersGrotesk_14 mb-[24px] uppercase relative z-1 after:content-[''] after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-white after:translate-y-[6px] after:-z-1">
              <span className="bg-[var(--background)] pr-2">UI</span>
            </p>
            <h4 className="tq__Instrument_22 mb-[32px] uppercase">Branding</h4>
            <div className="space-y-[10px]">
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Logo Design & Visual Identity
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Rebranding
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Brand Elevation
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Graphic Design
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Branding, Strategy & Development
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Corporate Profile & Company Brochure
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                UI/ UX Design for Digital Products
              </Link>
            </div>
          </div>
          <div className="w-4/12">
            <p className="tq__FoundersGrotesk_14 mb-[24px] uppercase relative z-1 after:content-[''] after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-white after:translate-y-[6px] after:-z-1">
              <span className="bg-[var(--background)] pr-2">LA</span>
            </p>
            <h4 className="tq__Instrument_22 mb-[32px] uppercase">Communication</h4>
            <div className="space-y-[10px]">
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Social Media Strategy & Design
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Search Engine Optimisation (SEO)
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Photography & Visual Storytelling
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Video Storyboarding & Production
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[48px] w-[20%]">
          <div className="w-1/2">
            <h4 className="tq__Instrument_22 mb-[32px] uppercase">Quick links</h4>
            <div className="space-y-[10px]">
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Home
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Cases
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Services
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Culture
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Blog
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                FAQs
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="tq__Instrument_22 mb-[32px] uppercase">Socials</h4>
            <div className="space-y-[10px]">
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Instagram
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Linkedin
              </Link>
              <Link
                href={'#'}
                className="tq__FoundersGrotesk_14 block opacity-50 hover:opacity-100 transition-all duration-700"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-start justify-between gap-[100px]">
        <div>
          <Link
            href={'#'}
            className="tq__FoundersGrotesk_14 uppercase mr-[48px] opacity-70 hover:opacity-100 transition-all duration-700"
          >
            @tequila.ae
          </Link>
          <Link
            href={'#'}
            className="tq__FoundersGrotesk_14 uppercase opacity-70 hover:opacity-100 transition-all duration-700"
          >
            cookies
          </Link>
        </div>
        <p className="tq__FoundersGrotesk_14 uppercase opacity-30">
          © 2025 Tequila. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
