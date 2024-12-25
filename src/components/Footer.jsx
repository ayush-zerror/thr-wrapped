import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[135vh] relative'>
            <video autoPlay playsInline muted loop className='w-full h-full object-cover' src="https://video.wixstatic.com/video/84770f_5d5600c9d7d545b5aac32125ff6c68a0/1080p/mp4/file.mp4"></video>
            <div className='overlay w-full h-full  absolute top-0 left-0 flex flex-col items-center mix-blend-difference text-white justify-end text-center p-[1.5vw]'>
                <div className='text-center'>
                    <h5 className='text-[.98vw] uppercase font-[font3] font-medium'>500 Terry Francine Street, San Francisco, CA 94158</h5>
                    <h5 className='text-[.98vw] uppercase font-[font3] font-medium'>123-456-7890</h5>
                    <h5 className='text-[.98vw] uppercase font-[font3] font-medium'>Info@mysite.com</h5>
                    <h5 className='text-[.98vw] uppercase font-[font3] font-medium flex gap-[2vw] justify-center'>
                        <a href="">[INSTAGRAm]</a>

                        <a href="">[TIKTOK]</a>

                        <a href="">[linkedin]</a>
                    </h5>
                    <h5 className='text-[.98vw] mt-[2.5vw] uppercase font-[font3] font-medium flex gap-[2vw] justify-center'><span>Privacy Policy</span>

                        <span>Accessibility Statement</span>

                        <span>© 2035 by so.far. Built on Wix Studio</span></h5>
                </div>
                <h1 className='text-[17vw] whitespace-nowrap font-["font2"] leading-none w-fit font-medium tracking-[-15px] absolute left-1/2 -translate-x-[50.7%] bottom-[78vh]'>Onward 2025</h1>
            </div>
            <div className='footerover w-full h-[22vh] absolute top-[0] left-0'></div>
        </div>
    )
}

export default Footer