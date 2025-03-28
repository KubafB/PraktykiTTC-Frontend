import { useState } from 'react'
import FB from './assets/FB.png'
import IN from './assets/IN.png'
import YT from './assets/YT.png'
import IG from './assets/IG.png'
import user from './assets/user.png'
import './App.css'
import { Select,MenuItem,InputLabel,FormControl,TextField,Button } from '@mui/material'




function App() {

  const [selectedUser, setSelectedUser] = useState("user1");
  const [users, setUsers] = useState({
    user1: { name: "Jan", surname: "Kowalski", login: "jan123", password: "**", reservationDate: "2024-04-01", desk: "A1" },
    user2: { name: "Anna", surname: "Nowak", login: "anna456", password: "**", reservationDate: "2024-04-02", desk: "B2" },
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

  return (
    <>
      <header>
      <div className="headtext">
        Admin Panel
      </div>
    </header>
    <main>
   <div className="Profile">
    <img src={user}/>
    <p>Profile name</p>
   </div> 
   <center>
      <div className="AdmPanel">
        Choose a user <br />
        <div className='LogWindow'>
            <Select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
              <MenuItem value="user1">User 1</MenuItem>
              <MenuItem value="user2">User 2</MenuItem>
              <MenuItem value="user3">User 3</MenuItem>
            </Select>
            <div className="panel">
              <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)"}} label="Name" name="name" value={users[selectedUser].name} onChange={handleChange} fullWidth margin="normal" />
              <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)"}} label="Last name" name="surname" value={users[selectedUser].surname} onChange={handleChange} fullWidth margin="normal" />
              <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)"}} label="Login" name="login" value={users[selectedUser].login} onChange={handleChange} fullWidth margin="normal" />
              <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)"}} label="Password" name="password" type="password" value={users[selectedUser].password} onChange={handleChange} fullWidth margin="normal" />
              <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)"}} label="Reservation date" name="reservationDate" type="date" value={users[selectedUser].reservationDate} onChange={handleChange} fullWidth margin="normal" />
              <TextField style={{width:"90%",height:"9vmin",fontSize:"clamp(5px,2vw,15px)"}} label="Seatplace" name="desk" value={users[selectedUser].desk} onChange={handleChange} fullWidth margin="normal" />
              <Button variant="contained" color="primary" style={{ backgroundColor: "#F86437", width:"45%",height:"6vmin",fontSize:"clamp(2px,1vw,14px)",margin:"8%" }}>Save Changes</Button>
       </div>
       </div>
       </div>
       </center>
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

export default App
