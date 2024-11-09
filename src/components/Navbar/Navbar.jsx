import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("home"); // State to track active menu item
  const menuref = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item); // Set the clicked item as active
    setIsMenuOpen(false); // Close the menu if needed
  };

  return (
    <div className="navbar">
      <img className="nameimage" src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/1-vinay-tintodesigns-transparent.png?&targetx=0&targety=-98&imagewidth=700&imageheight=700&modelwidth=700&modelheight=500&backgroundcolor=ffffff&orientation=0" alt="profile pic" />
      <img src={menu_open} onClick={openMenu} alt="open menu" className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu" style={{ right: isMenuOpen ? '0' : '-350px' }}>
        <img src={menu_close} onClick={closeMenu} alt="close menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuItemClick("home")}>Home</p>
          </AnchorLink>
          {activeMenuItem === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuItemClick("about")}>About Me</p>
          </AnchorLink>
          {activeMenuItem === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Services">
            <p onClick={() => handleMenuItemClick("services")}>Services</p>
          </AnchorLink>
          {activeMenuItem === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuItemClick("portfolio")}>Portfolio</p>
          </AnchorLink>
          {activeMenuItem === "portfolio" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuItemClick("contact")}>Contact</p>
          </AnchorLink>
          {activeMenuItem === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

