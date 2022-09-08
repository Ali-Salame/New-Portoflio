import React from 'react'
import img from './imgs/Project4.png'
import eye from './imgs/eye.png'
import git from './imgs/Github.png'

const Project4 = (props) => {
  return (
    <div className={`Projects_${props.currentPage === 4 ? 'Pages' : 'none'}`}>
    <div className='Projects_Pages_Text animate__animated animate__fadeInRight '>
      <h1>Quiz App</h1>
        And the last project is a Quiz App that used an API to get questions in JSON format.
      <span>
        It was created with HTML, SCSS and React.js
      </span>
    </div>
  <div className='Projects_Pages_imag animate__animated animate__fadeInRight animate__slow'>
    <div className='Projects_Pages_imag_img'>
      <img src={img} alt="" />
    </div>
    <div className='Projects_Pages_imag_box2'></div>
    <div className='Projects_Pages_imag_num2'><span>04</span></div>
    <div className='Projects_Pages_imag_icons'>
          <a href='https://heloneck.github.io/my-soloapp' target='_blank' className='Projects_Pages_imag_icons_icn'>
            <img src={eye} alt="" />
            <span>Live Server</span>
          </a>
          <a href='https://github.com/heloneck/my-soloapp' target='_blank' className='Projects_Pages_imag_icons_icnl'>
            <img src={git} alt="" />
            <span>GitHub</span>
          </a>
    </div>
  </div>

</div>
  )
}

export default Project4