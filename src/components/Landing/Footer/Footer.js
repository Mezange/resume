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
            </footer>
        </>
    );
}

export default Footer;