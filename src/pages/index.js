import Footer from '@/components/Footer'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollToPlugin)

const index = () => {
  const videoCover = useRef()
  const footer = useRef()
  const home = useRef()

  useEffect(() => {


    document.title = "The Hollywood Reporter | Year in Review"
    gsap.to(window, {
      scrollTo: 0,
    })
    var tl = gsap.timeline()
    tl
      .to(".loader-logo", {
        opacity: 0,
        delay: 1,
        duration: .5
      })
      .to(".loader-text", {
        opacity: 1,
        duration: .5,
      })
      .to(".loader", {
        top: "-100%",
        delay: .8,
        duration: 1
      })
      .to(home.current.querySelectorAll("h2"), {
        transform: "translateY(0%)",
        stagger: 0.2,
        duration: .5,
        delay: -.7,

      }, "a")
      .to(home.current.querySelector("h4"), {
        opacity: 1,
        duration: .5,
        delay: .1,
      }, "a")
      .to(home.current.querySelector("h1"), {
        transform: "translateY(0%)",
        delay: -.7,
        duration: .5,
      }, "a")

}, [])
return (
  <div className='w-full relativ'>
    <div className='bg w-full bg-black h-screen fixed top-0 left-0'>
      <div ref={videoCover} className='h-screen w-full bg-[#000000c1] opacity-0 absolute top-0 left-0'></div>
      <video autoPlay playsInline muted loop className='w-full h-full object-cover' src="/video.mp4"></video>
    </div>
    <div className='loader w-full h-screen fixed top-0 left-0 bg-white z-[999] flex items-center justify-center flex-col'>
      <img src="/thr-logo.png" className='loader-logo w-[15%] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2' alt="" />
      <h4 className='loader-text font-[font2] uppercase text-[#DE1F26] text-[3vw] font-semibold opacity-0'>The Wrapped 2024</h4>
    </div>
    <div className='main  relative overflow-hidden'>
      <Section1 home={home} />
      <Section2 videoCover={videoCover} footer={footer} />
      <Footer footer={footer} />
    </div>
  </div>
)
}

export default index