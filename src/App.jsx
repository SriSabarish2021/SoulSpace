import Nav from './Components/NavBar/Nav'

import './App.scss'
import HomeMain from './Components/HomePageComponents/MainHome/HomeMain'

function App() {

  return (
    <div className='website-main-container'>
      <Nav></Nav>
      <HomeMain/>
    </div>
  )
}

export default App
