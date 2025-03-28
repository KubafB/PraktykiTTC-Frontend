import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Checkbox,TextField,Stack, colors} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs'
import { DateCalendar, MultiSectionDigitalClock } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import Button from '@mui/material/Button'
import IG from './assets/images/IG.png'
import FB from './assets/images/FB.png'
import IN from './assets/images/IN.png'
import YT from './assets/images/YT.png'
import LightMode from './assets/Lightmode'

function App() {
  const shouldDisableTime = (value, view) => {
    const hour = value.hour();
    if (view === 'hours') {
      return hour < 8 || hour > 12;
    }
    if (view === 'minutes') {
      const minute = value.minute();
      return minute > 20 && hour === 13;
    }
    return false;
  };
  const[colorsTable, setColorsTable] = useState(Array(16).fill("white"));
  const ChangeColorButton = (index) => {
    setColorsTable(prevColors => prevColors.map((color, i) => i=== index ? (color === "white" ? "grey" : "white") : color));
  }
  const [color, setColor] = useState(true)
  const ChangeColor = () => {
    setColor(!color);
  }
  return (
      <>
      <header class="header" id='header'>
      <div className="headtext" id="headtext">Lorem Ipsum</div>
      <button class="profil" onClick={function(){}}><a href='#'>Profil</a></button>
    </header>
    <div class="div1">
    <div className='choose'>
      <p>1. Choose date</p>
      <div className='calendar'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar className='DateCalendar' defaultValue={dayjs} style={{width:"80%",height:"auto",border:"0.5vw ", fontSize:"2vw", padding:"clamp",  maxWidth:  "clamp(75px, 40vw, 500px)",maxHeight: "clamp(320px, 40vw, 320px)",}}/>
        </LocalizationProvider>
      </div>
    </div>
    <div className='choose'>
       <p>2. Choose time </p><br />
      <div className='time'>  
      <Button  class={color ? "colorbutton" : "colorbutton2"} onClick={ChangeColor} >AM</Button> 
      <Button class={color ? "colorbutton2" : "colorbutton"} onClick={ChangeColor}>PM</Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='clock'>
          <MultiSectionDigitalClock className='MultiSectionDigitalClock'
            timeSteps={{minutes:15}}
            skipDisabled
            shouldDisableTime={shouldDisableTime}
            ampm={false}
          />
        </div>
      </LocalizationProvider>
    </div> <br />
    <Button ariant="contained" className="finish" id='bt' onClick={function(){}} style={{backgroundColor: "#F86437",border: "solid,#F86437",borderRadius: "19px", position: "relative", minWidth:"100px",maxWidth: " clamp(100px, 40vw, 400px)", color: "white" ,height:"50px",width:"10vmin"}}>finish</Button>
    </div>
    <div className='choose'>
    <p>Choose table</p>
    <div className='table'> 
      {colorsTable.map((color, index)=> (
        <button key={index} 
        className="tables"
         style={{backgroundColor: color, fontSize:"2vw",maxWidth: "clamp(40px, 4vw,150px)",border: "0.3vw solid color(grey)",height: "10%",width: "20%",borderRadius: "19px",marginBottom: "1%",marginLeft: "2%",marginTop: "1%",flex:"1",margin:"5px",flexWrap:'wrap',gap:"10px" }}
          onClick={() => ChangeColorButton(index)}> 
            {index+1}
            </button>
      ))}
    </div>
    </div>
    </div>
    <footer className='footer'id="footer">
      <div className='photos'>
        <img src={FB}/>
        <img src={IN}/>
        <img src={YT}/>
        <img src={IG}/>
      </div>
      <div className="switch"style={{marginLeft:"80%",marginRight: "1%",width:"clamp(500px, 40vw, 500px)",fontSize:"clamp(8px,2vw,16px"}}>
          Change mode:
          <LightMode/>
      </div>
      </footer>
    </>
  )
}

export default App ;
