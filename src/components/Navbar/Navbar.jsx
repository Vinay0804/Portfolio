import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {

  const [menu,Setmenu] = useState("home")

  const menuref = useRef();
  const openMenu=()=>{
    menuref.current.style.right="0"
  }
  const closeMenu=()=>{
    menuref.current.style.right="-350px"
  }
  

  return <div className="navbar">
    

    <img  className="nameimage" src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/1-vinay-tintodesigns-transparent.png?&targetx=0&targety=-98&imagewidth=700&imageheight=700&modelwidth=700&modelheight=500&backgroundcolor=ffffff&orientation=0" alt="profile pic"/>
    <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
    
    <ul ref = {menuref} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>Setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>Setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#Services"><p onClick={()=>Setmenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>Setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>Setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
    </ul>
    <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>;
};

export default Navbar;
