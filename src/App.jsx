import Nav from './Components/NavBar/Nav'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import HomepageAll from './Components/WebsiteComponents/HomepageAll'

function App() {

  return (
    <div className='website-main-container'>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path='/'>
          <Route index element={<HomepageAll/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
