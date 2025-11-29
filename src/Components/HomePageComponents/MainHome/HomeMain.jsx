import '../../../Sass/HomePageSASS/MainHomeSASS/HomeMain.scss';
import CountUp from '../../CountAni';
import BlurText from '../../HomeTxt';

const HomeMain = () => {
  return (
    <div className='Home-Page-Main'>
        <div className="homepage-cont-side">
            <div className="title-content-holder">
                <div className="title-top-line"></div>
                <div className="title-para">
                    <p className='title-para-cont-home'>Private mental health <br />consultation from a <br /><BlurText text="Professional"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="text-2xl mb-8 span-in-home-title"
                        /></p>
                </div>
                <p className='title-sub-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reprehenderit mollitia rem sunt voluptatem repudiandae corrupti vitae explicabo praesentium repellat.</p>
                <div className="home-page-main-btn-container">
                    <div className="home-page-main-btn home-page-main-btn-one">
                        <p>Appointment</p>
                        <div className="btn-design-one"></div>
                    </div>
                    <div className="home-page-main-btn home-page-main-btn-two">
                        <p>Learn More</p>
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
                    <p className='analysis-cont-two'>Lorem ipsum dolor sit amet.</p>
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
                    <p className='analysis-cont-two'>Lorem ipsum dolor sit amet.</p>
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
                    <p className='analysis-cont-two'>Lorem ipsum dolor sit amet.</p>
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
      
    </div>
  )
}

export default HomeMain
