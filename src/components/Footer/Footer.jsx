import React from 'react'
import './Footer.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top-left">
            <h1>VINAY</h1>
            <p>I am a Frontend Developer from India In which I have deep knowledge in react js,node js</p>
        </div>
           <hr />
        <div className="footer-bottom">
            <p className="footer-bootom-left">&copy; 2023 Vinay Motapalukula </p>
            <ul className="footer-social-media">
                <li ><a href="https://github.com/Vinay0804" target='_blank'>  GitHub</a></li>
                <li ><a href="https://linkedin.com/in/vinay-motapalukula-264848278" target='_blank'> LinkedIn</a></li>
                <li >Twitter</li>
            </ul>  
        </div>
    </div>
  )
}

export default Footer