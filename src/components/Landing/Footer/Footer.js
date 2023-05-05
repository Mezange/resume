import './style.scss';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function Footer() {

    return (
        <>
            <footer className='footer'>
                <div className='footer_wrapper'>
                    <h2>MEZANGE</h2>
                    <h3>1992</h3>
                    <h5>France</h5>
                    <h4>mezange.booking@gmail.com</h4>
                </div>
                <div className='footer_social'>
                    {/* <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer"><img src="/resume/assets/images/linkedin.svg" alt="avatar" /></a> */}
                </div>
            </footer>
        </>
    );
}

export default Footer;