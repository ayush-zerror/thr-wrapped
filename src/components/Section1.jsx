import React from 'react'

const Section1 = () => {
  return (
    <div className='w-full h-[135vh] relative'>
        <video autoPlay playsInline muted loop className='w-full h-full object-cover' src="https://video.wixstatic.com/video/84770f_5d5600c9d7d545b5aac32125ff6c68a0/1080p/mp4/file.mp4"></video>
        <div className='overlay w-full h-full pt-[5.5vw] absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-between text-center'>
           <div>
           <h2 className='text-[6.6vw] leading-[.9] font-["font2"] font-medium tracking-tighter'>365 days of <br /> pushing boundaries <br /> together</h2>
           <h4 className='text-[1.4vw] mt-[2.5vw] font-[font3] font-regular'>Our Partnership Year in Review</h4>
           </div>
            <h1 className='text-[15.5vw] whitespace-nowrap font-["font2"] font-medium tracking-[-15px] absolute left-1/2 -translate-x-1/2 top-[72vh]'>2024 Wrapped</h1>
        </div>
        <div className='shadowover w-full h-[22vh] absolute bottom-[0vh] left-0'></div>
    </div>
  )
}

export default Section1