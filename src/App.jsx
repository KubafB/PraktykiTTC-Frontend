import { useState } from 'react'
import FB from './assets/FB.png'
import IN from './assets/IN.png'
import YT from './assets/YT.png'
import IG from './assets/IG.png'
import user from './assets/user.png'
import './App.css'
import LightMode from './assets/Lightmode'
import {Select,MenuItem,Button, Autocomplete,Box ,Checkbox, Slide, Slider,TextField,TextareaAutosize, ThemeProvider, createTheme, Switch , CssBaseline , Typography, FormControlLabel } from '@mui/material';

function App() {

  const [reservationDate, setReservationDate] = useState("2025-03-29");
  const [reservationDates, setReservationDates] = useState({
    "2025-03-29": { reservationDate: "2025-03-29", desk: "A1" },
    "2025-04-04": { reservationDate: "2024-04-02", desk: "B2" },
    "2025-04-16": { reservationDate: "2024-04-03", desk: "C3" }
  });

  const handleChange = (e) => {
    setReservationDates({
      ...reservationDates,
      [reservationDate]: {
        ...reservationDates[reservationDate],
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <>
      <header id='header'>
      <div className='headtext' id='headtext'>User Panel</div>
    </header>
    <div className='Profile'>
      <img src={user}/>
      <p>Profile name</p>
    </div>
    <div className='UsrPanel'>
      Choose a reservation date <br />
      <div className='DateWindow'>
        <Select value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} style={{marginLeft:"32.5%",marginTop:"5%"}}>
          <MenuItem value="2025-03-29">2025-03-29</MenuItem>
          <MenuItem value="2025-04-04">2025-04-04</MenuItem>
          <MenuItem value="2025-04-16">2025-04-16</MenuItem>
        </Select>
      </div>
      <div className='panel'>
        <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)", marginLeft:"5%", alignContent:"center", alignItems:'center'}} label="Reservation date" name="reservationDate" type="date" value={reservationDates[reservationDate].reservationDate} onChange={handleChange} fullWidth margin="normal" />
        <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)", marginLeft:"5%"}} label="Seatplace" name="desk" value={reservationDates[reservationDate].desk} onChange={handleChange} fullWidth margin="normal" />
        <Button variant="contained" color="primary" style={{ backgroundColor: "#F86437", width:"45%",height:"6vmin",fontSize:"clamp(4px,1.5vw,14px)",margin:"8%",marginLeft:"25%"}}>Save Changes</Button>
      </div>  
    </div>
    <footer id='footer'>
      <div className='photos'><img src={FB}/><img src={IN}/><img src={YT}/><img src={IG}/></div>
      <div className='switch'>
        Change mode:
        <LightMode/>
      </div>
    </footer>
    </>
  )
}

export default App
