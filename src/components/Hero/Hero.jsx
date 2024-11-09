import React from 'react';
import './Hero.css';
import profilepic from '../../assets/profile pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Hero = () => {
  return (
    <div id="home" className='hero'>
     <img src={profilepic} alt='profile pic'/>
     <h1><span>I'm Vinay Motapalukula,</span> Mern stack developer.</h1>
     <p>A passionate full-stack web developer with deep expertise in ReactJS, Node.js, and JavaScript.
       I’m always keen to build user-friendly applications and stay ahead by learning and mastering new technologies
     </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With me</AnchorLink></div>
        <div className="hero-resume"><a className='anchor-link' href='https://drive.google.com/file/d/1-7KEgIT7ufi_BiaqvZ-7UJHd5d12QUxV/view?usp=drivesdk' download target="_blank" >My resume</a></div>
        </div>   
</div>
  )
}

export default Hero