import { useState,useRef,useEffect } from 'react'
import FB from './assets/FB.png'
import IN from './assets/IN.png'
import YT from './assets/YT.png'
import IG from './assets/IG.png'
import user from './assets/user.png'
import './adminpanel.css'
import LightMode from './Lightmode'
import { Select,MenuItem,InputLabel,FormControl,TextField,Button, Autocomplete,Box ,Checkbox, Slide, Slider,TextareaAutosize, ThemeProvider, createTheme, Switch , CssBaseline , Typography, FormControlLabel } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import column from "./assets/column.png"
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, mobileOS, valueFormatter } from './assets/webUsageStats';
import edit from './assets/edit.png'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, BrowserRouter } from "react-router-dom";


function App() {
  const [selectedUser, setSelectedUser] = useState("user1");
  const [users, setUsers] = useState({
    user1: { name: "Jan", surname: "Kowalski", login: "jan123", password: "", reservationDate: "2024-04-01", desk: "A1" },
    user2: { name: "Anna", surname: "Nowak", login: "anna456", password: "", reservationDate: "2024-04-02", desk: "B2" },
    user3: { name: "Piotr", surname: "Zieliński", login: "piotr789", password: "**", reservationDate: "2024-04-03", desk: "C3" }
  });

  const handleChange = (e) => {
    setUsers({
      ...users,
      [selectedUser]: {
        ...users[selectedUser],
        [e.target.name]: e.target.value
      }
    });
  };
  
   const imageRef = useRef(null)
     const popupRef = useRef(null)
     const closeButtonRef = useRef(null)
  
    useEffect(() => {
      const image = imageRef.current;
      const popup = popupRef.current;
      const closeButton = closeButtonRef.current;
      const showPopup = () => {
        popup.style.display = "block"
      }
      const hidePopup = () => {
        popup.style.display = "none"
      }
      image.addEventListener("click", showPopup)
      closeButton.addEventListener("click", hidePopup)
    }, 
  )

  return (
    <>
      <header id='header' >
        <Link to="/PraktykiTTC-Frontend">Back</Link>
        <h1 id='headtext' className='headtext'>Admin Panel</h1>
        <img src={column} alt="graph" id='graph'ref={imageRef} className="graph"style={{cursor: "pointer"}}/>
      </header>
      <main className=" d-block container mt-4">
         <div id='popup' class="popup" style={{display:"none"}} ref={popupRef}>
              <div class="days">
                <p>Days</p>
                <PieChart class="chart"
                  series={[
                    {
                      data: desktopOS,
                      highlightScope: { fade: 'global', highlight: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      valueFormatter,
                    },
                  ]}
                  height={200}
                />
              </div>
              <div class="week">
                <p>Week</p>
                <PieChart class="chart"
                  series={[
                    {
                      data: mobileOS,
                      highlightScope: { fade: 'global', highlight: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      valueFormatter,
                    },
                  ]}
                    height={200}
                />
              </div>
                <button class="closePopup" ref={closeButtonRef} >Close</button>  
            </div>  
        <div className="d-flex justify-content-center mb-4">
          <img src={user} className="rounded-circle me-3" width="60" height="60" alt="User" />
          <h2 id='Profile'>Profile name</h2>
          <img  src={edit} className="rounded-circle me-3 mb-3 ms-1" width="20" height="20" alt="edit" />
        </div> 
        <div className="card p-4 mb-4" style={{ backgroundColor: '#D9D9D9' }}>
          <h4 className="text-center">Choose a user</h4>
          <div className="text-center mb-3">
            <FormControl>
              <InputLabel>User</InputLabel>
              <Select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                <MenuItem value="user1">User 1</MenuItem>
                <MenuItem value="user2">User 2</MenuItem>
                <MenuItem value="user3">User 3</MenuItem>
              </Select>
            </FormControl>
            </div>
          <div className="row g-3">
            {Object.keys(users[selectedUser]).map((key) => (
              <div className="col-md-6" key={key}>
                <TextField
                  fullWidth
                  label={key.replace(/([A-Z])/g, ' $1')}
                  name={key}
                  type={key === 'password' ? 'password' : key === 'reservationDate' ? 'date' : 'text'}
                  value={users[selectedUser][key]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button id='bt' variant="contained" style={{ backgroundColor: '#F86437', color: 'white' }}>Save Changes</Button>
          </div>
        </div>
      </main>
      <footer id='footer' className="bg-#484848 text-white text-center py-3 position-relative  bottom-0">
        <div className="d-flex justify-content-center  gap-3 m-3">
          <img src={FB}  alt="FB" />
          <img src={IN}  alt="IN" />
          <img src={YT}  alt="YT" />
          <img src={IG}  alt="IG" />
        </div>
        <div>
          Change mode: <LightMode />
        </div>
      </footer>
    </>
  );
}

export default App;