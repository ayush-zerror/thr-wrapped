import Footer from '@/components/Footer'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollToPlugin)

const index = () => {
  useEffect(()=>{
    document.title = "The Hollywood Reporter | Year in Review"
    gsap.to(window,{
      scrollTo:0,
    })
  },[])
  return (
   <div className='w-full relative overflow-hidden'>
    <Section1/>
    <Section2/>
    <Footer/>
   </div>
  )
}

export default index