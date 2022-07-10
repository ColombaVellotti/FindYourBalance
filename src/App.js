import Home from './pages/Home/Home'
import Timer from './pages/Timer/Timer'
import ErrorPage from './pages/ErrorPage'

import   './pages/Timer/Timer.css'
import   './pages/Home/Home.css'

import { Route, Routes} from 'react-router-dom'

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
