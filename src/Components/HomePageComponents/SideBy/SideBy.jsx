import '../../../Sass/HomePageSASS/SideBy/SideBy.scss';

/* import { Video } from '@imagekit/react'; */
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SideBy = ({onedisp,twodisp}) => {
  return (
    <div className='side-by-elements-container'>
         {onedisp&&twodisp?
        <div className='side-by-inner-container'>
            <div className='side-by-two'>
                <div  className='side-by-two-img-tag'>
                     
                     {/* <Video 
                        urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                        src="/7192325-uhd_3840_2160_25fps.mp4"
                        autoPlay
                        muted 
                        loop
                        className='side-by-two-img'
                    /> */}
                </div>
                <div  className='side-by-two-cont-tag'>
                    <div className='side-by-two-main-para'>
                        <p  className='side-by-p-one'>Anytime Access to Our</p>
                        <p  className='side-by-p-two'>Recorded Session's</p>
                    </div>
                    <p className='side-by-sub-para'>All our sessions are recorded and available 24/7, so students can revisit lessons anytime at their own pace.</p>
                    <Link to={"Providing-Education's-in-Mindspire-Institute"} style={{textDecoration:'none'}} className='btn-side-by'>Get Access <FaArrowRight  className='arrow-btn-side-by'/>
                          <div className='btn-design-in-side-by-one'></div>
                        <div className='btn-design-in-side-by-two'></div> 
                    </Link>
                </div>

                 <div className='design-circle-two-box-one'></div>
                <div className='design-circle-two-box-two'></div>
            </div>
        </div>:onedisp&&!twodisp? 
        <div className='side-by-inner-container'>
             <div className='side-by-one'>
                <div className='side-by-one-img-tag'>
                    {/*  <Video 
                        urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                        src="/5183279-hd_1920_1080_30fps.mp4"
                         autoPlay
                        muted 
                        loop
                        className='side-by-one-img'
                        /> */}
                </div>
                <div  className='side-by-one-cont-tag'>
                    <div className='side-by-one-main-para'>
                        <p className='side-by-p-one'>Expert Instructor's </p>
                        <div className='live-class-showing'>
                        <p  className='side-by-p-two live-class-para'><span className='live-class-indicator'><GoDotFill className='live-dot'/>Live</span> Classes Here!</p>
                        </div>
                        
                    </div>
                    <p className='side-by-sub-para'>Join live sessions led by skilled educators—learn, ask,and interact directly with top educators, and grow in real time.</p>
                    <Link to={"About-Mindspire-Institute"} style={{textDecoration:'none'}} className='btn-side-by'>Learn More <FaArrowRight className='arrow-btn-side-by'/>
                       <div className='btn-design-in-side-by-one'></div>
                        <div className='btn-design-in-side-by-two'></div> 
                    </Link>
                </div>

                <div className='design-circle-one-box-one'></div>
                <div className='design-circle-two-box-one'></div>

            </div>
        </div>: <div className='side-by-inner-container'>
             <div className='side-by-one'>
                <div className='side-by-one-img-tag'>
                     {/* <Video 
                        urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                        src="/5183279-hd_1920_1080_30fps.mp4"
                         autoPlay
                        muted 
                        loop
                        className='side-by-one-img'
                        /> */}
                </div>
                <div  className='side-by-one-cont-tag'>
                    <div className='side-by-one-main-para'>
                        <p className='side-by-p-one'>Expert Instructor's </p>
                        <div className='live-class-showing'>
                        <p  className='side-by-p-two live-class-para'><span className='live-class-indicator'><GoDotFill className='live-dot'/>Live</span> Classes Here!</p>
                        </div>
                        
                    </div>
                    <p className='side-by-sub-para'>Join live sessions led by skilled educators—learn, ask,and interact directly with top educators, and grow in real time.</p>
                    <Link to={"About-Mindspire-Institute"} style={{textDecoration:'none'}} className='btn-side-by'>Learn More <FaArrowRight className='arrow-btn-side-by'/>
                       <div className='btn-design-in-side-by-one'></div>
                        <div className='btn-design-in-side-by-two'></div> 
                    </Link>
                </div>

                <div className='design-circle-one-box-one'></div>
                <div className='design-circle-two-box-one'></div>

            </div>
            <div className='side-by-two'>
                <div  className='side-by-two-img-tag'>
                     
                     {/* <Video 
                        urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                        src="/7192325-uhd_3840_2160_25fps.mp4"
                        autoPlay
                        muted 
                        loop
                        className='side-by-two-img'
                    /> */}
                </div>
                <div  className='side-by-two-cont-tag'>
                    <div className='side-by-two-main-para'>
                        <p  className='side-by-p-one'>Anytime Access to Our</p>
                        <p  className='side-by-p-two'>Recorded Session's</p>
                    </div>
                    <p className='side-by-sub-para'>All our sessions are recorded and available 24/7, so students can revisit lessons anytime at their own pace.</p>
                    <Link to={"Providing-Education's-in-Mindspire-Institute"} style={{textDecoration:'none'}} className='btn-side-by'>Get Access <FaArrowRight  className='arrow-btn-side-by'/>
                          <div className='btn-design-in-side-by-one'></div>
                        <div className='btn-design-in-side-by-two'></div> 
                    </Link>
                </div>

                 <div className='design-circle-two-box-one'></div>
                <div className='design-circle-two-box-two'></div>
            </div>
        </div>}
        
    </div>
  )
}

export default SideBy
