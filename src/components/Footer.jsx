import React from 'react'
const Footer = ({footer}) => {
    return (
        <div ref={footer} className='footer w-full h-screen relative'>
            <div className='overlay w-full h-full  absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-between text-center p-[1.5vw] sm:pt-[10vh] sm:py-[8vw]'>
                <h1 className='sm:text-[25vw] text-[17vw] sm:whitespace-normal whitespace-nowrap font-["font2"] leading-none w-fit font-medium sm:tracking-[-4px] tracking-[-15px]'>Onward 2025</h1>
                <div className='text-center'>
                    <h5 className='text-[.98vw] sm:hidden uppercase font-[font3] font-medium'>RPSG Lifestyle Media Thapar House, 3rd floor,<br /> Janpath Lane, New Delhi - 110001.</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>500 Terry Francine Street,</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>San Francisco, CA 94158</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal  text-[.98vw] uppercase font-[font3] font-medium flex gap-[2vw] justify-center'>
                        <a href="https://www.facebook.com/hollywoodreporterindia" target='_block'>[FACEBOOK]</a>

                        <a href="https://www.instagram.com/hollywoodreporterindia" target='_block'>[INSTAGRAM]</a>

                        <a href="https://www.youtube.com/@HollywoodReporterIndia" target='_block'>[YOUTUBE]</a>
                    </h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:mt-[10vw] sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>Privacy Policy</h5>
                    <a href='https://www.hollywoodreporterindia.com/disclaimer' target='_block' className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>Disclaimer</a>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>© 2035 by so.far. Built on Wix Studio</h5>

                    <h5 className='sm:hidden  text-[.98vw] mt-[2.5vw] uppercase font-[font3] font-medium flex gap-[2vw] justify-center'><a href='https://www.hollywoodreporterindia.com/privacy-policy' target='_block'>Privacy Policy</a>

                        <a href='https://www.hollywoodreporterindia.com/disclaimer' target='_block'>Disclaimer</a>

                        <span>© 2025 The Hollywood Reporter, LLC.</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Footer