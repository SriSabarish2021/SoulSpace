import Blog from '../HomePageComponents/BlogPage/Blog.jsx';
import 
  ScrollVelocity
from  '../HomePageComponents/Curve-Mover.jsx';
import GetinTouch from '../HomePageComponents/GetinTouch/GetinTouch.jsx';
import HomeMain from '../HomePageComponents/MainHome/HomeMain.jsx';
import Programs from '../HomePageComponents/Programs/Programs.jsx';
import Qualification from '../HomePageComponents/Qualification/Qualification';
import SideBy from '../HomePageComponents/SideBy/SideBy.jsx';
import Subcription from '../HomePageComponents/Subscription/Subcription.jsx';

const HomepageAll = ({hreffunc,hrefhomefunc,openwritereview,data,successsubmit}) => {
  

  return (
    <>
      <HomeMain hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/>
      <ScrollVelocity texts={['Digital Space Where Every Soul Heals And Grows', 'Connect Minds And Hearts Through Care And Comfort']}  
      velocity={100} 
      className="custom-scroll-text"/>
      <Programs openwritereview={openwritereview} data={data} hreffunc={hreffunc} hrefhomefunc={hrefhomefunc}/>
      <Qualification hreffunc={hreffunc}/>
      <Subcription openwritereview={openwritereview}/>
      <SideBy hreffunc={hreffunc}/> 
      <GetinTouch successsubmit={successsubmit}/>
      <Blog/>

    </>
  )
}

export default HomepageAll
