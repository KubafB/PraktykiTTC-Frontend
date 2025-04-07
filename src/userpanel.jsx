import { useState } from 'react';
import FB from './assets/FB.png';
import IN from './assets/IN.png';
import YT from './assets/YT.png';
import IG from './assets/IG.png';
import user from './assets/user.png';
import LightMode from './Lightmode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './userpanel.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, BrowserRouter } from "react-router-dom";


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
      <Navbar bg="#F87D5F" variant="dark" id='header' className="justify-content-between py-4 ">
        <Link className='ms-3 text-decoration-none '  to="/reservation">Back</Link>
        <Navbar.Brand id='headtext' className="bg-#F86437 text-white p-3 rounded">User Panel</Navbar.Brand>
        <div></div>
      </Navbar>
      
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <div className="d-flex align-items-center justify-content-center text-white">
              <img src={user} alt="User" className="me-3" style={{ width: '50px', height: '50px' }} />
              <h4 id="Profile">Profile name</h4>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-3 mb-3">
          <Col xs={12} md={8} className="bg-light p-4 rounded">
            <h5 className="mb-3 text-center">Choose a reservation date</h5>
            <Form.Select style={{height:"6vmin"}} value={reservationDate} onChange={(e) => setReservationDate(e.target.value)}>
              <option value="2025-03-29">2025-03-29</option>
              <option value="2025-04-04">2025-04-04</option>
              <option value="2025-04-16">2025-04-16</option>
            </Form.Select>
            
            <div className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>Reservation date</Form.Label>
                <Form.Control type="date" name="reservationDate" value={reservationDates[reservationDate].reservationDate} onChange={handleChange} />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Seatplace</Form.Label>
                <Form.Control type="text" name="desk" value={reservationDates[reservationDate].desk} onChange={handleChange} />
              </Form.Group>
              
              <Button id='bt' className="btn w-100">Save Changes</Button>
            </div>
          </Col>
        </Row>
      </Container>
      
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
