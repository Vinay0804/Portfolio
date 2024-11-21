import React from 'react'
import './About.css';
import profilepic from '../../assets/profile pic.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='theme_pattern' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profilepic} alt='profileimg' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A dedicated and creative full-stack web developer with a strong foundation in modern web technologies like ReactJS, Node.js, and JavaScript. With a B.Tech degree from Sreenidhi Institute of Science and Technology, I've built projects such as Dev-Tinder and other web applications that demonstrate my technical expertise and innovative approach.</p>
                    <p>I have hands-on experience with tools and frameworks including Redux, Tailwind CSS,mangoDB and erpress JS, which help me create responsive, user-centric designs. My development philosophy revolves around writing clean, efficient code and continuously improving my skills to deliver scalable solutions.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS </p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>HANDS-ON EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            {/* <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div> */}
        </div>
    </div>
  )
}

export default About;