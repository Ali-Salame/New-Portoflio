import { useState } from "react"
import React from 'react'
import 'animate.css';

const Navbar = (props) => {
  const [Clicked, setClicked] = useState(true)
  const handleClick = () => {
    props.setNextPage(4)
    props.setProjNum(1)
  }

  return (
    <div className='NavBar'>
      <div className="Logos animate__animated animate__fadeInLeft">
        <a className='Logo' onClick={() => props.setNextPage(1)} href="#">
          Ali Salame
        </a>
      </div>
      <nav className='NavBar_Nav'>
        <ul className='NavBar_Nav_Links animate__animated animate__fadeInRight' style={Clicked ? {display:'none'} : {display:'flex'}}>
          <li><a className={props.CurrentPage === 1 ? 'active1' : ''} onClick={() => {props.setNextPage(1);props.setProjNum(1);setClicked(true)}} href="#Home">HOME</a></li>
          <li><a className={props.CurrentPage === 3 || props.CurrentPage === 2 ? 'active1' : ''} onClick={() => {props.setNextPage(2);props.setProjNum(1);setClicked(true)}} href="#About">ABOUT</a></li>
          <li><a className={props.CurrentPage === 4 ? 'active1' : ''} onClick={() => {props.setNextPage(4);props.setProjNum(1);setClicked(true)}} href="#Projects">PROJECTS</a></li>
          <li><a className={props.CurrentPage === 5 ? 'active1' : ''} onClick={() => {props.setNextPage(5);props.setProjNum(1);setClicked(true)}} href="#">CONTACT ME</a></li>
        </ul>
        <div onClick={() => {setClicked(!Clicked)}} className='NavBar_Nav_lines'>
          <div className={`NavBar_Nav_lines_Line${Clicked ? 1 : 3}`}></div>
          <div className={`NavBar_Nav_lines_Line${Clicked ? 2 : 4}`}></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar