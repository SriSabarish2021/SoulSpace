import '../../../Sass/HomePageSASS/Programs/Programs.scss';
import { ImAngry2 } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";

const Programs = () => {
  return (
    <div className='Programs-offered-main-container'>
      <div className='Programs-offered-title'>
        <div className='programs-offered-title-inner'>
          <p className='Programs-offer-para-small'>What We Offer ?</p>
          <p className='Programs-offer-para-main'>Together, we can make great <span className='span-in-offer-tit'>Progress
            <span className='under-line-we-offer'></span>
            </span> </p>
        </div>
      </div>
      <div className='Programs-offered-main-cards'>
        <div className="program-cards-design">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Speech therapy</p>
              <p className='sub-tit-for-card'>Therapists have a minimum of 7 years of experience, and are accredited and insured to practice privately</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn'>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="program-cards-design">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Speech therapy</p>
              <p className='sub-tit-for-card'>Therapists have a minimum of 7 years of experience, and are accredited and insured to practice privately</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn'>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="program-cards-design">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Speech therapy</p>
              <p className='sub-tit-for-card'>Therapists have a minimum of 7 years of experience, and are accredited and insured to practice privately</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn'>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="program-cards-design">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Speech therapy</p>
              <p className='sub-tit-for-card'>Therapists have a minimum of 7 years of experience, and are accredited and insured to practice privately</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn'>
                 <div className='card-view-btn-design'></div>
                  <p>View More</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="program-cards-design">
          <div className='Card-image'>
            <ImAngry2/>
          </div>
          <div className='Card-info'>
            <div className='card-info-txt'>
              <p className='main-tit-for-card'>Speech therapy</p>
              <p className='sub-tit-for-card'>Therapists have a minimum of 7 years of experience, and are accredited and insured to practice privately</p>
            </div>
            <div className='card-view-more'>
              <div className='card-view-btn'>
                  <p>View More</p>
                  <div className='card-view-btn-design'></div>
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
                <p className='day-of-bookin-time-para-one'>Monday-Friday</p>
                <p className='day-of-bookin-time-para-two'>9AM-7PM</p>
              </div>
              <span className='line-under-day-booking'></span>
            </div>
            <div className='day-of-one-booking'>
              <div className='day-of-bookin-time'>
                <p className='day-of-bookin-time-para-one lighter-day'>Saturday</p>
                <p className='day-of-bookin-time-para-two lighter-day'>9AM-4PM</p>
              </div>
              <span className='line-under-day-booking'></span>
            </div>
            <div className='day-of-one-booking'>
              <div className='day-of-bookin-time'>
                <p className='day-of-bookin-time-para-one lighter-day'>Sunday</p>
                <p className='day-of-bookin-time-para-two lighter-day'>Closed</p>
              </div>
              <span className='line-under-day-booking'></span>
            </div>
            
          </div>
          <div className='booking-date-program-btn'>
            <p>Book Now</p>
            <div className='booking-date-program-btn-design'></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Programs