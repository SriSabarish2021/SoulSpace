import '../../../Sass/HomePageSASS/Programs/Programs.scss';
import { ImAngry2 } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Programs = ({hreffunc,hrefhomefunc}) => {


  let showdetailscard=(name)=>{
    let otherelementscard=document.querySelectorAll(".card-view-more-container")
    otherelementscard.forEach(element => {
    
    if (element.className.includes('view-more-about')) {
       console.log('hello');
       element.classList.remove("view-more-about")
        
      }
      
        let getelement=document.querySelector(`.${name}`).querySelector(".card-view-more-container")
        getelement.classList.add("view-more-about")
        console.log('no');
        
      
      
    });
 
  }
   let closedetailscard=()=>{
    let otherelementscard=document.querySelectorAll(".card-view-more-container")
    otherelementscard.forEach(element => {
    
    if (element.className.includes('view-more-about')) {
       
       element.classList.remove("view-more-about")
        
      }
    });
 
  }
  return (
    <div id='Programs' className='Programs-offered-main-container'>
      <div className='Programs-offered-title'>
        <div className='programs-offered-title-inner'>
          <p className='Programs-offer-para-small'>What We Offer ?</p>
          <p className='Programs-offer-para-main'>Together, we can make great <span className='span-in-offer-tit'>Progress
            <span className='under-line-we-offer'></span>
            </span> </p>
        </div>
      </div>
      <div className='Programs-offered-main-cards'>
        <div className="program-cards-design card-design-1">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Personalized Counseling</p>
              <p className='sub-tit-for-card'>Users can book one-on-one counseling sessions with verified psychiatrists and therapists based on their emotional needs</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn' onClick={()=>showdetailscard(`${'card-design-1'}`)}>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
          <div className='card-view-more-container'>
              <IoMdCloseCircleOutline className='close-view-more' onClick={()=>closedetailscard()}/>
                <div className='hovering-content-container'>
                  <div className='difficulty-level-hover-bar'><p>dfdfdf</p></div>
                  <p className='hover-title'>dfdf</p>
                
                 <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro veniam aliquam dolores voluptates consectetur ex praesentium expedita unde dolore.</p>
                  <div className='prog-info-hovering'>
                    <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>5 Hours</p>
                    <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>4 Lesson</p>
                  </div>
                </div>
                <div className='hovering-btn-container'>
                  <div className='hover-enroll-btn'>
                    
                      <div className='hover-enroll-btn-insider'>
                        Enroll Now
                        <div className='prog-enroll-design-one'></div>
                        <div className='prog-enroll-design-two'></div>
                      </div>
                  
                  </div>
                  
                  
                  
                  
                </div>
            
          </div>
          
        </div>
        <div className="program-cards-design card-design-2">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Age-Specific Therapy</p>
              <p className='sub-tit-for-card'>SOUL SPACE caters to all age groups — children, teenagers, adults, and elderly individuals.</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn'  onClick={()=>showdetailscard(`${'card-design-2'}`)}>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
            <div className='card-view-more-container'>
                <IoMdCloseCircleOutline className='close-view-more' onClick={()=>closedetailscard()}/>
                <div className='hovering-content-container'>
                  <div className='difficulty-level-hover-bar'><p>dfdfdf</p></div>
                  <p className='hover-title'>dfdf</p>
                
                 <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro veniam aliquam dolores voluptates consectetur ex praesentium expedita unde dolore.</p>
                  <div className='prog-info-hovering'>
                    <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>5 Hours</p>
                    <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>4 Lesson</p>
                  </div>
                </div>
                <div className='hovering-btn-container'>
                  <div className='hover-enroll-btn'>
                    
                      <div className='hover-enroll-btn-insider'>
                        Enroll Now
                        <div className='prog-enroll-design-one'></div>
                        <div className='prog-enroll-design-two'></div>
                      </div>
                  
                  </div>
                  
                  
                  
                  
                </div>
            
          </div>
                    
        </div>
        <div className="program-cards-design card-design-3">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>24/7 Emotional Support</p>
              <p className='sub-tit-for-card'>Users can connect with an available counselor at any time through the ―Talk Now‖</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn' onClick={()=>showdetailscard(`${'card-design-3'}`)}>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
           <div className='card-view-more-container'>
                          <IoMdCloseCircleOutline className='close-view-more' onClick={()=>closedetailscard()}/>

                <div className='hovering-content-container'>
                  <div className='difficulty-level-hover-bar'><p>dfdfdf</p></div>
                  <p className='hover-title'>dfdf</p>
                
                 <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro veniam aliquam dolores voluptates consectetur ex praesentium expedita unde dolore.</p>
                  <div className='prog-info-hovering'>
                    <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>5 Hours</p>
                    <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>4 Lesson</p>
                  </div>
                </div>
                <div className='hovering-btn-container'>
                  <div className='hover-enroll-btn'>
                    
                      <div className='hover-enroll-btn-insider'>
                        Enroll Now
                        <div className='prog-enroll-design-one'></div>
                        <div className='prog-enroll-design-two'></div>
                      </div>
                  
                  </div>
                  
                  
                  
                  
                </div>
            
          </div>
          
        </div>
        <div className="program-cards-design card-design-4">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Mood Tracker</p>
              <p className='sub-tit-for-card'>It allows them to note feelings and thoughts — which can later be shared with their therapist for better analysis and progress tracking.</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn' onClick={()=>showdetailscard(`${'card-design-4'}`)}>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
           <div className='card-view-more-container'>
                          <IoMdCloseCircleOutline className='close-view-more' onClick={()=>closedetailscard()}/>

                <div className='hovering-content-container'>
                  <div className='difficulty-level-hover-bar'><p>dfdfdf</p></div>
                  <p className='hover-title'>dfdf</p>
                
                 <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro veniam aliquam dolores voluptates consectetur ex praesentium expedita unde dolore.</p>
                  <div className='prog-info-hovering'>
                    <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>5 Hours</p>
                    <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>4 Lesson</p>
                  </div>
                </div>
                <div className='hovering-btn-container'>
                  <div className='hover-enroll-btn'>
                    
                      <div className='hover-enroll-btn-insider'>
                        Enroll Now
                        <div className='prog-enroll-design-one'></div>
                        <div className='prog-enroll-design-two'></div>
                      </div>
                  
                  </div>
                  
                  
                  
                  
                </div>
            
          </div>
          
        </div>
        <div className="program-cards-design card-design-5">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Meditation Tools</p>
              <p className='sub-tit-for-card'>SOUL SPACE offers guided meditations, breathing exercises, relaxation music, and mindfulness sessions to help users calm your minds.</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn' onClick={()=>showdetailscard(`${'card-design-5'}`)}>
                  <p>View More</p>
                  <div className='card-view-btn-design'></div>
              </div>
            </div>
          </div>
           <div className='card-view-more-container'>
                          <IoMdCloseCircleOutline className='close-view-more' onClick={()=>closedetailscard()}/>

                <div className='hovering-content-container'>
                  <div className='difficulty-level-hover-bar'><p>dfdfdf</p></div>
                  <p className='hover-title'>dfdf</p>
                
                 <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro veniam aliquam dolores voluptates consectetur ex praesentium expedita unde dolore.</p>
                  <div className='prog-info-hovering'>
                    <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>5 Hours</p>
                    <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>4 Lesson</p>
                  </div>
                </div>
                <div className='hovering-btn-container'>
                  <div className='hover-enroll-btn'>
                    
                      <div className='hover-enroll-btn-insider'>
                        Enroll Now
                        <div className='prog-enroll-design-one'></div>
                        <div className='prog-enroll-design-two'></div>
                      </div>
                  
                  </div>
                  
                  
                  
                  
                </div>
            
          </div>
          
        </div>
        <div className="program-cards-design card-for-booking-detail">
          <div className="round-design-booking-date"></div>
          <div className="booking-card">
            <p className='booking-card-para-one'>We are Open</p>
            <div className="location-detail-in-card">
              <MdOutlineLocationOn/>
              <p className='location-detail-in-card'>8895 North Military Trail. <span>Florida 33410</span></p>
            </div>
          </div>
          <div className="booking-days">
            <div className='day-of-one-booking'>
              <div className='day-of-bookin-time'>
                <p className='day-of-bookin-time-para-one'>{window.innerWidth>600?'Monday-Friday':'Mon-Fri'}</p>
                <p className='day-of-bookin-time-para-two'>9AM-7PM</p>
              </div>
              <span className='line-under-day-booking'></span>
            </div>
            <div className='day-of-one-booking'>
              <div className='day-of-bookin-time'>
                <p className='day-of-bookin-time-para-one lighter-day'>{window.innerWidth>600?'Saturday':'Sat'}</p>
                <p className='day-of-bookin-time-para-two lighter-day'>9AM-4PM</p>
              </div>
              <span className='line-under-day-booking'></span>
            </div>
            <div className='day-of-one-booking'>
              <div className='day-of-bookin-time'>
                <p className='day-of-bookin-time-para-one lighter-day'>{window.innerWidth>600?'Sunday':'Sun'}</p>
                <p className='day-of-bookin-time-para-two lighter-day'>Closed</p>
              </div>
              <span className='line-under-day-booking'></span>
            </div>
            
          </div>
          <div className='booking-date-program-btn'>
            <p onClick={()=>hreffunc("Subscribe")}>Book Now</p>
            <div className='booking-date-program-btn-design'></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Programs