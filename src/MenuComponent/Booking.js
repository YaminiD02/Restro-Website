import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Booking() {
  //const [name, setName] = useState('');
  //const [date, setDate] = useState('');
  //const [time, setTime] = useState('');
  //const [guests, setGuests] = useState('');

  /*const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and booking submission logic here
    if (name.trim() !== '' && date.trim() !== '' && time.trim() !== '' && guests.trim() !== '') {
      console.log('Table booking submitted:', {
        name,
        date,
        time,
        guests
      });

      // Reset the form fields
      setName('');
      setDate('');
      setTime('');
      setGuests('');
    }
  };
*/
  return (
    <section>
    <Container>
      <Row>
        <Col lg="8" className="m-auto">
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
             
            </div>

            <div className="login__form">
              <div className="user">
            
              </div>
              <h2>Login</h2>

              <Form>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    id="email"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    
                  />
                </FormGroup>

                <Button
                  className="btn secondary__btn auth__btn"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account? <Link to="/register">Create</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  );
}

export default Booking;
