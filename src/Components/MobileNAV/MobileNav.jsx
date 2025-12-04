import '../../CSS/MobileNav/MobileNav.css'
import { Image } from '@imagekit/react';
import { Link, NavLink } from 'react-router-dom';

const NavForMobile = ({mobilenav,setmobilenav,hrefhomefunc,hreffunc}) => {
  return (
    <div className={`nav-mobile-main-bar ${mobilenav?'mobilenavshow':'mobilenavnotshow'}`}>
        <div className={`nav-mobile-inner-bar ${mobilenav?'navzoom':'nonavzoom'}`}>
           <div className='nav-side-share-close-mob-nav' onClick={()=>setmobilenav(false)}>
                <div className='close-nav-side-line-one-mob-nav'></div>
                <div className='close-nav-side-line-two-mob-nav'></div>
            </div>
          <div className='mobile-nav-bar-title'>
            <div className='nav-share-logo-for-mob-nav'>
                <img
                
                src="./image-removebg-preview.png"
                
                alt="Website Logo"
                className='website-icon-for-mob-nav'
                />
                <p className='web-name-side-share-mob-nav'>Soul<span>Space</span></p>
            </div>
          </div>
          <div  className='mobile-nav-bar-main-cont'>
             
                <p className={`p-for-nav-item-mob `} onClick={()=>{setmobilenav(false),hrefhomefunc()}}>Home</p>
    
                  
                <p className={`p-for-nav-item-mob `} onClick={()=>{setmobilenav(false),hreffunc("About")}}>About Us</p>
   

              
                <p className={`p-for-nav-item-mob `} onClick={()=>{setmobilenav(false),hreffunc("Programs")}}>Programs</p>
   
              
                <p className={`p-for-nav-item-mob `} onClick={()=>{setmobilenav(false),hreffunc("Contact")}}>Contact</p>

          </div>
         
        </div>
      
    </div>
  )
}

export default NavForMobile
