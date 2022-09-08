import React from 'react'
import img from './imgs/Project2.png'
import eye from './imgs/eye.png'
import git from './imgs/Github.png'

const Project2 = (props) => {
  return (
    <div className={`Projects_${props.currentPage === 2 ? 'Pages' : 'none'}`}>
      <div className='Projects_Pages_Text animate__animated animate__fadeInRight '>
      <h1>Business Page</h1>
      the second project consisted  a single business page
        <span>
        Created with HTML5,
        BootStrap and Vanilla JavaScript.
        </span>
      </div>
    <div className='Projects_Pages_imag animate__animated animate__fadeInRight animate__slow'>
      <div className='Projects_Pages_imag_img'>
        <img src={img} alt="" />
      </div>
      <div className='Projects_Pages_imag_box2'></div>
      <div className='Projects_Pages_imag_num2'><span>02</span></div>
      <div className='Projects_Pages_imag_icons'>
          <a href='https://heloneck.github.io/bookmark-landing-page-master/' target='_blank' className='Projects_Pages_imag_icons_icn'>
            <img src={eye} alt="" />
            <span>Live Server</span>
          </a>
          <a href='https://github.com/heloneck/bookmark-landing-page-master' target='_blank'className='Projects_Pages_imag_icons_icnl'>
            <img src={git} alt="" />
            <span>GitHub</span>
          </a>
      </div>
    </div>

  </div>
  )
}

export default Project2