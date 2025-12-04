import '../../CSS/NavBar/Nav.css';
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";

const Nav = ({hreffunc,hrefhomefunc,setmobilenav}) => {
  
  return (
    <div className="nav-bar-for-website">
      <div className='nav-container-for-search'>
        <div className="search-bar-nav">
          <div className='search-bar-container-in-nav'>
            <input type="text" placeholder='Your Needs...' className='input-for-search'/>

          </div>
          <div className="search-icon-holder-nav">
            <FaSearch onClick={()=>hreffunc("Programs")} className='search-icon-nav'/>
          </div>
        </div>
        <div className="social-link-nav">
          <a style={{textDecoration:'none'}} href='https://www.facebook.com/share/1JK8bPAbW8/' target='_blank' className="social-icons-nav">
            <FaFacebook className='social-icon-nav'/>
          </a>
          <a style={{textDecoration:'none'}} href='https://www.instagram.com/im_dinesh_06?igsh=MW5yMWJwY3lzcTRtNw==' target='_blank' className="social-icons-nav">
            <FaInstagram className='social-icon-nav'/>
          </a>
          <a style={{textDecoration:'none'}} href='https://www.facebook.com/share/1JK8bPAbW8/' target='_blank' className="social-icons-nav">
            <FaTwitter className='social-icon-nav'/>
          </a>
          <a style={{textDecoration:'none'}} href='https://www.linkedin.com/in/dinesh-kumar-n-a0017a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className="social-icons-nav">
            <FaLinkedinIn className='social-icon-nav'/>
          </a>
        </div>
      </div>
      <div className="nav-container-for-main-navbar">
        <div className="site-logo">
          <img src="./image-removebg-preview.webp" alt="" className='site-logo-img'/>
          <p className='site-logo-name'>SOULspace</p>
        </div>
        <div className="nav-sections">
           <p onClick={()=>hrefhomefunc()} className='nav-link-para'>Home</p>
            <p  onClick={()=>hreffunc("About")} className='nav-link-para'>About us</p>
             <p  onClick={()=>hreffunc("Programs")}  className='nav-link-para'>Programs <FaAngleRight className='arrow-change-icon'/></p>
              <p onClick={()=>hreffunc("Contact")} className='nav-link-para'>Contact</p>
        </div>
        <div className='mobile-burger-menu'>
          <RxHamburgerMenu onClick={()=>setmobilenav(true)}/>
        </div>
      </div>
    </div>
  )
}

export default Nav