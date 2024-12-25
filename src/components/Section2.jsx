import React from 'react'

const Section2 = () => {

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
      

    return (
        <div className='w-full min-h-screen bg-black py-[5vw]'>
           {data.map((d,i)=>( <div key={i} className='wrap w-full h-[90vh] flex items-start justify-between relative'>
                <div className="line1t bg-white/80 w-full h-[1px] absolute top-0 left-0"></div>
                {data.length - 1 === i && <div className="line1b bg-white/80 w-full h-[1px] absolute bottom-0 left-0"></div>}
                <div className="card p-[3vw] pt-[4vw] w-[calc(100%/3)] h-full relative text-white">
                   <div className="card-content">
                   <h5 className='text-[1.2vw] text-zinc-400 font-[font3]'>[ 01 ]</h5>
                    <h3 className='text-[3vw] leading-tight my-[2vw] font-[font2]'>{d.name}</h3>
                    <div className='px-[1.6vw] py-[.3vw] border border-zinc-400 font-[font3] w-fit rounded-full'>
                        <h3 className='text-[.9vw] text-zinc-400'>Read full article</h3>
                    </div>
                   </div>
                    <div className="line1l h-[90vh] w-[1px] bg-white/80 absolute right-0 top-0"></div>
                </div>
                <div className="card w-[calc(100%/3)] h-full relative">
                    <img className='w-full h-full object-cover' src={d.poster} alt="" />
                </div>
                <div className="card w-[calc(100%/3)] h-full p-[3vw] pt-[4vw] relative text-white">
                    <div className="line1r h-[90vh] w-[1px] bg-white/80 absolute left-0 top-0"></div>
                   <div className='card-content'>
                    {d.details.map((dets,i)=>( <h4 key={i} className='text-[1.4vw] mb-[1.5vw] font-[font3] font-regular'>{i+1}.{dets}</h4>))}
                   </div>
                </div>
            </div>))}
        </div>
    )
}

export default Section2