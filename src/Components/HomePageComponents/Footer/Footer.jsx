import '../../../Sass/HomePageSASS/Footer/Footer.scss';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = ({hreffunc,hrefhomefunc}) => {
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
            <p className='description-footer'>Digital platform that aims to bring back the power of talking, sharing, and healing.</p>
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
              <p className='footer-nav-item'>Workshops</p>
              <p className='footer-nav-item'>Mental Health</p>
              <p className='footer-nav-item'>Wellness</p>
              <p className='footer-nav-item'>Direct chat</p>
            </div>
          </div>
          <div className='footer-quicklink-nav'>
            <p className='foot-nav-tit'>Quick Links</p>
            <div className='list-footer-nav'>
              <p onClick={()=>hrefhomefunc()} className='footer-nav-item'>Home</p>
              <p onClick={()=>hreffunc("About")} className='footer-nav-item'>About Us</p>
              <p onClick={()=>hreffunc("Programs")} className='footer-nav-item'>Programs</p>
              <p onClick={()=>hreffunc("Contact")} className='footer-nav-item'>Contact</p>
            </div>
          </div>
          <div className='footer-all-nav'>
            <p className='foot-nav-tit'>Help Side</p>
            <div className='list-footer-nav'>
              <p className='footer-nav-item'>24/7</p>
              <p className='footer-nav-item'>Direct Call</p>
              <p className='footer-nav-item'>QuickResponse</p>
              <p className='footer-nav-item'>No Timer</p>
            </div>
          </div>
          <div className='footer-contact-nav'>
            <p className='foot-nav-tit'>Reach-us</p>
            <div className='list-footer-nav'>
              <p className='contact-footer'>Address: <span className='value-in-foot-contact'>77,Rayapalayam Erode</span></p>
              <p className='contact-footer'>Phone: <span className='value-in-foot-contact'>23902=322332</span></p>
              <p className='contact-footer'>Email: <span className='value-in-foot-contact'>srisabarish238@gmail.com</span></p>
              <p className='contact-icon-box'>
                <a href='https://www.linkedin.com/in/dinesh-kumar-n-a0017a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' style={{textDecoration:'none'}} className='Contact-icon-path'><FaLinkedinIn/></a>
                <a href='https://www.facebook.com/share/1JK8bPAbW8/'  target='_blank' style={{textDecoration:'none'}} className='Contact-icon-path'><FaFacebook/></a>
                <a href='https://www.instagram.com/im_dinesh_06?igsh=MW5yMWJwY3lzcTRtNw=='  target='_blank' style={{textDecoration:'none'}} className='Contact-icon-path'><FaInstagram/></a>
                <a href='https://www.instagram.com/im_dinesh_06?igsh=MW5yMWJwY3lzcTRtNw=='  target='_blank' style={{textDecoration:'none'}} className='Contact-icon-path'><FaXTwitter/></a>
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
