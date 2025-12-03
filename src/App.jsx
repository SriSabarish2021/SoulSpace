import Nav from './Components/NavBar/Nav'
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/HomePageComponents/Footer/Footer";
import { VscEyeClosed } from "react-icons/vsc";

import './App.css'
import HomepageAll from './Components/WebsiteComponents/HomepageAll'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useEffect } from 'react';

function App() {

  const [data, setdata] = useState([
    {
      id:1,
      MainTitle:"Personalized Counseling",
      MainPara:"Users can book one-on-one counseling sessions with verified psychiatrists and therapists based on their emotional needs",
      imgurl:"",
      SubTitle:"Counseling",
      SubPara:"Users can book one-on-one counseling sessions with verified psychiatrists and therapists based on their emotional needs",
      Level:"Beginner",
      TotalTime:'5',
      TotalLession:'4'
    },{
      id:2,
      MainTitle:"Age-Specific Therapy",
      MainPara:"SOUL SPACE caters to all age groups — children, teenagers, adults, and elderly individuals.",
      imgurl:"",
      SubTitle:"Therapy",
      SubPara:"SOUL SPACE caters to all age groups — children, teenagers, adults, and elderly individuals.",
      Level:"Beginner",
      TotalTime:'5',
      TotalLession:'4'
    },{
      id:3,
      MainTitle:"24/7 Emotional Support",
      MainPara:"Users can connect with an available counselor at any time through the ―Talk Now‖",
      imgurl:"",
      SubTitle:"24/7 Support",
      SubPara:"Users can connect with an available counselor at any time through the ―Talk Now feature. This round-the-clock availability ensures that no one feels alone during their tough times.",
      Level:"Beginner",
      TotalTime:'5',
      TotalLession:'4'
    },{
      id:4,
      MainTitle:"Mood Tracker",
      MainPara:"It allows them to note feelings and thoughts — which can later be shared with their therapist for better analysis and progress tracking.",
      imgurl:"",
      SubTitle:"Mood Tracker",
      SubPara:"It allows them to note feelings, events, and thoughts — which can later be shared with their therapist for better analysis and progress tracking.",
      Level:"Beginner",
      TotalTime:'5',
      TotalLession:'4'
    },{
      id:5,
      MainTitle:"Meditation Tools",
      MainPara:"SOUL SPACE offers guided meditations, breathing exercises, relaxation music, and mindfulness sessions to help users calm your minds.",
      imgurl:"",
      SubTitle:"Meditation",
      SubPara:"SOUL SPACE offers guided meditations, breathing exercises, relaxation music, and mindfulness sessions to help users calm their minds, improve focus, and enhance positivity.",
      Level:"Beginner",
      TotalTime:'5',
      TotalLession:'4'
    }
  ])
  
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
    const [successmess,setsuccessmess]=useState(false)
    let successsubmit=()=>{

      setreviewwrite(false)
      setsuccessmess(true)
        
      }
      
  useEffect(() => {
      
      
       let timer= setTimeout(() => {
        if (successmess) {
          setsuccessmess(false)
        }
        }, 4000);
      
    
      return () => {
        clearTimeout(timer)
      }
    }, [successmess])


  return (
    <div className='website-main-container'>
      <Nav hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/>
      <Routes>
        <Route path='/'>
          <Route index element={<HomepageAll successsubmit={successsubmit} data={data} openwritereview={openwritereview} hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/>}/>
        </Route>
      </Routes>
      <Footer hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/> 
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
                  <button className='review-btn-submit review-btn' type="submit" value="Send" onClick={()=>successsubmit()}>Submit</button>
                  <button className='review-btn-cancel review-btn' onClick={()=>cancelreview()}>Cancel</button>
                </div>
                        <button  className='review-input-close-btn' onClick={()=>cancelreview()}><VscEyeClosed/></button>

              </form>
            </div>
      </div>
   
        <div className={`response-inner-box ${successmess?'show-mess':'not-show-mess'}`}>
          <IoCheckmarkDoneCircle className='response-tick-symbol'/>
          <p className='response-side-mess'>Response Submitted Successfullly</p>
         
        </div>
   
      
    </div>
  )
}

export default App
