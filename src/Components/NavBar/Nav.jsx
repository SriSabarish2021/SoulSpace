import '../../Sass/NavBar/Nav.scss';
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className="nav-bar-for-website">
      <div className='nav-container-for-search'>
        <div className="search-bar-nav">
          <div className='search-bar-container-in-nav'>
            <input type="text" placeholder='Your Needs...' className='input-for-search'/>

          </div>
          <div className="search-icon-holder-nav">
            <FaSearch className='search-icon-nav'/>
          </div>
        </div>
        <div className="social-link-nav">
          <div className="social-icons-nav">
            <FaFacebook className='social-icon-nav'/>
          </div>
          <div className="social-icons-nav">
            <FaInstagram className='social-icon-nav'/>
          </div>
          <div className="social-icons-nav">
            <FaTwitter className='social-icon-nav'/>
          </div>
          <div className="social-icons-nav">
            <FaWhatsapp className='social-icon-nav'/>
          </div>
        </div>
      </div>
      <div className="nav-container-for-main-navbar">
        <div className="site-logo">
          <img src="./image-removebg-preview.webp" alt="" className='site-logo-img'/>
          <p className='site-logo-name'>SOULspace</p>
        </div>
        <div className="nav-sections">
           <a href='#' className='nav-link-para'>Home</a>
            <a href='#' className='nav-link-para'>About us</a>
             <a href='#' className='nav-link-para'>Programs <FaAngleRight className='arrow-change-icon'/></a>
              <a href='#' className='nav-link-para'>Contact</a>
        </div>
        <div className='mobile-burger-menu'>
          <RxHamburgerMenu/>
        </div>
      </div>
    </div>
  )
}

export default Nav