import './style.scss';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Second() {

    let skills_Anim = useRef(null);
    let bgSkills = useRef(null);
    let bgImage = useRef(null);
    let image_Anim = useRef(null);
    let button_Anim = useRef(null);
    let text_Anim = useRef(null);


    useEffect(() => {

        const AnimSkills = skills_Anim.current;
        gsap.fromTo( AnimSkills, 
            {
                y : -200,
                opacity : 0,
            },
            {
                y : 0,
                scrollTrigger: {
                    trigger: AnimSkills,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 2,
                duration: 2,
                ease: "elastic",
            }
        )

        const AnimBg = bgSkills.current;
        gsap.fromTo( AnimBg, 
            {
                x : -200,
                opacity : 0,
                
            },
            {
                x : 0,
                scrollTrigger: {
                    trigger: AnimBg,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 0,
                duration: 2,
                ease: "bounce",
            }
        )     

        const AnimImage = bgImage.current;
        gsap.fromTo( AnimImage, 
            {
                y : -200,
                opacity : 0,
                rotate: -120,
            },
            {
                y : 0,
                rotate: 0,
                scrollTrigger: {
                    trigger: AnimImage,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 2.5,
                duration: 1.5,
                ease: "bounce",
            }
        ) 

        const AnimAvatar = image_Anim.current;
        gsap.fromTo( AnimAvatar, 
            {
                scale : 0,
                opacity : 0,
            },
            {
                scale : 1,
                scrollTrigger: {
                    trigger: AnimAvatar,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 3.75,
                duration: 3,
                ease: "elastic",
            }
        )

        const AnimButton = button_Anim.current;
        gsap.fromTo( AnimButton, 
            {
                scale : 0,
                opacity : 0,
            },
            {
                scale : 1,
                scrollTrigger: {
                    trigger: AnimButton,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 1.5,
                duration: 2,
                ease: "bounce",
            }
        )

        const AnimText = text_Anim.current;
        gsap.fromTo( AnimText, 
            {
                y : -100,
                opacity : 0,
            },
            {
                y : 0,
                scrollTrigger: {
                    trigger: AnimText,
                    toggleActions: "play completed"
                },
                opacity : 1,
                delay: 1,
                duration: 1.25,
                ease: "ease",
            }
        )

    }, []);
 
    return (
        <>
            <section className='second'>
                <div ref={bgSkills} className='second_wrapper'>
                    <div className='second_wrapper_menu'>
                        <h3 ref={skills_Anim}>SOFT SKILLS</h3>
                        <div className='second_wrapper_menu_contain'>
                            <div ref={bgImage} className='second_wrapper_menu_contain_image'>
                                <img ref={image_Anim} src="/resume/assets/images/avatar.png" alt="avatar" />
                            </div>
                            <div ref={button_Anim} className="second_wrapper_menu_contain_skills">
                                    <div className="second_wrapper_menu_contain_skills_one">
                                        <p>Cr??ativit??</p>
                                    </div>
                                    <div className="second_wrapper_menu_contain_skills_two">
                                        <p>Curiosit??</p>
                                    </div>
                                    <div className="second_wrapper_menu_contain_skills_three">
                                        <p>Inventivit??</p>
                                    </div>
                                    <div className="second_wrapper_menu_contain_skills_four">
                                        <p>Auto-Didacte</p>
                                    </div>
                                    <div className="second_wrapper_menu_contain_skills_five">
                                        <p>Impliqu??</p>
                                    </div>
                                    <div className="second_wrapper_menu_contain_skills_six">
                                        <p>Observation</p>
                                    </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                    <div className='second_wrapper_text'>
                                <p ref={text_Anim}>Je construis depuis maintenant
                                plusieurs ann??es un projet de reconversion professionnelle :
                                plus pr??cis??ment l???UI/UX.
                                <br></br><br></br>
                                Avant gardiste, attentif au moindre d??tail,  introverti qui sait se faire entendre et dot?? d???une sensibilit?? g??n??rale, je pense sinc??rement pouvoir apporter mes qualit??s ?? votre service d??di?? ?? l???exp??rience utilisateur.
                                <br></br><br></br>
                                Aujourd???hui ma formation Javascript Fullstack [React, NodeJS] avec l?????cole O???CLOCK arrive ?? terme et ma motivation ?? travailler dans ce domaine grandi de jour en jour, l???UX est une r??v??lation.
                                <br></br><br></br>
                                Actuellement admis en alternance ?? la Wild Code School, je suis op??rationnel afin de travailler avec vous ?? partir de Septembre 2023.
                                </p>
                    </div>
            </section>
        </>
    );
}

export default Second;
