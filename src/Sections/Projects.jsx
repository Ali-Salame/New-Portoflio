import React from 'react'
import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'
import Next from '../Img/next.png'
import Up from '../Img/Up.png'
import { useState } from 'react'


const Projects = (props) => {
  let setProjNum = props.setProjNum
  let ProjNum = props.ProjNum

  function next() {
    if (ProjNum <= 3){
      setProjNum(prevnum => prevnum + 1)
    }
    else {
      setProjNum(1)
    }
  }
  return (
    <section id='Projects' className='Projects'>
      <div className='Projects_Top'>
        <div className='Projects_Top_title animate__animated animate__fadeInTopLeft'>Projects</div>
        <div className='Projects_Top_line animate__animated animate__fadeInLeft'>
          <div>
            <div className='line1'></div>
            <div className='line2'></div>
          </div>
        </div>
        <div onClick={next} className='Projects_Top_Next animate__animated animate__pulse animate__infinite'>
          <img className='animate__animated animate__fadeInRight' src={Next} alt="" />
        </div>
      </div>
      <Project1 currentPage={ProjNum}/>
      <Project2 currentPage={ProjNum}/>
      <Project3 currentPage={ProjNum}/>
      <Project4 currentPage={ProjNum}/>
      <div className='Nav_Group'>
        <div onClick={() => setProjNum(1)} className={`Nav_${ProjNum === 1 ? 'active' : 'line'}`}></div>
        <div onClick={() => setProjNum(2)} className={`Nav_${ProjNum === 2 ? 'active' : 'line'}`}></div>
        <div onClick={() => setProjNum(3)} className={`Nav_${ProjNum === 3 ? 'active' : 'line'}`}></div>
        <div onClick={() => setProjNum(4)} className={`Nav_${ProjNum === 4 ? 'active' : 'line'}`}></div>
      </div>
      <div onClick={props.func} className='Projects_up animate__animated animate__fadeInDownBig'>
        <img src={Up} alt="" />
      </div>
      
    </section>
  )
}

export default Projects