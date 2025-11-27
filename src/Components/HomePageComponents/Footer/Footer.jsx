import '../../../Sass/HomePageSASS/Footer/Footer.scss';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer-main-container'>
      <div className="inner-bar-footer">
        <div className='footer-top-content'>
          <div className='site-info'>
            <div className='logo-name-footer'>
              <div className='footer-logo-box'>
                <img src="./image-removebg-preview.webp" alt="" className='site-logo-img-footer'/>
              </div>
              <p className='footer-tit'>Soul Space</p>
            </div>
            <p className='description-footer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, reprehenderit.</p>
          </div>
          <div className='subscribtion-footer'>
            <p className='join-us-footer-txt'>Join Us</p>
            <div className='subscription-input-container'>
              <input type="text" className='footer-input' placeholder='Subscribe'/>
              <button className='footer-btn'>click me</button>
            </div>
          </div>
        </div>
        <div className='footer-nav-items'>
          <div className='footer-program-nav'>
            <p className='foot-nav-tit'>Programms</p>
            <div className='list-footer-nav'>
              <p className='footer-nav-item'>Home</p>
              <p className='footer-nav-item'>About Us</p>
              <p className='footer-nav-item'>Programs</p>
              <p className='footer-nav-item'>Contact</p>
            </div>
          </div>
          <div className='footer-quicklink-nav'>
            <p className='foot-nav-tit'>Quick Links</p>
            <div className='list-footer-nav'>
              <p >Home</p>
              <p >About Us</p>
              <p >Programs</p>
              <p >Contact</p>
            </div>
          </div>
          <div className='footer-all-nav'>
            <p className='foot-nav-tit'>Quick Links</p>
            <div className='list-footer-nav'>
              <p className='footer-nav-item'>Home</p>
              <p className='footer-nav-item'>About Us</p>
              <p className='footer-nav-item'>Programs</p>
              <p className='footer-nav-item'>Contact</p>
            </div>
          </div>
          <div className='footer-contact-nav'>
            <p className='foot-nav-tit'>Quick Links</p>
            <div className='list-footer-nav'>
              <p className='contact-footer'>Address: <span className='value-in-foot-contact'>77,Rayapalayam Erode</span></p>
              <p className='contact-footer'>Phone: <span className='value-in-foot-contact'>23902=322332</span></p>
              <p className='contact-footer'>Email: <span className='value-in-foot-contact'>srisabarish238@gmail.com</span></p>
              <p className='contact-icon-box'>
                <span className='Contact-icon-path'><FaWhatsapp/></span>
                <span className='Contact-icon-path'><FaFacebook/></span>
                <span className='Contact-icon-path'><FaInstagram/></span>
                <span className='Contact-icon-path'><FaXTwitter/></span>
              </p>
            </div>
          </div>
        </div>
        <div className='rights-reserved-box'>
          <p className='para-copyrights'>Copyright <FaRegCopyright/> 2025 <span className='copy-title'>SoulSpace</span></p>
          <p className='para-rights'>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
