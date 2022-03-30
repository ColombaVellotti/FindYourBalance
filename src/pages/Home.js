import {useNavigate } from 'react-router-dom'

export default function Home() {
   
  let navigate = useNavigate()
      
    return (
         <>
        
        
        
        <div  className="main-content">

         <div className="container">
          
           <h1>It's your recharge time</h1>
           <h3> With <b>Find Your Balance</b> you can focus on yourself, even for just a minute</h3>
           
           <p> Set the timer, close your eyes and listen to your breath</p>

           <div  className="btn-collector">

             <button onClick={ () => { navigate( "/timer" ) } } className="btn btn-primary">
             Find Your Balance now
             </button>    

           </div>

         </div>
       
        </div>

        <div className="intro" >

          <div className="container container-intro"> 
          <h3 className="top-text">Find your balance</h3>
          </div>

        </div>

      </>
   
    )
}