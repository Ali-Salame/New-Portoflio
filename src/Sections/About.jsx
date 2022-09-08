import React from 'react'
import image from '../Img/pic.png'
import blob from '../Img/blob.png'
import Up from '../Img/Up.png'
import Tilt from 'react-parallax-tilt';

const About = (props) => {
  return (
    <section id='About' className='About'>
      <div className='About_left'>
        <div className='About_left_Top animate__animated animate__fadeInTopLeft'>ABOUT <span>ME</span></div>
        <div className='About_left_Mid animate__animated animate__fadeInLeft'>
          <div className='line1'></div>
          <div className='line2'></div>
        </div>
        <div className='About_left_Bot'>
          <p className='animate__animated animate__fadeInLeft animate__fast'>
            My Name is Ali Salame and I am a Front End Developer as well as a Physiotherapist.
          </p>
          <p className='animate__animated animate__fadeInLeft animate__slow'>
            My Passion started since i was a kid i always loved computers But it took 4 years of university to Realize it. 
          </p>
          <p className='animate__animated animate__fadeInLeft animate__slower'>
            My Plan is to find a Job in the Development section to help fund me to get my Second Degree! 
          </p>
        </div>
      </div>
      <div className='About_image animate__animated animate__fadeInRight'>
        <div className='About_image_container'>
          <Tilt scale={0.8}>
            <img className='image2' src={blob} alt="" />
            <img className='image1' src={image} alt="" />
          </Tilt>
        </div>
      </div>
      <div onClick={props.func} className='About_up animate__animated animate__fadeInDownBig'>
        <img src={Up} alt="" />
      </div>
    </section>
  )
}

export default About