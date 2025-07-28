'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap, { Power3, Power4 } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Image from 'next/image'
import Link from 'next/link'

import VideoPlayer from '@/component/VideoPlayer'
import AnimatedHeading from '@/component/TextAnimation'
import Button from '@/component/Button'
import ScrollReveal from '@/component/ScrollReveal'

import insights1 from '../../public/images/insights1.jpg'
import insights2 from '../../public/images/insights2.jpg'

export default function Home() {
  return (
    <>
      <main>
        <section className="pt-[30dvh] pb-[30dvh] overflow-hidden">
          <div className="container flex justify-between m-auto">
            <div className="w-5/12 text-right">
              <h1 className="tq__PPMedium__58 text-left w-full max-w-[800px] ml-auto bg-black p-[50px] -mt-[50px] relative z-1">
                <span className="block text-right">An Award Winning</span>
                <span className="block">Branding and Web Design</span>
                <span className="block">Agency in Dubai.</span>
              </h1>
            </div>
            <div className="w-7/12 relative">
              <h2 className="tq__Instrument_36 px-[50px] mb-[32px]">
                <AnimatedHeading text="Strategic, intentional, and unapologetically bold" />
                <AnimatedHeading text="Branding and Web Experiences built to lead, <span class='italic'>not follow.</span>" />
              </h2>
              <div className="flex gap-[10px] px-[50px] mb-[50px]">
                {/* <Link
                  href={'#'}
                  className="uppercase font-medium px-[15px] pt-[10px] pb-[6] border-1 border-white rounded-full"
                >
                  Get to know us
                </Link>

                <Link
                  href={'#'}
                  className="uppercase text-black font-medium px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
                >
                  Case Studies
                </Link> */}
                <ScrollReveal delay={0.2}>
                  <Button text={'Get to know us'} extraClasses="" onClick={() => {}} />
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <Button text={'Case Studies'} extraClasses="" onClick={() => {}} />
                </ScrollReveal>
              </div>
              <div className="px-[50px] relative">
                <div className="tq__VideoWrapper bg-red-400">
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[150px]">
          <div className="container flex justify-between m-auto">
            <div className="w-6/12">
              <h2 className="tq__PPBook__100 mb-[32px]">The Agency</h2>
              <h3 className="tq__Instrument_36 mb-[32px]">
                <AnimatedHeading text="Strategic, Intentional, and Unapologetically" />
                <AnimatedHeading text="Bold—Branding and Web Experiences" />
                <AnimatedHeading text="Built to Lead, Not Follow." />
              </h3>
              <div className="max-w-[65%] ml-auto">
                <ScrollReveal delay={0.2}>
                  <p className="tq__FoundersGrotesk_22 font-light indent-12 mb-[32px]">
                    A "Creative Intelligence Studio" - an agency that not only designs and builds,
                    but crafts brands with intellect, heart, and future-readiness. Not just
                    aesthetic designs or websites, but strategic experiences.
                  </p>
                </ScrollReveal>
                {/* <Link
                  href={'#'}
                  className="uppercase text-black font-medium inline-block px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
                >
                  Know More
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline ml-2 mb-1"
                  >
                    <path
                      d="M0 3.74709L10.9878 3.74709M10.9878 3.74709L7.69127 1M10.9878 3.74709L7.69127 6.49417"
                      stroke="black"
                      strokeWidth="1.09883"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link> */}
                <ScrollReveal delay={0.3}>
                  <Button text={'Know More'} extraClasses="" onClick={() => {}} />
                </ScrollReveal>
              </div>
            </div>
            <div className="w-6/12">
              <ScrollReveal delay={0.2}>
                <p className="tq__FoundersGrotesk_22 uppercase text-right mb-[64px]">
                  Why choose us
                </p>
              </ScrollReveal>
              <div className="flex justify-between items-start flex-wrap gap-[24px] max-w-[70%] ml-auto">
                <ScrollReveal delay={0.3} className="w-[calc(50%-12px)] mb-[64px]">
                  <p className="tq__FoundersGrotesk_22 uppercase border-b border-white">
                    Years of Experience
                  </p>
                  <h2 className="tq__Instrument_100">25+</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.4} className="w-[calc(50%-12px)] mb-[64px]">
                  <p className="tq__FoundersGrotesk_22 uppercase border-b border-white">
                    PRojects Delivered
                  </p>
                  <h2 className="tq__Instrument_100">800+</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.5} className="w-[calc(50%-12px)] mb-[64px]">
                  <p className="tq__FoundersGrotesk_22 uppercase border-b border-white">
                    Client Retention Rate
                  </p>
                  <h2 className="tq__Instrument_100">100%</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.6} className="w-[calc(50%-12px)] mb-[64px]">
                  <p className="tq__FoundersGrotesk_22 uppercase border-b border-white">
                    Projects Per Year
                  </p>
                  <h2 className="tq__Instrument_100">30+</h2>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[150px] relative">
          <div className="container m-auto">
            <h2 className="tq__PPBook__100 mb-[32px]">What We Do</h2>
            <h3 className="tq__Instrument_36 mb-[64px]">
              <AnimatedHeading text="Our services are wrapped" />
              <AnimatedHeading text="around our story, what we stand for!" />
            </h3>
            <div className="flex justify-between gap-[24px]">
              <ScrollReveal delay={0.2} className="w-full">
                <div className="tq__FoundersGrotesk_14 uppercase relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-[85%] after:h-full after:bg-white">
                  Technology
                </div>
                <div className="p-8 min-h-[270px] bg-[var(--foreground)]">
                  <h3 className="tq__PPMedium__58 text-[var(--background)] mb-[16px]">
                    Web Design & Development
                  </h3>
                  <p className="tq__FoundersGrotesk_22 font-light text-[var(--background)]">
                    Building beautiful, functional, user-centric experiences for highly interactive
                    web interfaces & frameworks
                  </p>
                </div>
                <svg
                  viewBox="0 0 600 206"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M600 206H535.662C532.819 202.071 530.383 196.839 528.354 190.304C527.419 187.03 526.251 184.302 524.848 182.119C523.445 180.093 521.73 178.379 519.703 176.976C518.924 176.352 518.534 175.65 518.534 174.871C518.534 174.248 519.001 173.857 519.937 173.701C528.354 171.363 535.837 166.219 542.385 158.269C549.088 150.318 554.31 140.341 558.052 128.338C561.949 116.179 563.897 102.928 563.897 88.5869C563.897 76.4276 562.494 65.1252 559.688 54.6807C557.038 44.2363 553.219 35.1166 548.23 27.3223C543.242 19.3721 537.474 13.2144 530.927 8.84961C524.536 4.48492 517.599 2.30279 510.116 2.30273C502.634 2.30273 495.619 4.48488 489.071 8.84961C482.524 13.2144 476.756 19.3721 471.768 27.3223C466.935 35.1166 463.116 44.2363 460.31 54.6807C457.659 65.1252 456.335 76.4276 456.335 88.5869C456.335 102.617 458.128 115.555 461.713 127.402C465.454 139.25 470.521 149.227 476.912 157.333C483.459 165.283 490.786 170.583 498.892 173.233C502.945 174.792 505.829 176.663 507.544 178.846C509.259 181.028 510.506 184.614 511.285 189.603C512.439 196.179 514.277 201.644 516.797 206H0V0H600V206ZM331.921 1.13379C330.986 1.13386 329.973 1.44506 328.882 2.06836C327.947 2.53602 326.309 3.08152 323.971 3.70508C321.788 4.32861 318.203 4.64062 313.215 4.64062H261.07C256.082 4.64062 252.418 4.32863 250.08 3.70508C247.898 3.08153 246.339 2.53602 245.403 2.06836C244.468 1.44488 243.454 1.13379 242.363 1.13379C239.869 1.13389 238.466 2.9264 238.154 6.51172L236.05 48.835C235.738 51.4851 236.752 52.8105 239.09 52.8105C240.96 52.8105 242.051 51.797 242.363 49.7705L243.532 42.0537C245.247 30.986 248.911 22.9581 254.522 17.9697C260.134 12.9813 265.825 10.4863 271.593 10.4863C274.555 10.4864 276.503 10.9543 277.438 11.8896C278.374 12.825 278.842 14.384 278.842 16.5664V156.865C278.842 160.139 278.295 162.399 277.204 163.646C276.113 164.738 274.008 165.518 270.891 165.985L260.368 167.622C258.342 167.778 257.329 168.713 257.329 170.428C257.329 172.142 258.498 173 260.836 173H313.448C315.787 173 316.956 172.143 316.956 170.428C316.956 168.713 315.943 167.778 313.916 167.622L303.394 165.985C300.432 165.518 298.327 164.738 297.08 163.646C295.989 162.399 295.443 160.139 295.443 156.865V16.5664C295.443 14.384 295.911 12.825 296.847 11.8896C297.782 10.9544 299.731 10.4863 302.692 10.4863C308.616 10.4864 314.384 12.9814 319.996 17.9697C325.608 22.9581 329.193 30.9861 330.752 42.0537L331.921 49.7705C332.233 51.7971 333.325 52.8105 335.195 52.8105C337.533 52.8104 338.546 51.4849 338.234 48.835L336.13 6.51172C335.818 2.92629 334.415 1.13379 331.921 1.13379ZM348.977 4.64062C346.638 4.64062 345.469 5.49821 345.469 7.21289C345.469 8.61588 346.482 9.55089 348.509 10.0186L353.887 10.9541C357.16 11.5776 359.265 12.4352 360.2 13.5264C361.291 14.6176 361.837 16.8006 361.837 20.0742V157.567C361.837 160.841 361.291 163.023 360.2 164.114C359.265 165.205 357.16 166.063 353.887 166.687L348.509 167.622C346.482 168.09 345.469 169.025 345.469 170.428C345.469 172.143 346.638 173 348.977 173H431.052C434.637 173 436.586 171.207 436.897 167.622L439.235 126C439.547 123.35 438.612 122.024 436.43 122.024C434.559 122.024 433.39 123.038 432.922 125.064L430.116 138.86C427.934 149.772 424.037 157.255 418.425 161.309C412.969 165.206 406.343 167.154 398.549 167.154C390.911 167.154 385.61 165.907 382.648 163.413C379.843 160.919 378.44 156.866 378.439 151.254V92.5615C378.44 90.3792 379.531 89.2881 381.713 89.2881H393.171C396.756 89.2881 399.484 90.1457 401.354 91.8604C403.381 93.5751 404.94 97.1603 406.031 102.616L408.37 114.074C408.994 116.412 410.318 117.426 412.345 117.114C414.059 116.802 414.917 115.477 414.917 113.139V60.5264C414.917 58.1883 414.059 56.8635 412.345 56.5518C410.318 56.24 408.994 57.2535 408.37 59.5918L406.031 71.2832C404.472 78.6098 400.263 82.2734 393.404 82.2734H381.713C379.53 82.2734 378.439 81.1815 378.439 78.999V22.6455C378.44 18.1252 379.608 15.0077 381.946 13.293C384.44 11.4223 388.806 10.4864 395.041 10.4863C404.394 10.4863 411.721 12.9813 417.021 17.9697C422.322 22.8023 425.829 30.5189 427.544 41.1191L428.947 49.7705C429.259 51.797 430.35 52.8105 432.221 52.8105C434.559 52.8105 435.573 51.485 435.261 48.835L433.39 10.0186C433.078 6.43344 431.129 4.64063 427.544 4.64062H348.977ZM510.116 8.61621C521.184 8.61633 529.836 15.2418 536.071 28.4922C542.307 41.5868 545.425 61.6185 545.425 88.5869C545.425 115.555 542.307 135.665 536.071 148.915C529.836 162.165 521.184 168.791 510.116 168.791C499.204 168.791 490.552 162.166 484.16 148.915C477.925 135.665 474.808 115.555 474.808 88.5869C474.808 61.6186 477.925 41.5868 484.16 28.4922C490.552 15.2417 499.204 8.61621 510.116 8.61621Z"
                    fill="#f9f8fc"
                  />
                </svg>
              </ScrollReveal>
              <ScrollReveal delay={0.3} className="w-full">
                <div className="tq__FoundersGrotesk_14 uppercase relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-[80%] after:h-full after:bg-white">
                  Identity & Design
                </div>
                <div className="p-8 min-h-[270px] bg-[var(--foreground)]">
                  <h3 className="tq__PPMedium__58 text-[var(--background)] mb-[16px]">Branding</h3>
                  <p className="tq__FoundersGrotesk_22 font-light text-[var(--background)] mb-[32px]">
                    Crafting an effective perception of your brand, and elevating it with an
                    efficient visual language
                  </p>
                </div>
                <svg
                  viewBox="0 0 600 206"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M600 206H0V0H600V206ZM398.316 4.64062C395.978 4.64071 394.81 5.49829 394.81 7.21289C394.81 8.61576 395.822 9.55085 397.849 10.0186L403.228 10.9541C406.501 11.5777 408.606 12.4352 409.541 13.5264C410.632 14.6176 411.178 16.8007 411.178 20.0742V128.104C411.178 137.302 412.97 145.486 416.556 152.656C420.141 159.671 425.129 165.206 431.521 169.259C438.068 173.156 445.551 175.104 453.969 175.104C466.596 175.104 476.729 170.818 484.367 162.244C492.006 153.67 495.825 142.29 495.825 128.104V24.75C495.825 16.4882 498.475 11.8894 503.775 10.9541L509.153 10.0186C511.18 9.55087 512.193 8.61583 512.193 7.21289C512.193 5.49822 511.024 4.64064 508.686 4.64062H475.014C472.675 4.64063 471.506 5.57661 471.506 7.44727C471.506 8.84993 472.364 9.70676 474.078 10.0186L480.392 10.9541C485.692 11.8894 488.342 16.5664 488.342 24.9844V128.338C488.342 140.185 485.692 149.383 480.392 155.931C475.091 162.478 467.609 165.751 457.944 165.751C448.435 165.751 441.03 162.478 435.729 155.931C430.429 149.383 427.779 140.185 427.779 128.338V20.3076C427.779 17.0341 428.325 14.7735 429.416 13.5264C430.507 12.2793 432.612 11.4218 435.729 10.9541L442.043 10.0186C443.758 9.7068 444.615 8.85001 444.615 7.44727C444.615 5.57671 443.446 4.64073 441.108 4.64062H398.316ZM522.98 4.64062C520.642 4.64062 519.473 5.49821 519.473 7.21289C519.473 8.61587 520.486 9.55088 522.513 10.0186L527.891 10.9541C531.164 11.5776 533.269 12.4352 534.204 13.5264C535.295 14.6176 535.841 16.8006 535.841 20.0742V157.567C535.841 160.841 535.295 163.023 534.204 164.114C533.269 165.205 531.164 166.063 527.891 166.687L522.513 167.622C520.486 168.09 519.473 169.025 519.473 170.428C519.473 172.143 520.642 173 522.98 173H565.304C567.642 173 568.812 172.143 568.812 170.428C568.811 169.025 567.798 168.09 565.771 167.622L560.394 166.687C557.12 166.063 554.937 165.205 553.846 164.114C552.911 163.023 552.443 160.841 552.443 157.567V20.0742C552.443 16.8007 552.91 14.6176 553.846 13.5264C554.937 12.4352 557.12 11.5777 560.394 10.9541L565.771 10.0186C567.798 9.55089 568.812 8.61588 568.812 7.21289C568.811 5.49821 567.642 4.64062 565.304 4.64062H522.98Z"
                    fill="#f9f8fc"
                  />
                </svg>
              </ScrollReveal>
              <ScrollReveal delay={0.4} className="w-full">
                <div className="tq__FoundersGrotesk_14 uppercase relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-[76%] after:h-full after:bg-white">
                  Visual Storytelling
                </div>
                <div className="p-8 min-h-[270px] bg-[var(--foreground)]">
                  <h3 className="tq__PPMedium__58 text-[var(--background)] mb-[16px]">
                    Communication
                  </h3>
                  <p className="tq__FoundersGrotesk_22 font-light text-[var(--background)] mb-[32px]">
                    Elevating your brand's social presence to your potential customers aided with
                    effective strategy & design
                  </p>
                </div>
                <svg
                  viewBox="0 0 600 206"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M600 206H0V0H600V206ZM377.749 4.64062C375.411 4.64062 374.241 5.49821 374.241 7.21289C374.241 8.61588 375.255 9.55089 377.281 10.0186L382.659 10.9541C385.933 11.5776 388.037 12.4352 388.973 13.5264C390.064 14.6176 390.609 16.8006 390.609 20.0742V157.567C390.609 160.841 390.064 163.023 388.973 164.114C388.037 165.205 385.933 166.063 382.659 166.687L377.281 167.622C375.255 168.09 374.241 169.025 374.241 170.428C374.241 172.143 375.411 173 377.749 173H453.276C456.862 173 458.81 171.207 459.122 167.622L461.929 123.661C462.24 121.011 461.304 119.687 459.122 119.687C457.252 119.687 456.083 120.7 455.615 122.727L452.575 138.393C451.016 146.343 448.677 152.423 445.56 156.632C442.442 160.685 438.934 163.491 435.037 165.05C431.296 166.453 427.633 167.154 424.048 167.154C419.215 167.154 415.161 165.907 411.888 163.413C408.77 160.919 407.212 156.866 407.212 151.254V20.3076C407.212 17.034 407.679 14.7735 408.614 13.5264C409.705 12.2793 411.888 11.4218 415.162 10.9541L421.476 10.0186C423.19 9.70675 424.048 8.8499 424.048 7.44727C424.048 5.57663 422.878 4.64065 420.54 4.64062H377.749ZM519.705 2.30273C519.082 2.30273 518.38 2.53634 517.601 3.00391C516.977 3.47157 516.509 4.48507 516.197 6.04395L479.953 152.188C478.862 156.553 477.537 159.983 475.979 162.478C474.42 164.816 472.081 166.296 468.963 166.92L465.456 167.622C463.274 168.09 462.183 169.103 462.183 170.662C462.183 172.221 463.351 173 465.689 173H498.426C500.608 173 501.7 172.143 501.7 170.428C501.7 169.025 500.375 168.09 497.725 167.622L494.217 167.154C487.202 166.219 484.864 161.308 487.202 152.423L495.152 121.089C496.244 117.036 498.816 115.01 502.869 115.01H527.421C531.63 115.01 534.202 117.036 535.138 121.089L544.023 157.333C544.803 160.763 544.803 163.179 544.023 164.582C543.4 165.985 541.763 166.842 539.113 167.154L534.67 167.622C532.02 167.778 530.695 168.713 530.695 170.428C530.695 172.143 531.786 173 533.969 173H573.954C576.292 173 577.461 172.221 577.461 170.662C577.461 169.103 576.37 168.09 574.188 167.622L570.681 166.92C567.719 166.296 565.536 165.128 564.133 163.413C562.73 161.698 561.483 158.658 560.392 154.293L523.446 6.04395C523.135 4.48514 522.589 3.4716 521.81 3.00391C521.186 2.53629 520.484 2.30278 519.705 2.30273ZM515.964 41.3525L530.929 104.02C531.396 106.67 530.383 107.995 527.889 107.995H502.167C499.673 107.995 498.66 106.669 499.128 104.02L514.794 41.3525H515.964Z"
                    fill="#f9f8fc"
                  />
                </svg>
              </ScrollReveal>
            </div>
          </div>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-1"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/what-we-do.mp4"
            style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
          />
        </section>

        <section className="py-[150px]">
          <div className="container flex justify-between items-end m-auto mb-[150px]">
            <div className="w-6/12">
              <h2 className="tq__PPBook__100">
                Awards & <br />
                Accolades
              </h2>
            </div>
            <div className="w-6/12">
              <div className="max-w-[65%] ml-auto">
                <ScrollReveal delay={0.2}>
                  <p className="tq__FoundersGrotesk_22 font-light indent-12 mb-[32px]">
                    A "Creative Intelligence Studio" - an agency that not only designs and builds,
                    but crafts brands with intellect, heart, and future-readiness. Not just
                    aesthetic designs or websites, but strategic experiences.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
          <div className="container m-auto">
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2024</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Clutch</p>
              <p className="tq__FoundersGrotesk_22 w-full">Top Branding Agency</p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2024</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Sortlist</p>
              <p className="tq__FoundersGrotesk_22 w-full">Best Logo Design</p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2024</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Tally Awards</p>
              <p className="tq__FoundersGrotesk_22 w-full">Top Website Design </p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2023</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Awwwards</p>
              <p className="tq__FoundersGrotesk_22 w-full">Best Logo Design</p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2023</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Design Awards</p>
              <p className="tq__FoundersGrotesk_22 w-full">Top Branding Agency</p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2022</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Tally Awards</p>
              <p className="tq__FoundersGrotesk_22 w-full">Top Website Design </p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2022</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Design Awards</p>
              <p className="tq__FoundersGrotesk_22 w-full">Top Branding Agency</p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
              <p className="tq__FoundersGrotesk_22 w-3/12">2021</p>
              <p className="tq__FoundersGrotesk_22 w-3/12">Awwwards</p>
              <p className="tq__FoundersGrotesk_22 w-full">Best Logo Design</p>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 6.06675H20.3441M20.3441 6.06675L14.264 1M20.3441 6.06675L14.264 11.1335"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="2.0267"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        <section className="py-[150px]">
          <div className="container flex justify-between items-end m-auto mb-[150px]">
            <div className="w-6/12">
              <h2 className="tq__PPBook__100">Case Studies</h2>
            </div>
            <div className="w-6/12">
              <div className="max-w-[65%] ml-auto">
                <ScrollReveal delay={0.2}>
                  <p className="tq__FoundersGrotesk_22 font-light indent-12">
                    A "Creative Intelligence Studio" - an agency that not only designs and builds,
                    but crafts brands with intellect, heart, and future-readiness. Not just
                    aesthetic designs or websites, but strategic experiences.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
          <div className="container flex justify-between items-start gap-[32px] m-auto mb-[150px]">
            <div className="w-7/12">
              <video
                className="w-full mb-[24px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/case-study1.mp4"
                style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
              />
              <h3 className="tq__PPMedium__36">Nour Sabi</h3>
              <h3 className="tq__Instrument_36">Fashion Design UAE</h3>
            </div>
            <div className="w-5/12">
              <video
                className="w-full mb-[24px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/case-study2.mp4"
                style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
              />
              <h3 className="tq__PPMedium__36">Nour Sabi</h3>
              <h3 className="tq__Instrument_36">Fashion Design UAE</h3>
            </div>
          </div>
          <div className="container flex justify-between items-start gap-[32px] m-auto mb-[150px]">
            <div className="w-5/12">
              <video
                className="w-full mb-[24px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/case-study3.mp4"
                style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
              />
              <h3 className="tq__PPMedium__36">Nour Sabi</h3>
              <h3 className="tq__Instrument_36">Fashion Design UAE</h3>
            </div>
            <div className="w-7/12">
              <video
                className="w-full mb-[24px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/case-study4.mp4"
                style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
              />
              <h3 className="tq__PPMedium__36">Nour Sabi</h3>
              <h3 className="tq__Instrument_36">Fashion Design UAE</h3>
            </div>
          </div>
          <div className="container flex justify-between items-start gap-[32px] m-auto">
            <div className="w-7/12">
              <video
                className="w-full mb-[24px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/case-study5.mp4"
                style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
              />
              <h3 className="tq__PPMedium__36">Nour Sabi</h3>
              <h3 className="tq__Instrument_36">Fashion Design UAE</h3>
            </div>
            <div className="w-5/12">
              <video
                className="w-full mb-[24px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/case-study6.mp4"
                style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
              />
              <h3 className="tq__PPMedium__36">Nour Sabi</h3>
              <h3 className="tq__Instrument_36 mb-[32px]">Fashion Design UAE</h3>
              <Link
                href={'#'}
                className="uppercase text-black font-medium inline-block px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
              >
                View More
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2 mb-0.5"
                >
                  <path
                    d="M0 3.74709L10.9878 3.74709M10.9878 3.74709L7.69127 1M10.9878 3.74709L7.69127 6.49417"
                    stroke="black"
                    strokeWidth="1.09883"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-[150px] w-screen overflow-hidden">
          <div className="container flex justify-between items-end m-auto">
            <div className="w-6/12">
              <h2 className="tq__PPBook__100 mb-[64px]">Testimonials</h2>
              <h3 className="tq__Instrument_36 mb-[64px]">
                <AnimatedHeading text="Don't worry if you can't find your" className="indent-12" />
                <AnimatedHeading text="question in the list given, ask us directly" />
                <AnimatedHeading text="we are here for you." />
              </h3>
            </div>
            <div className="w-6/12"></div>
          </div>
          <div className="container m-auto">
            <div className="testimonial-slider flex items-center gap-[24px]">
              <div className="testimonial-slide flex items-start gap-[24px]">
                <video
                  className="h-full mb-[24px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/testimonial1.mp4"
                  style={{ maxWidth: 'inherit', maxHeight: '65vh' }}
                />
                <div className="flex items-end p-[64px] border-[0.5px] border-white w-[50vh] h-[65vh]">
                  <div>
                    <h3 className="tq__Instrument_58 mb-[32px]">
                      "Exceptional Creativity and Professionalism!"
                    </h3>
                    <p className="tq__FoundersGrotesk_22 mb-[32px]">
                      Working with Team Tequila has been an absolutely incredible experience! From
                      the very first interaction, it was evident that this team is not just about
                      delivering web design services—they are brand creators who truly elevate your
                      imagination.
                    </p>
                    <p className="tq__FoundersGrotesk_22 uppercase">Ravi Kotwani</p>
                    <p className="tq__FoundersGrotesk_22 uppercase opacity-50">CEO, XTASY</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-slide flex items-start gap-[24px]">
                <video
                  className="h-full mb-[24px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/testimonial1.mp4"
                  style={{ maxWidth: 'inherit', maxHeight: '65vh' }}
                />
                <div className="flex items-end p-[64px] border-[0.5px] border-white w-[50vh] h-[65vh]">
                  <div>
                    <h3 className="tq__Instrument_58 mb-[32px]">
                      "Exceptional Creativity and Professionalism!"
                    </h3>
                    <p className="tq__FoundersGrotesk_22 mb-[32px]">
                      Working with Team Tequila has been an absolutely incredible experience! From
                      the very first interaction, it was evident that this team is not just about
                      delivering web design services—they are brand creators who truly elevate your
                      imagination.
                    </p>
                    <p className="tq__FoundersGrotesk_22 uppercase">Ravi Kotwani</p>
                    <p className="tq__FoundersGrotesk_22 uppercase opacity-50">CEO, XTASY</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-slide flex items-start gap-[24px]">
                <video
                  className="h-full mb-[24px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/testimonial1.mp4"
                  style={{ maxWidth: 'inherit', maxHeight: '65vh' }}
                />
                <div className="flex items-end p-[64px] border-[0.5px] border-white w-[50vh] h-[65vh]">
                  <div>
                    <h3 className="tq__Instrument_58 mb-[32px]">
                      "Exceptional Creativity and Professionalism!"
                    </h3>
                    <p className="tq__FoundersGrotesk_22 mb-[32px]">
                      Working with Team Tequila has been an absolutely incredible experience! From
                      the very first interaction, it was evident that this team is not just about
                      delivering web design services—they are brand creators who truly elevate your
                      imagination.
                    </p>
                    <p className="tq__FoundersGrotesk_22 uppercase">Ravi Kotwani</p>
                    <p className="tq__FoundersGrotesk_22 uppercase opacity-50">CEO, XTASY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[150px]">
          <div className="container m-auto mb-[64px]">
            <h2 className="tq__PPBook__100">FAQ</h2>
          </div>
          <div className="container flex justify-between items-start m-auto">
            <div className="w-6/12">
              <h3 className="tq__Instrument_36 mb-[32px]">
                <AnimatedHeading text="Don't worry if you can't find your" className="indent-12" />
                <AnimatedHeading text="question in the list given, ask us directly" />
                <AnimatedHeading text="we are here for you." />
              </h3>
              {/* <Link
                href={'#'}
                className="uppercase text-black font-medium inline-block px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
              >
                Contact us
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2 mb-0.5"
                >
                  <path
                    d="M0 3.74709L10.9878 3.74709M10.9878 3.74709L7.69127 1M10.9878 3.74709L7.69127 6.49417"
                    stroke="black"
                    strokeWidth="1.09883"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link> */}
              <ScrollReveal delay={0.2}>
                <Button text={'Contact us'} extraClasses="" onClick={() => {}} />
              </ScrollReveal>
            </div>
            <div className="w-6/12">
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  What is a responsive web design, and why is it crucial for my Dubai website?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  What is SEO, and how can it benefit my Dubai business?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  What kind of website maintenance services do you offer in Dubai?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  Do you provide creative design contract services in Dubai?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  Do you offer e-commerce website development services in Dubai?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  Why should I choose Tequila as my branding and web design partner in Dubai?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  Do you do logo design in Dubai, and how is it different from branding?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  What is brand identity, and why is it important for my business?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  How much does it cost to create a new brand identity or rebrand my current
                  business?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  What are the key elements of a successful website design in Dubai?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-[20px] pb-[14px] flex justify-between items-center gap-[32px] border-b-[0.5px] border-[#6E6E6E]">
                <p className="tq__FoundersGrotesk_16 w-full">
                  How long does it take to design and develop a website in Dubai?
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.08203 5.66518L9.16406 1"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.63281"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[150px]">
          <div className="container m-auto">
            <h2 className="tq__PPBook__100 mb-[64px]">Insights</h2>
            <div className="flex justify-between gap-[32px]">
              <div className="w-full">
                <ScrollReveal delay={0.1}>
                  <p className="tq__FoundersGrotesk_16">2025</p>
                </ScrollReveal>
                <h4 className="tq__Instrument_36 mb-[64px]">
                  <AnimatedHeading text="The Seven Pillars of Building a" />
                  <AnimatedHeading text="Premium Brand in UAE." />
                </h4>
                <ScrollReveal delay={0.3}>
                  <Image
                    src={insights1}
                    width={insights1.width}
                    height={insights1.height}
                    alt={''}
                    className="w-full"
                  />
                </ScrollReveal>
              </div>
              <div className="w-full">
                <ScrollReveal delay={0.1}>
                  <p className="tq__FoundersGrotesk_16">2025</p>
                </ScrollReveal>
                <h4 className="tq__Instrument_36 mb-[64px]">
                  <AnimatedHeading text="The Seven Pillars of Building a" />
                  <AnimatedHeading text="Premium Brand in UAE." />
                </h4>
                <ScrollReveal delay={0.3}>
                  <Image
                    src={insights2}
                    width={insights2.width}
                    height={insights2.height}
                    alt={''}
                    className="w-full mb-[32px]"
                  />
                </ScrollReveal>
                {/* <Link
                  href={'#'}
                  className="uppercase text-black font-medium inline-block px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
                >
                  Read More Insights
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline ml-2 mb-1"
                  >
                    <path
                      d="M0 3.74709L10.9878 3.74709M10.9878 3.74709L7.69127 1M10.9878 3.74709L7.69127 6.49417"
                      stroke="black"
                      strokeWidth="1.09883"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link> */}
                <ScrollReveal delay={0.4}>
                  <Button text={'Read More Insights'} extraClasses="" onClick={() => {}} />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[150px]">
          <div className="container m-auto mb-[64px]">
            <h2 className="tq__PPBook__100">Talk with Us!</h2>
          </div>
          <div className="container flex justify-between m-auto">
            <div className="w-5/12">
              <div className="max-w-[65%]">
                <ScrollReveal delay={0.2}>
                  <p className="tq__FoundersGrotesk_22 font-light indent-12 mb-[32px]">
                    A "Creative Intelligence Studio" - an agency that not only designs and builds,
                    but crafts brands with intellect, heart, and future-readiness. Not just
                    aesthetic designs or websites, but strategic experiences.
                  </p>
                </ScrollReveal>
              </div>
            </div>
            <div className="w-7/12">
              <ScrollReveal delay={0.3}>
                <div className="tq__Instrument_58 mb-[24px]">
                  Hey Tequila, I'm
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="tq__FoundersGrotesk_22 uppercase inline mx-[24px] align-middle border-b border-white"
                  />
                  and you can reach me at
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="tq__FoundersGrotesk_22 uppercase inline mx-[24px] align-middle border-b border-white"
                  />
                  or
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="tq__FoundersGrotesk_22 uppercase inline mx-[24px] align-middle border-b border-white"
                  />
                  I'd love to share a little about what's on my mind:
                  <textarea
                    placeholder="Your Message"
                    className="tq__FoundersGrotesk_22 uppercase inline w-full h-[180px] align-middle border-b border-white"
                  ></textarea>
                </div>

                {/* <button className="uppercase text-black font-medium inline-block px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full">
                Share Message
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2 mb-1"
                >
                  <path
                    d="M0 3.74709L10.9878 3.74709M10.9878 3.74709L7.69127 1M10.9878 3.74709L7.69127 6.49417"
                    stroke="black"
                    strokeWidth="1.09883"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
                <Button text={'Share Message'} extraClasses="" onClick={() => {}} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-screen">
          <video
            className="w-screen object-cover -z-1"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/scrolling-bar.mp4"
            style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
          />
        </section>
        <section className="pt-[150px] relative">
          <div className="container m-auto">
            <ScrollReveal delay={0.2}>
              <h2 className="tq__Instrument_58">
                Let's build your <span className="italic">IDEA</span> into a{' '}
                <span className="italic">BRAND</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link href={'#'} className="tq__PPBook_250">
                info@tequila.ae
              </Link>
            </ScrollReveal>
          </div>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-1"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/what-we-do.mp4"
            style={{ maxWidth: 'inherit', maxHeight: 'inherit' }}
          />
        </section>
      </main>
    </>
  )
}
