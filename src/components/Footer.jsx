import Link from 'next/link'
import React from 'react'
const Footer = ({ footer }) => {
    return (
        <div ref={footer} className='footer w-full h-screen relative'>
            <div className='overlay w-full h-full  absolute top-0 left-0 flex flex-col items-center text-white justify-between text-center p-[1.5vw] sm:pt-[15vh] sm:py-[8vw]'>
                <h1 className='sm:text-[25vw] md:text-[22vw] text-[18.5vw] sm:whitespace-normal md:whitespace-normal  whitespace-nowrap font-["font2"]  leading-[.7] w-fit font-medium'>Onward 2025</h1>
                <h5 className='sm:text-[3.4vw] lg:text-[2vw] xl:text-[1.6vw] md:text-[2.5vw] text-[1vw] font-[font3] font-normal sm:w-[85%] md:w-[75%] lg:w-[70xl xl:w-[70%] w-[48%] md:mb-[35vw] lg:mb-[36vw] xl:mb-[30vw]  mb-[15vw]'>2025 promises to be another pivotal year at the movies, with several big-budget releases, intriguing collaborations, as well as burgeoning indie breakouts and dark horses in the mix. Stay tuned to our website for the best of in-depth reportage, interviews, reviews, box-office analysis, and curated opinions on all we imagine as cinema in India.</h5>
                <div className='text-center'>
                    <h5 className='lg:text-[1.5vw] xl:text-[1.5vw] text-[.98vw] sm:hidden md:hidden  font-[font3] font-normal'>RPSG Lifestyle Media Thapar House, 3rd floor,<br /> Janpath Lane, New Delhi - 110001.</h5>
                    <h5 className='sm:text-[3.2vw] md:text-[2vw]  sm:font-normal sm:block md:block hidden text-[.98vw]  font-[font3] font-normal'>RPSG Lifestyle Media Thapar House, 3rd floor,</h5>
                    <h5 className='sm:text-[3.2vw] md:text-[2vw]  sm:mb-[2.5vw] sm:font-normal sm:block md:block hidden text-[.98vw]  font-[font3] font-normal'>Janpath Lane, New Delhi - 110001.</h5>
                  
                    <h5 className=' sm:text-[3.2vw] md:text-[2vw] sm:block md:block hidden text-[.98vw] lg:text-[1.5vw] sm:mb-[1vw] font-[font3] font-normal'><Link href="https://www.hollywoodreporterindia.com/">Visit The Hollywood Reporter India to explore.</Link></h5>
                    <h5 className=' sm:text-[3.2vw] md:text-[2vw] sm:block md:block hidden text-[.98vw] lg:text-[1.5vw]  font-[font3] font-normal'>© 2025 The Hollywood Reporter, LLC.</h5>

                    <h5 className='sm:hidden md:hidden  text-[.98vw] lg:text-[1.5vw] xl:text-[1.5vw] mt-[2.2vw]  font-[font3] font-normal flex gap-[2.8vw] justify-between w-full'><span>© 2025 The Hollywood Reporter, LLC.</span> <Link href="https://www.hollywoodreporterindia.com/">Visit The Hollywood Reporter India to explore.</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default Footer