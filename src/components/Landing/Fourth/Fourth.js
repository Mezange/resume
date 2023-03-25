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
                    COLLECTION - ARTIST - WORKS - COLLECTION - ARTIST - WORKS - COLLECTION - ARTIST - WORKS - COLLECTION - ARTIST - WORKS 
                    </div>
                </section>
                <section className='fourth_gallery'>
                    <ul className='wrapper'>
                    <li className='fourth_gallery_one'>
                            <img src='/resume/assets/nft/1228.png' alt='nft' />
                        </li>
                        <li className='fourth_gallery_two'>
                            <img src='/resume/assets/nft/1985.png' alt='nft' />
                        </li>
                        <li className='fourth_gallery_three'>
                        <a href='https://www.figma.com/@mezange' target="_blank" rel="noopener noreferrer"><img src='/resume/assets/images/date.jpg' alt='date' /></a>
                        </li>
                    </ul>
                </section>
                <section className='fourth_gallery'>
                    <ul className='wrapper'>
                        <li className='fourth_gallery_one'>
                            <a href='https://www.figma.com/@mezange' target="_blank" rel="noopener noreferrer"><img src='/resume/assets/images/retro.png' alt='retro'/></a>
                        </li>
                        <li className='fourth_gallery_two'>
                        <a href='https://www.figma.com/@mezange' target="_blank" rel="noopener noreferrer"><img src='/resume/assets/images/sk8.jpg' alt='shop' /></a>
                        </li>
                        <li className='fourth_gallery_three'>
                        <a href='https://www.figma.com/@mezange' target="_blank" rel="noopener noreferrer">
                            <img src='/resume/assets/images/transport.png' alt='transport landing' /></a>
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
