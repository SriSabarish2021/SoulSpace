import '../../../Sass/HomePageSASS/Subscription/Subscription.scss';
import { FaRegCheckCircle } from "react-icons/fa";

const Subcription = ({openwritereview}) => {
  return (
    <div id='Subscribe' className='Subscription-main-page-container'>
      <div className='Pricing-plan-title-container'>
        <div className='pricing-plan-para-div'>
          <p className='para-main-pricing-one'>Pricing Plan</p>
          <p className='para-main-pricing-two'>Choose the plan that suits your wellness journey. Each subscription offers personalized support and expert care to help you achieve emotional balance.</p>
        </div>
      </div>
      <div className='Pricing-plan-main-container'>
        <div className='Pricing-box pricing-top'>
          <div className='pricing-title-box'>
            <p className='plan-name'>Basic Plan</p>
            <p className='plan-amount-para'>$150 <span className='Amount-underline-for-plan'></span></p>
          </div>
          <div className='Princing-features'>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Monthly check-ins</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Essential resources</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Priority booking</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Priority booking</p>
            
          </div>
          <div className='button-in-pricing-box' onClick={()=>openwritereview('BasicPlan')}>
            <p >Buy Now</p>
            <div className='button-design-for-pricing-one'></div>
            <div className='button-design-for-pricing-two'></div>
          </div>
        </div>
        <div className='Pricing-box pricing-middle'>
          <div className='pricing-title-box'>
            <p className='plan-name'>Advanced Plan</p>
            <p className='plan-amount-para'>$200<span className='Amount-underline-for-plan'></span></p>
          </div>
          <div className='Princing-features'>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Weekly sessions</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Personalized roadmap</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Progress reports</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Chat support</p>
            
          </div>
          <div className='button-in-pricing-box'  onClick={()=>openwritereview('BasicPlan')}>
            <p>Buy Now</p>
            <div className='button-design-for-pricing-one'></div>
            <div className='button-design-for-pricing-two'></div>
          </div>
        </div>
        <div className='Pricing-box pricing-bottom'>
          <div className='pricing-title-box'>
            <p className='plan-name'>Premium Plan</p>
            <p className='plan-amount-para'>$350 <span className='Amount-underline-for-plan'></span></p>
          </div>
          <div className='Princing-features'>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Unlimited schedule</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>24/7 support</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Advanced therapy</p>
            <p className='para-in-feature-pricing'><span className='Tick-icon-in-features'><FaRegCheckCircle/></span>Exclusive workshop</p>
            
          </div>
          <div className='button-in-pricing-box'  onClick={()=>openwritereview('BasicPlan')}>
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