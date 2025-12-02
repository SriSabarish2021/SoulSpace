import Nav from './Components/NavBar/Nav'
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/HomePageComponents/Footer/Footer";
import { VscEyeClosed } from "react-icons/vsc";

import './App.scss'
import HomepageAll from './Components/WebsiteComponents/HomepageAll'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  
  let reviewNameref=useRef('')
  let reviewDegreeref=useRef('')
  let reviewEmailref=useRef('')
  let reviewCommentref=useRef('')
  let reviewPhoneref=useRef('')
  const [reviewwrite,setreviewwrite]=useState(false)
     
    const openwritereview=(Subscriptiontype)=>{
      console.log(Subscriptiontype);
      
    reviewDegreeref.current.value=''
    reviewNameref.current.value = '';
    reviewEmailref.current.value = '';
    reviewPhoneref.current.value='';
    reviewCommentref.current.value = `${Subscriptiontype}`;
    setreviewwrite(true)
     
  }
  let hreffunc=(pagename)=>{
    if (window.location.hash.includes('#')) {
       window.location.hash=``
    }
    window.location.hash=`${pagename}`
  }
  let hrefhomefunc=()=>{
    window.location.hash=``
    window.location.pathname=`/`

  }

  const removeredborder=()=>{
  let allinputborder=document.querySelectorAll('.review-input-border')
    allinputborder.forEach((indiinp)=>{
      if (String(indiinp.value).length!==0) {
        indiinp.classList.remove('review-no-input-border')
      }else{
        return
      }
    
        
      })
}
const clickreviewcloser=(id)=>{
    if (String(id).includes('close-review-write')) {
      setreviewwrite(false)
    }else{
      return
    }
  }
  
  const cancelreview=()=>{
    let allinputborder=document.querySelectorAll('.review-input-border')

    reviewDegreeref.current.value=''
    reviewNameref.current.value = '';
    reviewEmailref.current.value = '';
    reviewCommentref.current.value = '';
    reviewPhoneref.current.value=''
    allinputborder.forEach((indiinp)=>{
       indiinp.classList.remove('review-no-input-border')
      })
     setreviewwrite(!reviewwrite)
   
    
  }


  const form = useRef();
  
    const sendEmailforpay = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_83z494w', 'template_77bu4zp', form.current, {
          publicKey: 'U08Tgu_MKdFnHmQj1',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  return (
    <div className='website-main-container'>
      <Nav hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/>
      <Routes>
        <Route path='/'>
          <Route index element={<HomepageAll openwritereview={openwritereview} hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/>}/>
        </Route>
      </Routes>
      <Footer/> 
       <div id='close-review-write'  className={`review-written-container ${reviewwrite?'move':'remove'}`}>
            <div id='not-close-review-write' onClick={(e)=>clickreviewcloser(e.target.id)}  className='review-written-input-container'>
              <form ref={form} onSubmit={sendEmailforpay} className="review-input-main-container">
                <div className='review-input-title-bar'>
                  <p>Your Subscription</p>
                </div>
                
                <div className="review-writing-name-by-user">
                  <p className='all-review-input-title'>Name</p>
                  <input name='name' ref={reviewNameref} onChange={()=>removeredborder()}    type="text" className="inpreview name-input-for-comment review-input-border"  placeholder="Enter your name"/>
                </div>
                <div className="review-writing-name-by-user">
                  <p className='all-review-input-title'>Phone</p>
                  <input name='phone' ref={reviewPhoneref} onChange={()=>removeredborder()}    type="phone" className="inpreview name-input-for-comment review-input-border"  placeholder="Enter your name"/>
                </div>
                <div className="review-writing-degree-by-user">
                  <p className='all-review-input-title'>AGE</p>
                  <input name='age' ref={reviewDegreeref} onChange={()=>removeredborder()}    type="text" className="inpreview qualification-input-for-comment review-input-border"  placeholder="Your AGE"/>
                </div>
                <div className="review-writing-email-by-user">
                  <p className='all-review-input-title'>Email</p>
                  <input name='email' ref={reviewEmailref} onChange={()=>removeredborder()}   type="email" className="inpreview email-input-for-comment review-input-border"  placeholder="Enter your email (private)"/>
                </div>

                <div className="comment-writing-review-box">
                        <p className='all-review-input-title'>Your Need</p>
                        
                        <textarea name='package' ref={reviewCommentref} readOnly className="inpreview review-input-for-comment review-input-border"  placeholder="Write your comment here" ></textarea>
                  </div>
                <div className="privacy-policy-for-comment">
                  <p className='comment-writing-email'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Soul Space’s <span className='comment-condition'>terms</span>, <span className='comment-condition'>privacy</span> and <span className='comment-condition'>content</span> policies.</p>
                </div>
                <div className='review-btn-container'>
                  <button className='review-btn-submit review-btn' type="submit" value="Send">Submit</button>
                  <button className='review-btn-cancel review-btn' onClick={()=>cancelreview()}>Cancel</button>
                </div>
                        <button  className='review-input-close-btn' onClick={()=>cancelreview()}><VscEyeClosed/></button>

              </form>
            </div>
      </div>
      
    </div>
  )
}

export default App
