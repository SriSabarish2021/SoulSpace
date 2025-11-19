import '../../../Sass/HomePageSASS/Subscription/Subscription.scss';
import { FaRegCheckCircle } from "react-icons/fa";

const Subcription = () => {
  return (
    <div className='Subscription-main-page-container'>
      <div className='Pricing-plan-title-container'>
        <div className='pricing-plan-para-div'>
          <p className='para-main-pricing-one'>Pricing Plan</p>
          <p className='para-main-pricing-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, incidunt?</p>
        </div>
      </div>
      <div className='Pricing-plan-main-container'>
        <div className='Pricing-box pricing-top'>
          <div className='pricing-title-box'>
            <p className='plan-name'>Basic Plan</p>
            <p className='plan-amount-para'>$150 <span className='Amount-underline-for-plan'></span></p>
          </div>
          <div className='Princing-features'>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            
          </div>
          <div className='button-in-pricing-box'>
            <p>Buy Now</p>
            <div className='button-design-for-pricing-one'></div>
            <div className='button-design-for-pricing-two'></div>
          </div>
        </div>
        <div className='Pricing-box pricing-middle'>
          <div className='pricing-title-box'>
            <p className='plan-name'>Basic Plan</p>
            <p className='plan-amount-para'>$150 <span className='Amount-underline-for-plan'></span></p>
          </div>
          <div className='Princing-features'>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            
          </div>
          <div className='button-in-pricing-box'>
            <p>Buy Now</p>
            <div className='button-design-for-pricing-one'></div>
            <div className='button-design-for-pricing-two'></div>
          </div>
        </div>
        <div className='Pricing-box pricing-bottom'>
          <div className='pricing-title-box'>
            <p className='plan-name'>Basic Plan</p>
            <p className='plan-amount-para'>$150 <span className='Amount-underline-for-plan'></span></p>
          </div>
          <div className='Princing-features'>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Lorem ipsum dolor</p>
            
          </div>
          <div className='button-in-pricing-box'>
            <p>Buy Now</p>
            <div className='button-design-for-pricing-one'></div>
            <div className='button-design-for-pricing-two'></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Subcription