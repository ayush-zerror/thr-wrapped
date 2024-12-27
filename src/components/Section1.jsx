import React from 'react'

const Section1 = () => {
  return (
    <div className='w-full h-screen relative'>
        <div className='overlay w-full h-full sm:pt-[30vw]  sm:pb-[10vh] pt-[5.5vw] pb-[2vw] absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-between text-center'>
           <div>
           <h2 className='sm:text-[11vw] whitespace-nowrap text-[6vw] leading-[.9] font-["font2"] font-medium tracking-tighter'>365 days of <br /> pushing boundaries <br /> together</h2>
           <h4 className='sm:text-[4.5vw] text-[1.4vw] sm:mt-[6vw] mt-[2.5vw] font-[font3] font-regular'>Our Partnership Year in Review</h4>
           </div>
            <h1 className='sm:text-[23vw] text-[15.5vw] sm:whitespace-normal whitespace-nowrap font-["font2"] font-medium sm:tracking-[-6px] tracking-[-15px] leading-none'>2024 Wrapped</h1>
        </div>
    </div>
  )
}

export default Section1