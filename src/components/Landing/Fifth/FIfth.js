import './style.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function Fifth() {
    let xpTitle_fifth = useRef(null);
    let xp1_fifth = useRef(null);
    let xp2_fifth = useRef(null);
    let xp3_fifth = useRef(null);
    let xp4_fifth = useRef(null);
    let shape_fifth = useRef(null);
  
  
    useEffect(() => {
  
      const anim_Title_fifth = xpTitle_fifth.current;
        gsap.fromTo( anim_Title_fifth, 
            {
                x: -200,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: anim_Title_fifth,
                    toggleActions: "play completed"
                },
                x: 0,
                opacity : 1,
                delay: 3.25,
                duration: 1.75,
                ease: "bounce",
            }
        )
  
        const anim_xp1_fifth = xp1_fifth.current;
        gsap.fromTo( anim_xp1_fifth, 
            {
                x: -400,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: anim_xp1_fifth,
                    toggleActions: "play completed"
                },
                x: 0,
                opacity : 1,
                delay: 2,
                duration: 3,
                ease: "bounce",
            }
        )
  
        const anim_xp2_fifth = xp2_fifth.current;
        gsap.fromTo( anim_xp2_fifth, 
            {
                rotateX: 90,
                rotateY: 360,
            },
            {
                scrollTrigger: {
                    trigger: anim_xp2_fifth,
                    toggleActions: "play completed"
                },
                rotateX: 0,
                rotateY: 0,
                delay: 1.25,
                duration: 2.5,
                ease: "bounce",
            }
        )
  
        const anim_xp3_fifth = xp3_fifth.current;
        gsap.fromTo( anim_xp3_fifth, 
            {
                y : -200,
                opacity : 0,
            },
            {
                y : 0,
                scrollTrigger: {
                    trigger: anim_xp3_fifth,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 1.75,
                duration: 2.5,
                ease: "bounce",
            }
        )
  
        const anim_xp4_fifth = xp4_fifth.current;
        gsap.fromTo( anim_xp4_fifth, 
            {
                rotateZ: -90,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: anim_xp4_fifth,
                    toggleActions: "play completed"
                },
                rotateZ: 0,
                opacity : 1,
                delay: 3,
                duration: 2.5,
                ease: "elastic",
            }
        )
  
        const anim_shape_fifth = shape_fifth.current;
        gsap.fromTo( anim_shape_fifth, 
            {
                rotateY: 90,
                rotateX: 120,
            },
            {
                scrollTrigger: {
                    trigger: anim_shape_fifth,
                    toggleActions: "play completed"
                },
                rotateY: 0,
                rotateX: 0,
                delay: 1,
                duration: 4,
                ease: "elastic",
            }
        )
  
    }, []);
      return (
          <>
            <section className='fifth'>
              <img ref={shape_fifth} src='/resume/assets/images/citation.png' alt='citation' />
                  <div className='fifth_xp1'>
                      <div className='fifth_xp1_wrapper'>
                        <h3 ref={xpTitle_fifth}>ETUDES</h3>
                        <div className='fifth_xp1_wrapper_contain'>
                          
                          <div ref={xp1_fifth} className='fifth_xp1_wrapper_contain_info'>
                            <h5>2022 - 800H</h5>
                            <h4>Développeur Full Stack JAVASCRIPT</h4>
                            <h2>O'CLOCK</h2>
                            <p>France</p>
                          </div>
  
                          <div ref={xp2_fifth} className='fifth_xp1_wrapper_contain_info'>
                            <h5>2022</h5>
                            <h4>2020</h4>
                            <h2>Capacité de Transport</h2>
                            <p>Nantes / France</p>
                          </div>
                          
                        </div>
                      </div>
                  </div>
                  <div className='fifth_xp2'>
                    <div className='fifth_xp2_wrapper'>
                      <div className='fifth_xp2_wrapper_contain'>
                        <div ref={xp3_fifth} className='fifth_xp2_wrapper_contain_info'>
                            <h5>2018</h5>
                            <h4>Négociateur Immobilier</h4>
                            <h2>PIGIER</h2>
                            <p>Nantes / France</p>
                        </div>
                        <div ref={xp4_fifth} className='fifth_xp2_wrapper_contain_info'>
                            <h5>2013</h5>
                            <h4>Assistant de Gestion</h4>
                            <h2>IMS</h2>
                            <p>Nantes / France</p>
                        </div>   
                      </div>
                    </div>   
                  </div>
              </section>
          </>
    );
  }
  
export default Fifth;