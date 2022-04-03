import Home from './pages/Home'
import Timer from './pages/Timer'
import ErrorPage from './pages/ErrorPage'

import   './css/Timer.css'
import   './css/Home.css'

import { Route, Routes} from 'react-router-dom'


import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

function App() {
  return (
    <>
       <Routes>
           <Route exact path="/"  element={ <Home />}/>
             <Route path="/timer" element={ <Timer /> }/>
             <Route path="*" element={ <ErrorPage /> }/>  
       </Routes>
    </>
  );
}

export default App;
