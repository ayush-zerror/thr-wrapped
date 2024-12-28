import gsap, { wrap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = ({ videoCover, footer }) => {
  const container = useRef()
  const wrappers = useRef([])

  const data = [
    {
      name: "The Year in Malayalam Cinema",
      details: [
        "Kani Kusruti (Girls Will Be Girls)",
        "Vikrant Massey (Sector 36)",
        "Alia Bhatt (Jigra)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Mukul Chadda (Fairy Folk)",
        "Vivek Gomber (Lootere)",
        "Konkona Sen Sharma (Killer Soup)",
        "Abhishek Bachchan (I Want to Talk)"
      ],
      poster: "https://static.wixstatic.com/media/c837a6_5acaf7f7a7054ffba851083c0a5f36cd~mv2.jpg/v1/fill/w_633,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%206.jpg"
    },
    {
      name: "Vikrant Massey",
      details: [
        "Kani Kusruti (Girls Will Be Girls)",
        "Vikrant Massey (Sector 36)",
        "Alia Bhatt (Jigra)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Mukul Chadda (Fairy Folk)",
        "Vivek Gomber (Lootere)",
        "Konkona Sen Sharma (Killer Soup)",
        "Abhishek Bachchan (I Want to Talk)"
      ],
      poster: "https://static.wixstatic.com/media/c837a6_61e10f7643be4beda0c3a37555fb7c5a~mv2.jpg/v1/fill/w_633,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-3.jpg"
    },
    {
      name: "Alia Bhatt",
      details: [
        "Kani Kusruti (Girls Will Be Girls)",
        "Vikrant Massey (Sector 36)",
        "Alia Bhatt (Jigra)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Mukul Chadda (Fairy Folk)",
        "Vivek Gomber (Lootere)",
        "Konkona Sen Sharma (Killer Soup)",
        "Abhishek Bachchan (I Want to Talk)"
      ],
      poster: "https://static.wixstatic.com/media/c837a6_2f46ff9289464f1681b6543d0434cbe3~mv2.jpg/v1/fill/w_633,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_295113297.jpg"
    },
    {
      name: "Diljit Dosanjh",
      details: [
        "Kani Kusruti (Girls Will Be Girls)",
        "Vikrant Massey (Sector 36)",
        "Alia Bhatt (Jigra)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Mukul Chadda (Fairy Folk)",
        "Vivek Gomber (Lootere)",
        "Konkona Sen Sharma (Killer Soup)",
        "Abhishek Bachchan (I Want to Talk)"
      ],
      poster: "https://static.wixstatic.com/media/c837a6_c35561848159463e88792aeaf6a9a8ab~mv2.jpg/v1/fill/w_633,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2011.jpg"
    },
    {
      name: "Anjali Anand",
      details: [
        "Kani Kusruti (Girls Will Be Girls)",
        "Vikrant Massey (Sector 36)",
        "Alia Bhatt (Jigra)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Mukul Chadda (Fairy Folk)",
        "Vivek Gomber (Lootere)",
        "Konkona Sen Sharma (Killer Soup)",
        "Abhishek Bachchan (I Want to Talk)"
      ],
      poster: "https://static.wixstatic.com/media/c837a6_6f932654c84c4452a05f89a833dae841~mv2.jpg/v1/fill/w_633,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_438685046.jpg"
    },
    {
      name: "Gyanendra Tripathi",
      details: [
        "Kani Kusruti (Girls Will Be Girls)",
        "Vikrant Massey (Sector 36)",
        "Alia Bhatt (Jigra)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Mukul Chadda (Fairy Folk)",
        "Vivek Gomber (Lootere)",
        "Konkona Sen Sharma (Killer Soup)",
        "Abhishek Bachchan (I Want to Talk)"
      ],
      poster: "https://static.wixstatic.com/media/c837a6_118d933f700b4fa8809ad163dc04e946~mv2.jpg/v1/fill/w_633,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_589565152_Preview.jpg"
    },
  ];

  useEffect(() => {
    if (container.current && wrappers.current.length > 0) {
      var tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: wrappers.current[0],
          scroller: "body",
          // markers: true,
          start: "top 80%",
          end: "top 50%",
        }
      })
      tl1
        .from(wrappers.current[0].querySelector(".line1t"), {
          width: "0%",
          duration: 1,
          ease: "power2.out",
        }, "a")
        .from(wrappers.current[0].querySelector(".line1l"), {
          height: "0%",
          duration: .8,
          delay: 0.1,
          ease: "power2.out",
        }, "a")
        .from(wrappers.current[0].querySelector(".line1r"), {
          height: "0%",
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
        }, "a")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrappers.current[0],
          scroller: "body",
          start: "top 80%",
          endTrigger: footer.current,
          end: "top 10%",
          scrub: 1,
          // markers: true, 
        },
      });

      // Fade in
      tl.to(videoCover.current, { opacity: 1, duration: 0.5 });

      // Fade out
      tl.to(videoCover.current, { opacity: 0, duration: 0.5 });





      wrappers.current.forEach(wrap => {
        var tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          }
        });

        tl2

          .from(wrap.querySelector(".card-center"), {
            scale: 0.5,
            opacity: 0,
            y: "80%",
            duration: 1.2,
            ease: "linear",
          }, "b")
          .from(wrap.querySelectorAll(".card-content"), {
            y: "80%",
            opacity: 0,
            duration: 1.2,
            ease: "linear",
          }, "b")
      })
    }

  }, [])



  return (
    <div ref={container} className='w-full min-h-screen py-[5vw]'>
      {data.map((d, i) => (<div ref={(el) => wrappers.current[i] = el} key={i} className='wrap w-full sm:h-[50vh] h-[80vh] flex items-start justify-between relative'>
        <div className="line1t bg-white/50 w-full h-[1px] absolute top-0 left-1/2 -translate-x-1/2"></div>
        {data.length - 1 === i && <div className="line1b bg-white/50 w-full h-[1px] absolute bottom-0 left-0"></div>}
        <div className="card sm:hidden p-[3vw] py-[3vw] w-[calc(100%/3)] h-full relative text-white">
          <div className="card-content h-full ">
            <h5 className='text-[1.2vw] text-zinc-400 font-[font3]'>[ {i + 1 < 10 ? `0${i + 1}` : i + 1} ]</h5>
            <h3 className='text-[3.5vw] leading-tight my-[2vw] font-[font2]'>{d.name}</h3>
            <div className='readbtn overflow-hidden relative px-[1.6vw] py-[.3vw] border border-zinc-400 font-[font3] w-fit rounded-full cursor-pointer'>
              <h3 className='text-[.9vw] z-20 text-zinc-400 relative'>Read full article</h3>
            </div>
          </div>
          <div className="line1l h-[80vh] w-[1px] bg-white/50 absolute right-0 top-0"></div>
        </div>
        <div style={{ transformOrigin: "top center" }} className="card  card-center relative sm:w-[50%] w-[calc(100%/3)] h-full">
          <img className='w-full h-full object-cover' src={d.poster} alt="" />
          <div className="card-mobile sm:flex hidden h-full absolute w-full  flex-col justify-end bottom-0 left-0 p-[3vw] pb-[6vw]">
            <h5 className='text-[4vw] text-zinc-200 font-[font3]'>[ {i + 1 < 10 ? `0${i + 1}` : i + 1} ]</h5>
            <h3 className='text-[8vw] leading-tight my-[2.5vw] text-white font-[font2]'>{d.name}</h3>
            <div className='readbtn overflow-hidden relative px-[3vw] py-[.6vw] border border-zinc-400 font-[font3] w-fit rounded-full cursor-pointer'>
              <h3 className='text-[3.2vw] whitespace-nowrap z-20 text-zinc-400 relative font-semibold'>Read full article</h3>
            </div>
          </div>
        </div>
        <div className="card sm:w-[50%] w-[calc(100%/3)] h-full p-[3vw] py-[3vw] relative text-white">
          <div className="line1r sm:h-[50vh] h-[80vh] w-[1px] bg-white/50 absolute left-0 top-0"></div>
          <div className='card-content h-full '>
            {d.details.map((dets, i) => (<h4 key={i} className='sm:text-[3.3vw] text-[1.3vw] mb-[1.2vw] font-[font3] font-regular'>{i + 1}.{dets}</h4>))}
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Section2