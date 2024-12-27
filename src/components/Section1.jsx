import React from 'react'

const Section1 = ({home}) => {
  return (
    <div className='w-full h-screen relative'>
      <div ref={home} className='overlay w-full h-full sm:pt-[30vw]  sm:pb-[10vh] pt-[5.5vw] pb-[2vw] absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-between text-center'>
        <div>
          <div className='h-[5.6vw] overflow-hidden'>
            <h2 style={{transform:"translateY(120%)"}} className='sm:text-[11vw] whitespace-nowrap text-[5.5vw] leading-[.9] font-["font2"] font-medium '>365 days of</h2>
          </div>
          <div className='h-[5.6vw] overflow-hidden'>
            <h2  style={{transform:"translateY(120%)"}} className='sm:text-[11vw] whitespace-nowrap text-[5.5vw] leading-[.9] font-["font2"] font-medium '>pushing boundaries</h2>
          </div>
          <div className='h-[5.6vw] overflow-hidden'>
            <h2  style={{transform:"translateY(120%)"}} className='sm:text-[11vw] whitespace-nowrap text-[5.5vw] leading-[.9] font-["font2"] font-medium '>together</h2>
          </div>
          <h4 className='sm:text-[4.5vw] text-[1.4vw] sm:mt-[6vw] mt-[2.5vw] font-[font3] font-regular opacity-0'>Our Partnership Year in Review</h4>
        </div>
        <div className='h-[16.5vw] w-full overflow-hidden'>
        <h1  style={{transform:"translateY(120%)"}} className='sm:text-[23vw] text-[16vw] sm:whitespace-normal whitespace-nowrap font-["font2"] font-medium sm:tracking-[-6px]  leading-[.9]'>2024 Wrapped</h1>
        </div>
      </div>
    </div>
  )
}

export default Section1