import './style.scss';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Fourth() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        document.body.style.overflowX = 'hidden';
        document.scrollingElement.scrollTo(0, 0);
    
        const sections = gsap.utils.toArray('section');
        sections.forEach((section, index) => {
            const w = section.querySelector('.wrapper');
            if (!w) return;
            const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            gsap.fromTo(w, {  x  }, {
              x: xEnd,
              scrollTrigger: { 
                trigger: section, 
                scrub: 0.5 
              }
            });
        });
      }, []);

    return (
        <>
            <div className='fourth'>
                <section className='fourth_text'>
                    <div className='wrapper'>
                    COLLECTION - ARTIST - NFT - COLLECTION - ARTIST - NFT - COLLECTION - ARTIST - NFT - COLLECTION - ARTIST - NFT 
                    </div>
                </section>
                <section className='fourth_gallery'>
                    <ul className='wrapper'>
                    <li className='fourth_gallery_one'>
                            <img src='/resume/assets/nft/1228.png' alt='' />
                        </li>
                        <li className='fourth_gallery_two'>
                            <img src='/resume/assets/nft/1555.png' alt='' />
                        </li>
                        <li className='fourth_gallery_three'>
                            <img src='/resume/assets/nft/1827.png' alt='' />
                        </li>
                    </ul>
                </section>
                <section className='fourth_gallery'>
                    <ul className='wrapper'>
                        <li className='fourth_gallery_one'>
                            <img src='/resume/assets/nft/1944.png' alt='' />
                        </li>
                        <li className='fourth_gallery_two'>
                            <img src='/resume/assets/nft/1968.png' alt='' />
                        </li>
                        <li className='fourth_gallery_three'>
                            <img src='/resume/assets/nft/1985.png' alt='' />
                        </li>
                    </ul>
                </section>
                
                <section className='fourth_text'>
                    <div className='wrapper'>
                        BRUSHIZER-MEZANGE-NFT-BRUSHIZER-MEZANGE-NFT-BRUSHIZER-MEZANGE-NFT-BRUSHIZER-MEZANGE-NFT
                    </div>
                </section>
        </div>
      
 </>

  );
}

export default Fourth;
