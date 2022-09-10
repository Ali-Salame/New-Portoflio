import {React , useState, useEffect} from 'react'
import HTML from '../Img/HTML.png'
import CSS from '../Img/CSS.png'
import Js from '../Img/Js.png'
import ReactSvg from '../Img/React.png'
import Sass from '../Img/Sass.png'
import BootStrap from '../Img/BootStrap.png'
import Tailwind from '../Img/Tailwind.png'
import Up from '../Img/Up.png'
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';




const Home = (Props) => {
    let style = {display: Props.CurrentPage === 1 ? 'flex' : 'none'}

  return (
    <section className='Home' id='Home' style={style}>
      <div className='Home_Left'>
        <div className='Home_Left_Top animate__animated animate__fadeInTopLeft'>Ali <span className='text'>Salame</span></div>
        <div className='Home_Left_Mid animate__animated animate__fadeInLeft'>
          <div className='line1'></div>
          <div className='line2'></div>
        </div>
        <div className='Home_Left_Bot animate__animated animate__fadeInBottomLeft'>
            <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                'Front-End Developer...',
                4000,
                'React.js Developer...',
                4000,
                'Web Developer.',
                2000,
                ]}
                speed={20} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: '30px' ,color: '#B5B5B5'}}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            
        </div>
      </div>
      <div className='Home_Right animate__animated animate__fadeInRight' ><iframe src='https://my.spline.design/untitled-a1eba07625c1d422c597917ccf9e576e/' frameborder='0' width='100%' height='100%'></iframe></div>
      <div className='test'></div>
      <div className='Scroll'>
        <div className='animate__animated animate__rubberBand animate__repeat-2	animate__slow'>SCROLL DOWN </div>
        <div className='linesc'></div>
      </div>
      <div className='HSkills'>
        <div className='HSkills_Icons'>    
             <div className='HSkills_Icons_Iconle tw animate__animated animate__fadeInUpBig animate__slower'>
                <a href="https://tailwindcss.com" target='_blank'>
                    <Tilt scale={1.4}><img src={Tailwind} alt="" /></Tilt>
                </a>
            </div>   
            <div className='HSkills_Icons_Iconl js animate__animated animate__fadeInUpBig animate__slow'>
                <a href="https://www.javascript.com" target='_blank'>
                    <Tilt scale={1.4}><img src={Js} alt="" /></Tilt>
                </a>
            </div>

            <div className='HSkills_Icons_Iconm html animate__animated animate__fadeInUpBig animate__fast'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'>
                    <Tilt scale={1.4}><img src={HTML} alt="" /> </Tilt>
                </a>
            </div>
            <div className='HSkills_Icons_Iconler react animate__animated animate__fadeInUpBig animate__faster'>
                <a href="https://reactjs.org" target='_blank'>
                    <Tilt scale={1.6}><img src={ReactSvg} alt="" /></Tilt>
                </a>
            </div>     
            <div className='HSkills_Icons_Iconm css animate__animated animate__fadeInUpBig animate__fast'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>
                    <Tilt scale={1.4}><img src={CSS} alt="" /></Tilt>
                </a>
            </div>

            <div className='HSkills_Icons_Iconl sass animate__animated animate__fadeInUpBig animate__slow'>
                <a href="https://sass-lang.com" target='_blank'>
                    <Tilt scale={1.4}><img src={Sass} alt="" /></Tilt>
                </a>
            </div>
            <div className='HSkills_Icons_Iconle bs animate__animated animate__fadeInUpBig animate__slower'>
                <a href="https://getbootstrap.com" target='_blank'>
                    <Tilt scale={1.4}><img src={BootStrap} alt="" /></Tilt>
                </a>
            </div>
        </div>
        
    </div>
    </section>
  )
}

export default Home