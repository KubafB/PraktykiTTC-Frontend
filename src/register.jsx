import { useState } from 'react';
import FB from './assets/FB.png';
import IN from './assets/IN.png';
import YT from './assets/YT.png';
import IG from './assets/IG.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import LightMode from './assets/Lightmode';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  const BackClick = () => {
    navigate("/PraktykiTTC-Frontend");
  }

  const [formData, setFormData] = useState({
    login: '',
    first_name: '',
    last_name: '',
    password: '',
    repeat_password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { password, repeat_password, login, first_name, last_name } = formData;
    
    const isValidPassword = (pw) =>
      pw.length >= 10 &&
      /[0-9]/.test(pw) &&
      /[a-z]/.test(pw);
  
    if (password !== repeat_password) {
      setMessage("Passwords do not match.");
      setMessageType('error');
      return;
    }
  
    if (!isValidPassword(password)) {
      setMessage("Password should be at least 10 characters long and include a number and a lowercase letter.");
      setMessageType('error');
      return;
    }
  
    const userData = {
      username: login,
      password,
      password_confirm: repeat_password,
      first_name,
      last_name,
    };
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage("Registration successful!");
        setMessageType('success');
        setFormData({
          login: '',
          first_name: '',
          last_name: '',
          password: '',
          repeat_password: ''
        });

        // Dodanie przekierowania na stronę po udanej rejestracji
        navigate('/PraktykiTTC-Frontend');
      } else {
        const errorData = await response.json();
        const errors = Object.values(errorData).flat().join(', ');
        setMessage("Connection error: " + errors);
        setMessageType('error');
      }
    } catch (error) {
      console.error('Connection error:', error);
      setMessage("Couldn't connect to the server. Try again");
      setMessageType('error');
    }
  };
  return (
    <>
      <header id='header' className='header'>
        <div className='headtext' id='headtext'>Seat Place</div>
      </header>

      <div className='d-flex justify-content-center align-items-center vh-70'>
        <div className='signup'>
          <h1>Sign Up</h1>
          <Form id='signup' onSubmit={handleSubmit}>
            <Form.Group controlId='login'>
              <Form.Label>Login*</Form.Label>
              <Form.Control type='text' required maxLength={20} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId='first_name'>
              <Form.Label>First name*</Form.Label>
              <Form.Control type='text' required maxLength={30} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId='last_name'>
              <Form.Label>Last name*</Form.Label>
              <Form.Control type='text' required maxLength={30} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password*</Form.Label>
              <Form.Control type='password' required maxLength={30} onChange={handleChange} />
              <div className='annotations'>
                Password should be at least 10 characters long including a number and lowercase letter
              </div>
            </Form.Group>

            <Form.Group controlId='repeat_password'>
              <Form.Label>Repeat password*</Form.Label>
              <Form.Control type='password' required maxLength={30} onChange={handleChange} />
            </Form.Group>

            <div className='annotations'>* - field required</div>

            <Button  id='bt' className='signup-btn' type='submit'>Sign Up</Button>
            {message && (
              <div className={`mt-3 ${messageType === 'success' ? 'text-success' : 'text-danger'}`}>
                {message}
              </div>
            )}
          </Form>
        </div>
      </div>

      <footer id='footer' className="bg-#484848 text-white text-center position-relative py-3 mt-5">
        <div className="d-flex justify-content-center  gap-3 m-3">
          <img src={FB} alt="FB" />
          <img src={IN} alt="IN" />
          <img src={YT} alt="YT" />
          <img src={IG} alt="IG" />
        </div>
        <div>
          Change mode: <LightMode />
        </div>
      </footer>
    </>
  );
}

export default App;
