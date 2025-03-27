import { useState } from 'react'
import FB from './assets/FB.png'
import IN from './assets/IN.png'
import YT from './assets/YT.png'
import IG from './assets/IG.png'
import './App.css'
import { Autocomplete, Checkbox, Slide, Slider,TextField,TextareaAutosize } from '@mui/material';




function App() {
  

  return (
    <>
    <header>
      <div className="headtext">
        Seat  place
      </div>
    </header>

    <main>
       <div className="logpass">
        <div className="in">
         <div className='text'>Login:</div> <input maxLength={20} type='text' placeholder='Max number of characters 20 ' /> <br /> <br />
         <div className='pass'>Password:</div>  <input maxLength={30}  type='password' placeholder='Max number of characters 30' /> <br />
         </div>
         <div className="bt">
         <a href="#">If you don't have an account click here</a>
         <button>Next</button>
         </div>
       </div>
    </main>

    <footer>
    <div className="photos">
        <img src={FB}/>
        <img src={IN}/>
        <img src={YT}/>
        <img src={IG}/>
      </div>
    </footer>
     
    </>
  );
};

export default App;
