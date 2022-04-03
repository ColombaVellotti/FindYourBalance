import Home from './pages/Home'
import Timer from './pages/Timer'
import ErrorPage from './pages/ErrorPage'

import   './css/Timer.css'
import   './css/Home.css'

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
