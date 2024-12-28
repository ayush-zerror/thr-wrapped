import React from 'react'

const Section1 = ({home}) => {
  return (
    <div className='w-full h-screen relative'>
      <div ref={home} className='overlay w-full h-full sm:pt-[30vw]  sm:pb-[10vh] pt-[2.5vw] pb-[2vw] absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-between text-center'>
        <div>
          <div className='sm:h-[15vw] h-[6.5vw] overflow-hidden'>
            <h2 style={{transform:"translateY(120%)"}} className='sm:text-[14vw] whitespace-nowrap text-[6.5vw] leading-[.9] font-["font2"] font-medium '>365 days of</h2>
          </div>
          <div className='sm:h-[15vw] h-[6.5vw] overflow-hidden'>
            <h2  style={{transform:"translateY(120%)"}} className='sm:text-[14vw] whitespace-nowrap text-[6.5vw] leading-[.9] font-["font2"] font-medium '>pushing boundaries</h2>
          </div>
          <div className='sm:h-[15vw] h-[6.5vw] overflow-hidden'>
            <h2  style={{transform:"translateY(120%)"}} className='sm:text-[14vw] whitespace-nowrap text-[6.5vw] leading-[.9] font-["font2"] font-medium '>together</h2>
          </div>
          <h4 className='sm:text-[6vw] text-[1.4vw] sm:mt-[6vw] mt-[1.5vw] font-[font3] font-regular opacity-0'>Our Partnership Year in Review</h4>
        </div>
        <div className='sm:h-[49vw] h-[14vw] w-full overflow-hidden'>
        <h1  style={{transform:"translateY(120%)"}} className='sm:text-[25vw] text-[18vw] uppercase  sm:whitespace-normal whitespace-nowrap font-["font2"] font-medium  leading-[.9]'>2024 Wrapped</h1>
        </div>
      </div>
    </div>
  )
}

export default Section1