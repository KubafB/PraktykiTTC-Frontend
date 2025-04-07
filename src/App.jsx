import { useState } from 'react'
import FB from './assets/FB.png'
import IN from './assets/IN.png'
import YT from './assets/YT.png'
import IG from './assets/IG.png'
import './App.css'
import LightMode from './assets/Lightmode'
import { Autocomplete, Checkbox, Slide, Slider,TextField,TextareaAutosize } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, BrowserRouter } from "react-router-dom";
import UserPanel from './userpanel'
import Reservation from './reservation'
import Register from './register'
import AdminPanel from './adminpanel'






function Home() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const [error, setError] = useState(null);

  const handleLogin = () => {
    if (login === 'admin' && password === 'admin') {
      navigate('/adminpanel'); 
    } else {
      navigate('/reservation'); 
    }
  };

  const handleLogin2 = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        navigate('/userpanel');
      }
      else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };


  
  

  return (
    <>
    <header className='header' id='header'>
      <div id='headtext' className="headtext">
        Seat  place
      </div>
    </header>
    <main>
       <div className="logpass">
        <div className="in">
         <div className='text'>Login:</div> <input value={login} maxLength={20} type='text' placeholder='Max number of characters 20 '
         onChange={(e) => setLogin(e.target.value)}
         /> <br /> <br />
         <div className='pass'>Password:</div>  <input value={password} maxLength={30}  type='password' placeholder='Max number of characters 30' 
          onChange={(e) => setPassword(e.target.value)}
         /> <br />
                  {error && <p style={{ color: 'red',fontSize:'clamp(5px,1vw,15px)',lineHeight:'1px' }}>{error}</p>}
         </div>
         <div className="bt">
         <Link to='/register'>If you don't have an account click here</Link>
         <button onClick={handleLogin}  id='bt'>Next</button>
         </div>
       </div>
       
    </main>



    <footer id='footer' className="bg-#484848 text-white text-center py-3 position-absolute bottom-0">
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

function App() {
  return(
    
      
      <Routes>
       <Route path="PraktykiTTC-Frontend/" element={<Home />} />
       <Route path="reservation" element={<Reservation />} />
      <Route path='register' element={<Register />} /> 
      <Route path="userpanel" element={<UserPanel />} />       
      <Route path="adminpanel" element={<AdminPanel />} />       

      </Routes>
     
    
  );
}

export default App;
