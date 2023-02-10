import './style.scss';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function First() {

    let first_Btn_Anim = useRef(null);
    let second_Btn_Anim = useRef(null);
    let third_Btn_Anim = useRef(null);
    let shape_Anim = useRef(null);
    let scroll_Anim = useRef(null);



    useEffect(() => {

        const AnimBtn1 = first_Btn_Anim.current;
        gsap.fromTo( AnimBtn1, 
            {
                y : -200,
                opacity : 0,
            },
            {
                y : 0,
                scrollTrigger: {
                    trigger: AnimBtn1,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 1,
                duration: 1.5,
                ease: "elastic",
            }
        )      

        const AnimBtn2 = second_Btn_Anim.current;
        gsap.fromTo( AnimBtn2, 
            {
                opacity : 0,
                scale: 0,
            },
            {
                scrollTrigger: {
                    trigger: AnimBtn2,
                    toggleActions: "play completed"
                },
                opacity : 1,
                scale: 1,

                duration: 1,
                delay: 2,
                ease: "bounce",
            }
        )

        const AnimBtn3 = third_Btn_Anim.current;
        gsap.fromTo( AnimBtn3, 
            {
                x : -400,
                opacity : 0,
            },
            {
                x : 0,
                scrollTrigger: {
                    trigger: AnimBtn3,
                    toggleActions: "play completed"
                },
                opacity : 1,
                duration: 3.2,
                delay: 3.5,
                ease: "elastic",
            }
        )

        const AnimScroll = scroll_Anim.current;
        gsap.fromTo( AnimScroll, 
            {
                y : -200,
                opacity : 0,
            },
            {
                y : 0,
                scrollTrigger: {
                    trigger: AnimScroll,
                    toggleActions: "play completed"
                },
                opacity : 1,
                duration: 1.5,
                delay: 4,
                ease: "bounce",
            }
        )

        const AnimShape = shape_Anim.current;
        gsap.fromTo( AnimShape, 
            {
                x : 400,
                opacity : 0,
            },
            {
                x : 0,
                scrollTrigger: {
                    trigger: AnimShape,
                    toggleActions: "play completed"
                },
                opacity : 1,
                duration: 1.5,
                delay: 5,
                ease: "bounce",
            }
        )
    }, []);

    return (
        <>
            <section className="first">
                <div className="first_wrapper">
                <div className="first_wrapper_text">
                    <div className="first_wrapper_text_bubble">
                        <div className="first_wrapper_text_bubble_one">
                            <p>Hello,</p>
                        </div>
                        <div ref={first_Btn_Anim} className="first_wrapper_text_bubble_two">
                            <p>Je m'appelle</p>
                        </div>
                        <div ref={second_Btn_Anim} className="first_wrapper_text_bubble_three">
                            <p>Mezange</p>
                        </div>
                        <div ref={third_Btn_Anim} className="first_wrapper_text_bubble_four">
                            <p>UI/UX Designer, Dev React.js</p>
                        </div>
                    </div>
                    
                </div>
                <div className="first_wrapper_shape">
                    <p ref={shape_Anim}>U</p>
                </div>
                </div>
                <div ref={scroll_Anim} className="first_scroll">
                    <div className="first_scroll_box">
                        <div className="first_scroll_box_circle"></div>
                    </div>

                    <div className="first_scroll_text">Scroll down</div>

                </div>
            </section>
        </>
    );
}

export default First;
