import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen relative'>
            <video autoPlay playsInline muted loop className='w-full h-full object-cover' src="https://video.wixstatic.com/video/84770f_5d5600c9d7d545b5aac32125ff6c68a0/1080p/mp4/file.mp4"></video>
            <div className='overlay w-full h-full  absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-between text-center p-[1.5vw] sm:pt-[10vh] sm:py-[8vw]'>
                <h1 className='sm:text-[25vw] text-[17vw] sm:whitespace-normal whitespace-nowrap font-["font2"] leading-none w-fit font-medium sm:tracking-[-4px] tracking-[-15px]'>Onward 2025</h1>
                <div className='text-center'>
                    <h5 className='text-[.98vw] sm:hidden uppercase font-[font3] font-medium'>500 Terry Francine Street, San Francisco, CA 94158</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>500 Terry Francine Street,</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>San Francisco, CA 94158</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal text-[.98vw] uppercase font-[font3] font-medium'>123-456-7890</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal text-[.98vw] uppercase font-[font3] font-medium'>Info@mysite.com</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal  text-[.98vw] uppercase font-[font3] font-medium flex gap-[2vw] justify-center'>
                        <a href="">[INSTAGRAm]</a>

                        <a href="">[TIKTOK]</a>

                        <a href="">[linkedin]</a>
                    </h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:mt-[10vw] sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>Privacy Policy</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>Accessibility Statement</h5>
                    <h5 className='sm:text-[4vw] sm:font-normal sm:block hidden text-[.98vw] uppercase font-[font3] font-medium'>© 2035 by so.far. Built on Wix Studio</h5>

                    <h5 className='sm:hidden  text-[.98vw] mt-[2.5vw] uppercase font-[font3] font-medium flex gap-[2vw] justify-center'><span>Privacy Policy</span>

                        <span>Accessibility Statement</span>

                        <span>© 2035 by so.far. Built on Wix Studio</span></h5>
                </div>
            </div>
            <div className='footerover w-full h-[22vh] absolute top-[0] left-0'></div>
        </div>
    )
}

export default Footer