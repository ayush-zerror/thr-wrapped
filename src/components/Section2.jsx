import gsap, { wrap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = ({ videoCover, footer }) => {
  const container = useRef()
  const wrappers = useRef([])

  const data = [
    {
      name: "The Best Indian Films Of 2024",
      details: [
        "Ullozhukku",
        "Meiyazhagan",
        "Manjummel Boys",
        "Aattam",
        "Lubber Pandhu",
        "Girls Will Be Girls",
        "Amar Singh Chamkila",
        "Laapataa Ladies",
        "Kottukaali",
        "All We Imagine As Light",
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/the-best-indian-films-of-2024-from-all-we-imagine-as-light-to-meiyazhagan-and-amar-singh-chamkila",
      poster: "https://stat5.bollywoodhungama.in/wp-content/uploads/2024/02/Laapataa-Ladies.jpg"
    },
    {
      name: "The 10 Best Malayalam Film Performances Of 2024",
      details: [
        "Asif Ali (Kishkinda Kandam, Level Cross, Adios Amigo) ",
        "Parvathy (Ullozhukku)",
        "Urvashi (Ullozhukku)",
        "Prithviraj Sukumaran (Aadujeevitham)",
        "Kani Kusruti",
        "Vijayaraghavan (Kishkindha Kaandam)",
        "Tovino Thomas (Ajayante Randam Moshanam)",
        "Fahadh Faasil (Aavesham)",
        "Jyothirmayi (Bougainvillea)",
        "Mammootty (Bramayugam)"
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/the-10-best-malayalam-film-performances-of-2024-urvashi-prithviraj-sukumaran-and-more",
      poster: "https://m.media-amazon.com/images/M/MV5BZWM2NDQyZTAtYTIzOS00NmIwLWFhNWUtMzkzZWI5YTk0NjFiXkEyXkFqcGc@._V1_FMjpg_UX877_.jpg"
    },
    {
      name: "Heading South",
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
      more:"https://www.hollywoodreporterindia.com/features/insight/heading-south-the-cinema-of-the-south-is-now-the-cinema-of-india",
      poster: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Farticle%2F-2024-12-17T10%253A26%253A51.344Z-Lead1.jpg&w=1920&q=75"
    },
    {
      name: "Hindi Cinema In 2024",
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
      more:"https://www.hollywoodreporterindia.com/features/insight/hindi-cinema-in-2024-all-we-imagine-as-bollywood",
      poster: "https://m.media-amazon.com/images/M/MV5BNWIzZjVmN2EtNGEyMy00MzVlLWIxMmItZjYzZGVjMzQ3N2VkXkEyXkFqcGc@._V1_FMjpg_UX854_.jpg"
    },
    {
      name: "Marathi Cinema in 2024",
      details: [
        "Nach Ga Ghuma",
        "Dharmaveer 2",
        "Yek Number",
        "Shivrayancha Chhava",
        "Hya Goshtila Navach Nahi",
        "Gharat Ganpati",
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/marathi-cinema-in-2024-how-did-the-industry-fare-this-year",
      poster: "https://m.media-amazon.com/images/M/MV5BYTQ4ZDE4NTAtZjYwYS00ZTAzLWE4MTYtODFjNGUzMjg1ZWVmXkEyXkFqcGc@._V1_FMjpg_UY2000_.jpg"
    },
    {
      name: "The Best Hindi Shows Of 2024, Ranked",
      details: [
        "Killer Soup",
        "Yeh Kaali Kaali Ankhein (Season 2)",
        "Bandish Bandits (Season 2)",
        "Poacher",
        "Raat Jawaan Hai",
      ],
      more:"https://www.hollywoodreporterindia.com/lists/lists/the-best-hindi-shows-of-2024-ranked-raat-jawaan-hai-killer-soup-and-more",
      poster: "https://m.media-amazon.com/images/M/MV5BYTdlYWU4MWUtMmM5OS00Nzk1LTlkZjYtZmNiMjkxMTliM2MyXkEyXkFqcGc@._V1_FMjpg_UX921_.jpg"
    },
    {
      name: "The 10 Best Telugu Film Performances of 2024",
      details: [
        "Nivetha Thomas (35 Chinna Katha Kaadu)",
        "Allu Arjun (Pushpa: The Rule) ",
        "Dulquer Salmaan (Lucky Baskhar)",
        "Amitabh Bachchan (Kalki: 2898 AD)",
        "Naresh (Veeranjaneyulu Vihara Yatra)",
        "Sharanya Pradeep (Ambajipeta Marriage Band)",
        "Nani (Saripodha Sanivaaram)",
        "Vishwak Sen (Gaami)",
        "Satya (Mathu Vadalara 2)",
      ],
      more:"https://www.hollywoodreporterindia.com/lists/lists/the-10-best-telugu-film-performances-of-2024-dulquer-salmaan-amitabh-bachchan-and-more",
      poster: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F-2024-12-23T09%253A01%253A07.914Z-Pushpa%25202%2520copy.jpg&w=1920&q=75"
    },
    {
      name: "The 10 Best Hindi Performances of 2024, Ranked",
      details: [
        "Abhishek Bachchan (I Want to Talk)",
        "Konkona Sen Sharma (Killer Soup)",
        "Vivek Gomber (Lootere)",
        "Mukul Chadda (Fairy Folk)",
        "Gyanendra Tripathi (Barah by Barah)",
        "Anjali Anand (Raat Jawaan Hai)",
        "Diljit Dosanjh (Amar Singh Chamkila)",
        "Alia Bhatt (Jigra)",
        "Vikrant Massey (Sector 36)",
        "Kani Kusruti (Girls Will Be Girls)",
      ],
      more:"https://www.hollywoodreporterindia.com/lists/lists/the-10-best-hindi-performances-of-2024-ranked",
      poster: "https://m.media-amazon.com/images/M/MV5BM2U1NjNjM2YtYTYxYi00OWFmLTllMGItMWRlMmM4NDczMjU4XkEyXkFqcGc@._V1_FMjpg_UY3537_.jpg"
    },
    {
      name: "The Best Indian Pop-Culture Moments Of 2024",
      details: [
        "Dil-Luminati Tour",
        "All We Imagine As Light At Cannes",
        "Eda Mone!",
        "Tauba Tauba",
        "Cringe On Our Phones",
        "India’s Got Latent",
        "Big Dawg’s Big Blow Up",
      ],
      more:"https://www.hollywoodreporterindia.com/features/columns/the-best-indian-pop-culture-moments-of-2024-diljit-dosanjh-hanumankind-tauba-tauba-and-more",
      poster: "https://m.media-amazon.com/images/M/MV5BNDZmNWViMDQtNjgzYi00OTMyLTg0OTgtZjk2NTk0YWE3MzEyXkEyXkFqcGc@._V1_FMjpg_UX736_.jpg"
    },
    {
      name: "Bollywood Music in 2024",
      details: [
        "'Sajni' from Laapataa Ladies",
        "Ankhiyaan Gulaab' from Teri Baaton Mein Aisa Uljha Jiya",
        "'Naina' from Crew",
        "'Aaj Ki Raat' from Stree 2",
        "'Tauba Tauba' from Bad Newz",
        "'Tum Se' from Teri Baaton Mein Aisa Uljha Jiya",
        "'Teri Baaton Mein Aisa Uljha Jiya' from Teri Baaton Mein Aisa Uljha Jiya",
        "'Aayi Nai' from Stree 2",
        "'Soni Soni' from Ishq Vishq Reloaded",
      ],
      more:"https://www.hollywoodreporterindia.com/features/columns/bollywood-music-in-2024-the-hits-that-ruled-playlists",
      poster: "https://s.saregama.tech/image/c/fw_485/e/5a/b3/aaj-ki-raat_1440_sonu_1728988106.jpg"
    },
    {
      name: "Bollywood Celebrity Fashion In 2024",
      details: [
        "Alia Bhatt at the Met Gala",
        "Ananya Panday at Lakmé Fashion Week",
        "Priyanka Chopra Jonas",
        "Ishaan Khatter",
        "Sobhita Dhulipala at her wedding",
        "Kareena Kapoor Khan",
        "Samantha Ruth Prabhu during the ‘Citadel",
        "Kiara Advani at the Cannes Film Festival",
        "Saif Ali Khan",
        "Sonam Kapoor Ahuja at the Chivas",
      ],
      more:"https://www.hollywoodreporterindia.com/lifestyle/fashion/bollywood-celebrity-fashion-in-2024-the-10-most-defining-sartorial-moments-of-the-year",
      poster: "https://filmfare.wwmindia.com/photogallery/2024/may/kiaraadvani51716092369.jpg"
    },
    {
      name: "From Shah Rukh Khan and Allu Arjun to Vijay and Mammooty",
      details: [
        "The Khans' mode of payment",
        "Where do the others in Bollywood stand?",
        "What is happening in the Tamil and Malayalam industries?",
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/from-shah-rukh-khan-allu-arjun-mammooty-to-vijay-star-fees-in-2024",
      poster: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F-2024-12-10T08%253A22%253A44.762Z-Deepika.jpg&w=1920&q=75"
    },
    {
      name: "From 'Bhool Bhulaiyaa 3' to 'Barzakh'",
      details: [
        "'Sajni' from Laapataa Ladies",
        "Ankhiyaan Gulaab' from Teri Baaton Mein Aisa Uljha Jiya",
        "'Naina' from Crew",
        "'Aaj Ki Raat' from Stree 2",
        "'Tauba Tauba' from Bad Newz",
        "'Tum Se' from Teri Baaton Mein Aisa Uljha Jiya",
        "'Teri Baaton Mein Aisa Uljha Jiya' from Teri Baaton Mein Aisa Uljha Jiya",
        "'Aayi Nai' from Stree 2",
        "'Soni Soni' from Ishq Vishq Reloaded",
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/from-bhool-bhulaiyaa-3-to-barzakh-the-range-of-queer-desire-on-screen-in-2024",
      poster: "https://m.media-amazon.com/images/M/MV5BNmFmMTQ5Y2YtN2E1My00YzQ3LTg2ZmItN2ViOTI0MzkwZDcxXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg"
    },
    {
      name: "The 10 Highest-Grossing Films Of 2024",
      details: [
        "Pushpa 2: The Rule (Telugu) — ₹1405 Crore",
        "Kalki 2898 AD (Telugu) — ₹776 Crore",
        "Stree 2 (Hindi) — ₹698 Crore",
        "Devara: Part 1 (Telugu) — ₹347 Crore",
        "Bhool Bhulaiyaa 3 (Hindi) — ₹313 Crore",
        "The Greatest of All Time (Tamil) — ₹305 Crore",
        "Singham Again (Hindi) — ₹298 Crore",
        "Amaran (Tamil) — ₹260 Crore",
        "Fighter (Hindi) — ₹243 Crore",
        "Hanu-Man (Telugu) — ₹240 Crore",
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/the-10-highest-grossing-films-of-2024-pushpa-2-kalki-2898-ad-stree-2-and-more",
      poster: "https://m.media-amazon.com/images/M/MV5BNDkzZjZmNTYtZjAxMC00M2U3LWEyMjctMjY2NDEwYWE1MzBmXkEyXkFqcGc@._V1_FMjpg_UX1118_.jpg"
    },
    {
      name: "The 10 Best Tamil Film Performances Of 2024",
      details: [
        "Geetha Kailasam (Star, Amaran, Lover, Lubber Pandhu)",
        "Manikandan (Lover)",
        "Karthi (Meiyazhagan)",
        "Arvind Swami (Meiyazhagan)",
        "Vijay Sethupathi (Maharaja, Viduthalai Part 2, Merry Christmas)",
        "Attakathi Dinesh (Lubber Pandhu)",
        "Anna Ben (Kottukkaali)",
        "Ponvel M. (Vaazhai)",
        "Sai Pallavi (Amaran)",
        "Vikram (Thangalaan)",
      ],
      more:"https://www.hollywoodreporterindia.com/features/insight/the-10-best-tamil-film-performances-of-2024",
      poster: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F-2024-12-30T10%253A34%253A34.804Z-vaa.jpg&w=1920&q=75"
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
        <div className="line1t bg-white w-full h-[1px] absolute top-0 left-1/2 -translate-x-1/2"></div>
        {data.length - 1 === i && <div className="line1b bg-white w-full h-[1px] absolute bottom-0 left-0"></div>}
        <div className="card sm:hidden p-[3vw] py-[3vw] w-[calc(100%/3)] h-full relative text-white">
          <div className="card-content h-full ">
            <h5 className='text-[1.2vw] text-white font-[font3]'>[ {i + 1 < 10 ? `0${i + 1}` : i + 1} ]</h5>
            <h3 className='text-[3.5vw] leading-tight my-[2vw] font-[font2]'>{d.name}</h3>
            <a href={d.more} target='_block' className='readbtn overflow-hidden relative px-[1.6vw] py-[.3vw] border border-white font-[font3] inline-block w-fit rounded-full cursor-pointer'>
              <h3 className='text-[.9vw] z-20 text-white relative'>Read full article</h3>
            </a>
          </div>
          <div className="line1l h-[80vh] w-[1px] bg-white absolute right-0 top-0"></div>
        </div>
        <div style={{ transformOrigin: "top center" }} className="card  card-center relative sm:w-[50%] w-[calc(100%/3)] h-full">
          <img className='w-full h-full object-cover' src={d.poster} alt="" />
          <div className="card-mobile sm:flex hidden h-full absolute w-full  flex-col justify-end bottom-0 left-0 p-[3vw] pb-[6vw]">
            <h5 className='text-[4vw] text-white font-[font3]'>[ {i + 1 < 10 ? `0${i + 1}` : i + 1} ]</h5>
            <h3 className='text-[8vw] leading-tight my-[2.5vw] text-white font-[font2]'>{d.name}</h3>
            <a href={d.more} target='_block' className='readbtn overflow-hidden relative px-[3vw] py-[.6vw] border border-white font-[font3] inline-block w-fit rounded-full cursor-pointer'>
              <h3 className='text-[3.2vw] whitespace-nowrap z-20 text-white relative font-semibold'>Read full article</h3>
            </a>
          </div>
        </div>
        <div className="card sm:w-[50%] w-[calc(100%/3)] h-full p-[3vw] py-[3vw] relative text-white">
          <div className="line1r sm:h-[50vh] h-[80vh] w-[1px] bg-white absolute left-0 top-0"></div>
          <div className='card-content h-full '>
            {d.details.map((dets, i) => (<h4 key={i} className='sm:text-[3.3vw] text-[1.3vw] mb-[1.2vw] font-[font3] font-regular'>{i + 1}.{dets}</h4>))}
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Section2