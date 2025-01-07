import React from 'react'

const Section1 = ({home}) => {
  return (
    <div className='w-full sm:h-[svh] h-[100vh] relative'>
      <div ref={home} className='overlay w-full h-full sm:pt-[15vw] md:pt-[10vw]  sm:pb-[3vh] pt-[1.8vw] pb-[1.5vw] absolute top-0 left-0 flex flex-col items-center  text-white justify-between text-center'>
        <div>
          <div className='sm:h-[15vw] md:h-[10vw] lg:h-[8.5vw] h-[5.5vw] overflow-hidden'>
            <h2 style={{transform:"translateY(140%)"}} className='sm:text-[14vw] md:text-[10vw] lg:text-[8vw] whitespace-nowrap text-[5.5vw] leading-[.9] font-["font2"] font-medium '>365 days of</h2>
          </div>
          <div className='sm:h-[15vw] md:h-[10vw] lg:h-[8.5vw] h-[5.5vw] overflow-hidden'>
            <h2  style={{transform:"translateY(140%)"}} className='sm:text-[14vw] md:text-[10vw] lg:text-[8vw] whitespace-nowrap text-[5.5vw] leading-[.9] font-["font2"] font-medium '>pushing boundaries</h2>
          </div>
          <div className='sm:h-[15vw] md:h-[10vw] lg:h-[8.5vw] h-[5.5vw] overflow-hidden'>
            <h2  style={{transform:"translateY(140%)"}} className='sm:text-[14vw] md:text-[10vw] lg:text-[8vw] whitespace-nowrap text-[5.5vw] leading-[.9] font-["font2"] font-medium '>together</h2>
          </div>
          <h4 className='sm:text-[3.2vw] lg:text-[2vw] xl:text-[1.6vw] md:text-[2.5vw] text-[1vw] sm:w-[85%] md:w-[80%] lg:w-[80%] xl:w-[75%] w-[48%] mx-auto sm:mt-[6vw] md:mt-[3vw] mt-[1.5vw] font-[font3] font-normal opacity-0'>Curated by the editorial team of The Hollywood Reporter India, here is a comprehensive deep-dive into the best of 2024 across Indian film industries, with our range of year-enders that encompass everything from best films and performances to star fees and box-office figures. We hope you enjoy looking back at the year that was in Indian cinema.
          </h4>
        </div>
        <div className='sm:h-[52vw] md:h-[35vw] h-[14vw] w-full overflow-hidden'>
        <h1  style={{transform:"translateY(140%)"}} className='sm:text-[25vw] md:text-[20vw] lg:text-[18vw] text-[18vw] uppercase  sm:whitespace-normal  md:whitespace-normal whitespace-nowrap font-["font2"] font-medium  leading-[.9]'>2024 Wrapped</h1>
        </div>
      </div>
    </div>
  )
}

export default Section1