import './style.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function Sixth() {

    let computer_Anim = useRef(null);
    let tags_Anim = useRef(null);
    let X_Anim = useRef(null);

    useEffect(() => {

        const anim_computer = computer_Anim.current;
        gsap.fromTo(anim_computer,
            {
                x: -400,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: anim_computer,
                    toggleActions: "play completed"
                },
                x: 0,
                opacity: 1,
                delay: 1,
                duration: 3,
                ease: "elastic",
            }
        )

        const anim_tags = tags_Anim.current;
        gsap.fromTo(anim_tags,
            {
                scale:0,
            },
            {
                scrollTrigger: {
                    trigger: anim_tags,
                    toggleActions: "play completed"
                },
                scale: 1,
                delay: 1,
                duration: 1.75,
                ease: "bounce",
            }
        )

        const anim_X = X_Anim.current;
        gsap.fromTo(anim_X,
            {
                scale:0,
                rotate: 0,
                x: 600,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: anim_X,
                    toggleActions: "play completed"
                },
                scale: 1,
                x: 0,
                opacity : 1,
                rotate: 145,
                delay: 0.5,
                duration: 2.75,
                ease: "bounce",
            }
        )
    }, []);


    return (
        <>
            <section className='sixth'>
                <img ref={computer_Anim} src='/resume/assets/images/computer.png' alt='computer' />
                <div className='sixth_title'>
                    <h2>SKILLS TECHNIQUES</h2>
                </div>
                <div className='sixth_tags'>
                    <div ref={tags_Anim} className="sixth_tags_wrapper">
                        <div className="sixth_tags_wrapper_btn">
                            <p>FIGMA</p>
                        </div>
                        <div className="sixth_tags_wrapper_btn">
                            <p>WEB 3</p>
                        </div>
                        <div className="sixth_tags_wrapper_btn">
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="sixth_tags_wrapper_btn">
                            <p>ILLUSTRATOR</p>
                        </div>
                        <div className="sixth_tags_wrapper_btn">
                            <p>REACT.js</p>
                        </div>
                        <div className="sixth_tags_wrapper_btn">
                            <p>UI / UX</p>
                        </div>
                    </div>
                </div>
                <div className="sixth_shape">
                    <p ref={X_Anim}>X</p>
                </div>
            </section>
        </>
    );
}

export default Sixth;