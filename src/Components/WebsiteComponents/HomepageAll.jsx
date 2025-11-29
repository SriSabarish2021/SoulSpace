import Blog from '../HomePageComponents/BlogPage/Blog.jsx';
import ScrollVelocity from '../HomePageComponents/Curve-Mover.jsx';
import Footer from '../HomePageComponents/Footer/Footer.jsx';
import GetinTouch from '../HomePageComponents/GetinTouch/GetinTouch.jsx';
import HomeMain from '../HomePageComponents/MainHome/HomeMain.jsx';
import Programs from '../HomePageComponents/Programs/Programs.jsx';
import Qualification from '../HomePageComponents/Qualification/Qualification';
import SideBy from '../HomePageComponents/SideBy/SideBy.jsx';
import Subcription from '../HomePageComponents/Subscription/Subcription.jsx';

const HomepageAll = () => {
  return (
    <>
      <HomeMain/>
      <ScrollVelocity texts={['React Bits React Bits React Bits', 'Scroll Down Scroll Down Scroll Down']} 
        velocity={100} 
        className="custom-scroll-text"/>
      <Programs/>
      <Qualification/>
      <Subcription/>
      <SideBy/>
      <GetinTouch/>
      <Blog/>
      <Footer/>
      
    </>
  )
}

export default HomepageAll
