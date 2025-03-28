import { useState } from 'react'
import FB from './assets/FB.png'
import IN from './assets/IN.png'
import YT from './assets/YT.png'
import IG from './assets/IG.png'
import './App.css'
import LightMode from './assets/LightMode.jsx'
import { Autocomplete,Box ,Checkbox, Slide, Slider,TextField,TextareaAutosize, ThemeProvider, createTheme, Switch , CssBaseline , Typography, FormControlLabel } from '@mui/material';

function App() {
  return (
    <>
    <header id='header'>
      <div className='headtext' id='headtext'>Lorem Ipsum</div>
    </header>
    <div className='signup'>
      <h1>Sign Up</h1>
      <form>
        Login*<br/>
        <input type="text" id='login' name='login' required maxLength={20}/><br/>
        First name*<br/>
        <input type="text" id='first_name' name='first_name' required maxLength={30}/><br/>
        Last name*<br/>
        <input type="text" id='last_name' name='last_name' required maxLength={30}/><br/>
        Password*<br/>
        <input type='password' id='password' name='password' required maxLength={30}/><br/>
        <div className='annotations'>Password should be at least 10 characters long including a <br/>number and lowercase letter<br/></div>
        Repeat password*<br/>
        <input type='password' id='repeat_password' name='repeat_password' required maxLength={30}/><br/>
        <div className='annotations'>* - field required</div>
        <button id='bt'>Sign Up</button>
      </form>
    </div>
    <footer id='footer'><div className='photos'><img src={FB}/><img src={IN}/><img src={YT}/><img src={IG}/></div>
      <div className='switch'>
        Change mode:
        <LightMode/>
      </div>
    </footer>
    </>
  )
}

export default App
