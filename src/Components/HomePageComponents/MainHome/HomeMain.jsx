import { useRef,useEffect } from 'react';
import '../../../Sass/HomePageSASS/MainHomeSASS/HomeMain.scss';
import CountUp from '../../CountAni';
import BlurText from '../../HomeTxt';

const HomeMain = ({hreffunc,hrefhomefunc}) => {
   /*  let imageref=useRef(null)
   let imageslider = () => {
    let img_arr = ["/heart-2.png", "/heart.png"];
    let index = 0;

            setInterval(() => {
                console.log(img_arr[index]); 
                imageref.current.src=`${img_arr[index]}`
                index++;

                if (index >= img_arr.length) {
                    index = 0;
                }
            }, 3000); 
        };

            imageslider();
 */

    
    
    
    
  return (
    <div className='Home-Page-Main'>
        <div className="homepage-cont-side">
            <div className="title-content-holder">
                <div className="title-top-line"></div>
                <div className="title-para">
                    <p className='title-para-cont-home'>Your Digital Space to <br />Heal and Connect with<br /><BlurText text="Professional"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="text-2xl mb-8 span-in-home-title"
                        /></p>
                </div>
                <p className='title-sub-para'>Digital platform that aims to bring back the power of talking, sharing, and healing. It is a space where people can connect with professional psychiatrists, counselors, and therapists in a safe, non-judgmental environment.</p>
                <div className="home-page-main-btn-container">
                    <div className="home-page-main-btn home-page-main-btn-one">
                        <p onClick={()=>hreffunc("Programs")}>Appointment</p>
                        <div className="btn-design-one"></div>
                    </div>
                    <div className="home-page-main-btn home-page-main-btn-two">
                        <p onClick={()=>hreffunc("About")}>Learn More</p>
                        <div className="btn-design-two"></div>
                    </div>
                </div>
            </div>
            <div className="home-page-analysis-bar">
                <div className="analysis-container">
                    
                    <p className='analysis-cont-one'><CountUp
                    from={0}
                    to={140}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"/>+</p>
                    <p className='analysis-line'></p>
                    <p className='analysis-cont-two'>Total Registered People with us.</p>
                </div>
                <div className="analysis-container">
                    <p className='analysis-cont-one'><CountUp
                    from={0}
                    to={50}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"/>+</p>
                    <p className='analysis-line'></p>
                    <p className='analysis-cont-two'>Our Professional Psychiatrist</p>
                </div>
                <div className="analysis-container">
                    <p className='analysis-cont-one'><CountUp
                    from={0}
                    to={30}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"/>+</p>
                    <p className='analysis-line'></p>
                    <p className='analysis-cont-two'>Our Center All Over Tamil Nadu</p>
                </div>
            </div>
        </div>
        <div className="homepage-image-side">
            <div className='image-container-in-home-main'>
                <img src="./HomePage/man-with-psychologist-in-the-office-62XB78R11.jpg" alt="" className='img-in-main-home-page'/>
                <div className="disign-box-home-main-one"></div>
                <div className="disign-box-home-main-two"></div>
            </div>
            
        </div>
        {/* <img ref={imageref}   alt="" className='mobile-view-bg'/> */}
      
    </div>
  )
}

export default HomeMain
