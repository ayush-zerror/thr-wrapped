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

  useEffect(()=>{
    document.title = "The Hollywood Reporter | Year in Review"
    gsap.to(window,{
      scrollTo:0,
    })
  },[])
  return (
    <div className='w-full relativ'>
      <div className='bg w-full h-screen fixed top-0 left-0'>
        <div ref={videoCover} className='h-screen w-full bg-[#000000c1] opacity-0 absolute top-0 left-0'></div>
      <video autoPlay playsInline muted loop className='w-full h-full object-cover' src="https://video.wixstatic.com/video/84770f_5d5600c9d7d545b5aac32125ff6c68a0/1080p/mp4/file.mp4"></video>
      </div>
   <div className='w-full relative overflow-hidden'>
    <Section1/>
    <Section2 videoCover={videoCover} footer={footer}/>
    <Footer footer={footer}/>
   </div>
   </div>
  )
}

export default index