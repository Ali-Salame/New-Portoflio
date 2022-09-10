import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Twitter from '../Img/Twitter.png'
import Github from '../Img/Github.png'
import Linkedin from '../Img/Linkedin.png'
import blob from '../Img/blobanimation.svg'
import file from '../files/Ali_Salame_CS.pdf'
import Tilt from 'react-parallax-tilt';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
  const form = useRef();
  let Name = document.getElementById('name')
  let Email = document.getElementById('email')
  let Msg = document.getElementById('msg')
  const MySwal = withReactContent(Swal)
  function reset(){
    Name.value = '';
    Email.value = '';
    Msg.value = '';
  }

  

  const sendEmail = (e) => {
    e.preventDefault();

    MySwal.fire({
      title: <p>Massege Sent!</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
      },
    })
    emailjs.sendForm('service_1afhh5t', 'template_uumr18n', form.current, 'aLNtas3TXrHXp_Pmo')
      .then((result) => {
          console.log(result.text);
          reset()
      }, (error) => {
          console.log(error.text);

      });
  };
  return (
    <section id='Contact' className='Contact'>
      <div className="Contact_Left">
        <div className='Contact_Left_Top'>
          <div className='Contact_Left_Top_title animate__animated animate__fadeInTopLeft animate__fast'><span>Get in</span> TOUCH</div>
          <div className='Contact_Left_Top_line animate__animated animate__fadeInLeft animate__fast'>
            <div>
              <div className='line1'></div>
              <div className='line2'></div>
            </div>
          </div>
        </div>
        <div className='Contact_Left_Mid animate__animated animate__fadeInLeft animate__slow'>
          <div>alisalamaxd@outlook.com</div>
          <div className='Contact_Left_Mid_container'>
            <Tilt className='Contact_Left_Mid_container_img'><img src={Linkedin} alt="" /></Tilt>
            <Tilt className='Contact_Left_Mid_container_img'><img src={Github} alt="" /></Tilt>
            <Tilt className='Contact_Left_Mid_container_img'><img src={Twitter} alt="" /></Tilt>
          </div>
        </div>
          <div className='Contact_Left_Bot animate__animated animate__fadeInLeft animate__slower'>
            <img src={blob} alt="" />
            <button><a href='https://drive.google.com/file/d/1-B15fcCoIoh_PyKAaVwBcR6jDAbkxkoQ/view' target='_blank'>Resume</a></button>
          </div>
      </div>
      <div className="Contact_Right animate__animated animate__fadeInRight">
        <form className="Contact_Right_container" ref={form} onSubmit={sendEmail}>
          <div className='Contact_Right_container_Fn'>
            <span>Full Name:</span>
            <input id='name' className='Contact_Right_container_Fn_inp' name="user_name" type="text" placeholder="Full Name" />
          </div>
          <div className='Contact_Right_container_Fn'>
            <span>Email:</span>
            <input id='email' className='Contact_Right_container_Fn_inp' name="user_email" type="email"  placeholder="Email" />
          </div>
          <div className='Contact_Right_container_FN'>
            <span>Massage:</span>
            <textarea id='msg' className='Contact_Right_container_Fn_At' name="message" placeholder="Say hi, or anything!"></textarea>
          </div>
          <input className='Contact_Right_container_Submit' type="submit" value="Send"/>
        </form>
      </div>
    </section>
  )
}

export default Contact