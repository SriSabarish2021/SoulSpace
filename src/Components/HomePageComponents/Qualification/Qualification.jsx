import '../../../CSS/HomePageSASS/Qualification/Qualification.css';

import { useRef } from 'react'
import { Video } from '@imagekit/react';
import { Link } from 'react-router-dom';
import { Image } from '@imagekit/react';
const Qualification = ({hreffunc}) => {
  

  const getoffsetYstaffElement=useRef(null)

  const getoffsetXstaff=useRef(0)
    const getoffsetYstaff=useRef(0)

   const MouseMoveEvent=(event)=>{
    
    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht=event.clientX-viewelement.left
    const totheight=event.clientY-viewelement.top

    const offsetX=(totwidht/viewelement.width)*100
    const offsetY=(totheight/viewelement.height)*100
    getoffsetXstaff.current=-offsetX/10
    getoffsetYstaff.current=-offsetY/10

    if (getoffsetYstaffElement.current) {
      getoffsetYstaffElement.current.style.transform=`translateX(${-getoffsetXstaff.current}px) translateY(${-getoffsetYstaff.current}px)`
    }

   }
   
  return (
    <div id='About' className='staff-page-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
      <div className='staff-page-image-container'>
        <div className='staff-page-image-box-one'>
            <Image
                    urlEndpoint="https://ik.imagekit.io/rdxen4o6x"
                    src="/img-qual-one.webp"      
                    alt="Staff Image "
            className='image-box-one-image Staff-Image-Scroll'       
                />
           
          <div className='image-box-one-totors'>
            <div className='tutors-img-tag'>
               <img src="Qualification/Top-staff-Four.avif" alt="Staff Image"
             className='tutor-round tutor-one'/>
              <img src="Qualification/Top-staff-three.avif" alt="Staff Image"
             className='tutor-two'/>
              <img src="Qualification/Top-staff-two.avif" alt="Staff Image"
             className='tutor-three'/>
             <img src="Qualification/Top-staff-one.avif" alt="Staff Image"
             className='tutor-four'/>
              <div className='tutor-five'>
                <p>+50</p>
              </div>
            </div>
            <div className='tutor-cont'>
              <p className='top-mentor'>Top-Mentors</p>
              <p className='top-mentor-sub'>Around the Globe</p>
            </div>
          </div>
        </div>
        <div className='staff-page-image-box-two'>
          <div className='image-box-two-imageone'>
              <Video 
                urlEndpoint="https://ik.imagekit.io/rdxen4o6x"
                src="/133898-758336558_small.mp4"
                  autoPlay
                muted 
                loop
                className='video-tag'
                /> 
              <div className='vid-cont-img-one'>
                <p className='our-story'>Our Story</p>
              </div>
          </div>
           <img src="/Qualification/download.jpg" alt="Staff Image "
             className='image-box-two-imagetwo Staff-Image-Scroll'/>
    
          <div className='mobile-image-for-staff-page'>
            <div className='mobile-image-bar-two-section-one'>
               <img src="/Qualification/download.jpg" alt="Staff Image "
             className='image-box-one-imagetwo-mob Staff-Image-Scroll'/>
              
            </div>
            <div className='mobile-image-bar-two-section-two'>
              <Image
                    urlEndpoint="https://ik.imagekit.io/rdxen4o6x"
                    src="/img-qual-one.webp"      
                    alt="Staff Image "
             className='image-box-two-imagetwo-mob-two Staff-Image-Scroll'      
                />
            
             <div className='image-box-one-totors-mobile'>
            <div className='tutors-img-tag'>
               <img src="/StaffPage/Top-staff-one.avif" alt="Staff Image"
             className='tutor-round tutor-one'/>
              <img src="/StaffPage/Top-staff-two.avif" alt="Staff Image"
             className='tutor-two'/>
              <img src="/StaffPage/Top-staff-three.avif" alt="Staff Image"
             className='tutor-three'/>
             <img src="/StaffPage/Top-staff-Four.avif" alt="Staff Image"
             className='tutor-four'/>
              <div className='tutor-five'>
                <p>+50</p>
              </div>
            </div>
            <div className='tutor-cont'>
              <p className='top-mentor'>Top-Mentors</p>
              <p className='top-mentor-sub'>Around the Globe</p>
            </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='staff-page-content-container'>
    <Video 
                urlEndpoint="https://ik.imagekit.io/rdxen4o6x"
                src="/133898-758336558_small.mp4"
                  autoPlay
                muted 
                loop
                className='video-tag-for-content'
                /> 
        <div className='short-title-staff-page'>
          <div className='line-img-tag'></div>
          <p className='flexible-short-tit'>FLEXIBLE SUPPORTED</p> 
        </div>
        
        <div className='tutor-title-content'>
            <div className='heading-tutor'>
              <p className='heading-tutor-p-one'>Expertise Across <span   className='span-in-analysis' >All</span> </p>
              <p className='heading-tutor-p-two' ref={getoffsetYstaffElement}  style={{transitionDuration:'0.2s'}} >Disciplines</p>
            </div>
            <div className='sub-heading-tutor'>
                <p className='sub-heading-tutor-p-one'> SOUL SPACE is an innovative mobile and web-based mental wellness application designed to help individuals maintain their emotional balance, mental strength, and overall well-being. It offers a safe and accessible platform where people can communicate openly with certified psychiatrists, counselors, and therapists without the fear of judgment or stigma.</p>
            </div> 

          
      
        </div>
        <div className='total-number-in-staff-achievements'>
          <div className='number-analysis-box-one'>
            <div className='number-analysis-one'>
              <div className='analysis-tag-img-one'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-one'>
                <p  className='analysis-num'>70%</p>
                <p className='analysis-cont'>{window.innerWidth<370?'70% of our  Psychiatrist have 5+ years.':window.innerWidth<730?String('70% of our Psychiatrist have 5+ years of experience in Guiding.').slice(0,60)+'..':window.innerWidth<850?'70% of our  Psychiatrist have 5+ years.':'70% of our  Psychiatrist have 5+ years of experience, enriching Life.'}</p>
              </div>
            </div>
            <div className='number-analysis-two'>
              <div className='analysis-tag-img-two'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-two'>
                <p className='analysis-num'>9/10</p>
                <p className='analysis-cont'>{window.innerWidth<370?'9 in 10 Psychiatrist exceed in benchmarks.':window.innerWidth<730?String('9 out of 10 Psychiatrist exceed benchmarks, showing dedication.').slice(0,60)+'..':window.innerWidth<850?'9 in 10 Psychiatrist exceed benchmarks.':'9 out of 10 Psychiatrist exceed benchmarks, showing dedication.'}</p>
              </div>
            </div>
          </div>
          <div className='number-analysis-box-two'>
            <div className='number-analysis-three'>
              <div className='analysis-tag-img-three'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-three'>
                <p className='analysis-num'>95%</p>
                <p className='analysis-cont'>{window.innerWidth<370?'Our expert Psychiatrist offer great guidance.':window.innerWidth<730?String('Our Psychiatrist hold advanced degrees and provide excellent guidance.').slice(0,60)+'..':window.innerWidth<850?'Our expert faculty offer top-notch guidance.':'Our Psychiatrist hold advanced degrees and provide excellent guidance.'}
</p>
              </div>
            </div>
            <div className='number-analysis-four'>
              <div className='analysis-tag-img-four'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-four'>
                <p className='analysis-num'>10+</p>
                <p className='analysis-cont'>{window.innerWidth<370?'10 Psychiatrist specialize in personalized Field':window.innerWidth<730?String('10 staff excel in personalized academic and career guidance.').slice(0,60)+'..':window.innerWidth<850?'10 Psychiatrist specialize in personalized academic':'10 Psychiatrist excel in personalized academic and career guidance.'}</p>
              </div>
              
              
            </div>
          </div>
        </div>
        <div onClick={()=>hreffunc("Contact")} style={{textDecoration:'none'}} className='btn-in-tutor-analysis'>Learn More
          <div className='btn-animation-in-staff-page'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification
