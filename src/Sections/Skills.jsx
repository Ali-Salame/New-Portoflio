import React from 'react'
import HTML from '../Img/HTML.png'
import CSS from '../Img/CSS.png'
import Js from '../Img/Js.png'
import ReactSvg from '../Img/React.png'
import Sass from '../Img/Sass.png'
import BootStrap from '../Img/BootStrap.png'
import Tailwind from '../Img/Tailwind.png'
import Up from '../Img/Up.png'
import Tilt from 'react-parallax-tilt';
import 'animate.css';

const Skills = (props) => {
  return (
    <section className='Skills'>
        <div className='Skills_Top'>
            <div className='Skills_Top_title animate__animated animate__fadeInTopLeft'>Skills</div>
            <div className='Skills_Top_line animate__animated animate__fadeInLeft'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
        </div>
        <div className='Skills_Icons'>    
             <div className='Skills_Icons_Iconle tw animate__animated animate__fadeInUpBig animate__slower'>
                <a href="https://tailwindcss.com" target='_blank'>
                    <Tilt scale={1.4}><img src={Tailwind} alt="" /></Tilt>
                </a>
            </div>   
            <div className='Skills_Icons_Iconl js animate__animated animate__fadeInUpBig animate__slow'>
                <a href="https://www.javascript.com" target='_blank'>
                    <Tilt scale={1.4}><img src={Js} alt="" /></Tilt>
                </a>
            </div>

            <div className='Skills_Icons_Iconm html animate__animated animate__fadeInUpBig animate__fast'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'>
                    <Tilt scale={1.4}><img src={HTML} alt="" /> </Tilt>
                </a>
            </div>
            <div className='Skills_Icons_Iconler react animate__animated animate__fadeInUpBig animate__faster'>
                <a href="https://reactjs.org" target='_blank'>
                    <Tilt scale={1.6}><img src={ReactSvg} alt="" /></Tilt>
                </a>
            </div>     
            <div className='Skills_Icons_Iconm css animate__animated animate__fadeInUpBig animate__fast'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>
                    <Tilt scale={1.4}><img src={CSS} alt="" /></Tilt>
                </a>
            </div>

            <div className='Skills_Icons_Iconl sass animate__animated animate__fadeInUpBig animate__slow'>
                <a href="https://sass-lang.com" target='_blank'>
                    <Tilt scale={1.4}><img src={Sass} alt="" /></Tilt>
                </a>
            </div>
            <div className='Skills_Icons_Iconle bs animate__animated animate__fadeInUpBig animate__slower'>
                <a href="https://getbootstrap.com" target='_blank'>
                    <Tilt scale={1.4}><img src={BootStrap} alt="" /></Tilt>
                </a>
            </div>
        </div>
        <div onClick={props.func} className='Skills_up animate__animated animate__fadeInDownBig'>
            <img src={Up} alt="" />
        </div>
        
    </section>
  )
}

export default Skills