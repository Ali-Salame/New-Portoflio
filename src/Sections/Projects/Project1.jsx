import React from 'react'
import img from './imgs/Project1.png'
import eye from './imgs/eye.png'
import git from './imgs/Github.png'

const Project1 = (props) => {
  return (
    <div className={`Projects_${props.currentPage === 1 ? 'Pages' : 'none'}`}>
      <div className='Projects_Pages_imag animate__animated animate__fadeInLeft'>
        <div className='Projects_Pages_imag_img'>
          <img src={img} alt="" />
        </div>
        <div className='Projects_Pages_imag_box'></div>
        <div className='Projects_Pages_imag_num'><span>01</span></div>
        <div className='Projects_Pages_imag_icons'>
          <a href='https://heloneck.github.io/Ecommerce-product-page/' target='_blank' className='Projects_Pages_imag_icons_icn'>
            <img src={eye} alt="" />
            <span>Live Server</span>
          </a>
          <a href='https://github.com/heloneck/Ecommerce-product-page' target='_blank' className='Projects_Pages_imag_icons_icnl'>
            <img src={git} alt="" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className='Projects_Pages_Text animate__animated animate__fadeInLeft animate__slow'>
        <h1>Ecommerce Page</h1>
        My first Project Consisted of a Single Ecommerce Page.
        <span>
          Created with HTML5,
          CSS and Vanilla JavaScript.
        </span>
      </div>
    </div>
  )
}

export default Project1