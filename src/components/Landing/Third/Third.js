import './style.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function Third() {

  let xpTitle_Anim = useRef(null);
  let xp1_Anim = useRef(null);
  let xp2_Anim = useRef(null);
  let xp3_Anim = useRef(null);
  let xp4_Anim = useRef(null);
  let xp5_Anim = useRef(null);
  let shape_Anim = useRef(null);


  useEffect(() => {

    const anim_Title = xpTitle_Anim.current;
      gsap.fromTo( anim_Title, 
        {
          rotateY: 90,
          rotateX: 360,
      },
      {
          scrollTrigger: {
              trigger: anim_Title,
              toggleActions: "play completed"
          },
          rotateY: 0,
          rotateX: 0,
          delay: 1,
          duration: 4,
          ease: "elastic",
      }
      )

      

      const anim_xp1 = xp1_Anim.current;
      gsap.fromTo( anim_xp1, 
        {
          scale : -0,
          opacity : 0,
      },
      {
          scale : 1,
          scrollTrigger: {
              trigger: anim_xp1,
              toggleActions: "play completed"
          },
          opacity : 1,
          delay: 1.75,
          duration: 2.5,
          ease: "bounce",
      }
      )

      const anim_xp2 = xp2_Anim.current;
      gsap.fromTo( anim_xp2, 
        {
          rotateX: 90,
          rotateY: 360,
      },
      {
          scrollTrigger: {
              trigger: anim_xp2,
              toggleActions: "play completed"
          },
          rotateX: 0,
          rotateY: 0,
          delay: 1.25,
          duration: 2.5,
          ease: "bounce",
      }
      )

      const anim_xp3 = xp3_Anim.current;
      gsap.fromTo( anim_xp3, 
        {
          rotateZ: -90,
          opacity: 0,
      },
      {
          scrollTrigger: {
              trigger: anim_xp3,
              toggleActions: "play completed"
          },
          rotateZ: 0,
          opacity : 1,
          delay: 3,
          duration: 2.5,
          ease: "elastic",
      }
      )

      const anim_xp4 = xp4_Anim.current;
      gsap.fromTo( anim_xp4, 
        {
          x: 400,
          opacity: 0,
      },
      {
          scrollTrigger: {
              trigger: anim_xp4,
              toggleActions: "play completed"
          },
          x: 0,
          opacity : 1,
          delay: 3,
          duration: 2.75,
          ease: "elastic",
      }
      )

      const anim_xp5 = xp5_Anim.current;
      gsap.fromTo( anim_xp5, 
        {
          y: 200,
          opacity: 0,
      },
      {
          scrollTrigger: {
              trigger: anim_xp5,
              toggleActions: "play completed"
          },
          y: 0,
          opacity : 1,
          delay: 1.5,
          duration: 1.75,
          ease: "bounce",
      }
      )

      const anim_shape = shape_Anim.current;
      gsap.fromTo( anim_shape, 
        {
          x: 200,
          opacity: 0,
      },
      {
          scrollTrigger: {
              trigger: anim_shape,
              toggleActions: "play completed"
          },
          x: 0,
          opacity : 1,
          delay: 4.25,
          duration: 1.75,
          ease: "bounce",
      }
      )

  }, []);
    return (
        <>
          <section className='third'>
            <img ref={shape_Anim} src='resume/assets/images/polygon.png' alt='polygon' />
                <div className='third_xp1'>
                    <div className='third_xp1_wrapper'>
                      <h3 ref={xpTitle_Anim}>EXPERIENCES</h3>
                      <div className='third_xp1_wrapper_contain'>
                        
                        <div ref={xp1_Anim} className='third_xp1_wrapper_contain_info'>
                        <h5>2023</h5>
                           <h4>Artiste Digitale</h4>
                           <h2>BRUSHIZER</h2>
                           <p>Création d’œuvre digitale (NFT)
                            avec Illustrator + website + mint</p>
                        </div>

                        <div ref={xp2_Anim} className='third_xp1_wrapper_contain_info'>
                        <h5>2022</h5>
                           <h4>Développeur Web</h4>
                           <h2>OWNPAGE</h2>
                           <p>Stage d’observation au sein du
                            service développement qui
                            gèrent les newsletters de
                            grands groupes de presse
                            européens</p>
                        </div>

                        <div ref={xp3_Anim} className='third_xp1_wrapper_contain_info'>
                        <h5>2017 - 2022</h5>
                           <h4>Livreur</h4>
                           <h2>LA POSTE</h2>
                           <p>Livraison locale de colis à domicile</p>
                        </div>
                        
                      </div>
                    </div>
                </div>
                <div className='third_xp2'>
                  <div className='third_xp2_wrapper'>
                    <div className='third_xp2_wrapper_contain'>
                      <div ref={xp4_Anim} className='third_xp2_wrapper_contain_info'>
                          <h5>2017</h5>
                          <h4>Livreur</h4>
                          <h2>DHL</h2>
                          <p>Livraison régionale de colis à domicile</p>
                      </div>
                      <div ref={xp5_Anim} className='third_xp2_wrapper_contain_info'>
                          <h5>2016</h5>
                          <h4>Assistant Scénographe</h4>
                          <h2>HUGO MATHA</h2>
                          <p>Organisation scénique pour la
                          Fashion Week </p>
                      </div>   
                    </div>
                  </div>   
                </div>
            </section>
        </>
  );
}

export default Third;
