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
      <Programs/>
      <Qualification/>
      <Subcription/>
      <SideBy/>
      <GetinTouch/>
      
    </>
  )
}

export default HomepageAll
