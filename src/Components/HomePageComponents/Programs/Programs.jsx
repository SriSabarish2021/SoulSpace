import '../../../Sass/HomePageSASS/Programs/Programs.scss';
import { ImAngry2 } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Programs = ({hreffunc,data,openwritereview}) => {


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
        {Array.from(data).map((indidata)=>
          <div key={indidata.id} className={`program-cards-design card-design-${indidata.id}`}>
            <div className='Card-image'>
              <ImAngry2/>
            </div>
            <div className='Card-info'>
              <div className='card-info-txt'>
                <p className='main-tit-for-card'>{indidata.MainTitle}</p>
                <p className='sub-tit-for-card'>{indidata.MainPara}</p>
              </div>
              <div className='card-view-more'>
                <div className='card-view-btn' onClick={()=>showdetailscard(`card-design-${indidata.id}`)}>
                  <div className='card-view-btn-design'></div>
                    <p>View More</p>
                </div>
              </div>
            </div>
            <div className='card-view-more-container'>
                <IoMdCloseCircleOutline className='close-view-more' onClick={()=>closedetailscard()}/>
                  <div className='hovering-content-container'>
                    <div className='difficulty-level-hover-bar'><p>{indidata.Level}</p></div>
                    <p className='hover-title'>{indidata.SubTitle}</p>
                  
                  <p className="hover-sub-title">{indidata.SubPara}</p>
                    <div className='prog-info-hovering'>
                      <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>{indidata.TotalTime} Hours</p>
                      <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>{indidata.TotalLession} Lesson</p>
                    </div>
                  </div>
                  <div className='hovering-btn-container'>
                    <div  onClick={()=>openwritereview(indidata.MainTitle)} className='hover-enroll-btn'>
                      
                        <div className='hover-enroll-btn-insider'>
                          Enroll Now
                          <div className='prog-enroll-design-one'></div>
                          <div className='prog-enroll-design-two'></div>
                        </div>
                    
                    </div>
                    
                    
                    
                    
                  </div>
              
            </div>
            
          </div>
        )}

        <div className="program-cards-design card-for-booking-detail">
          <div className="round-design-booking-date"></div>
          <div className="booking-card">
            <p className='booking-card-para-one'>We are Open</p>
            <div className="location-detail-in-card">
              <MdOutlineLocationOn/>
              <p className='location-detail-in-card'>33,Kovilpalayam<span>Coimbatore 641107</span></p>
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