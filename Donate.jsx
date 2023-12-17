import React, { useState } from 'react';
import { Form, Button,Card } from 'react-bootstrap';
import donationImage from '../src/images/Donate.jpg';

const Donate = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!data.fullname.trim()) {
      newErrors.fullname = 'Full name is required';
      isValid = false;
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!data.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3002/submitDonation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);

        setData({
          fullname: '',
          phone: '',
          email: '',
          msg: '',
          address: '',
        });

        // Uncheck the terms and conditions checkbox
        document.getElementById('formTerms').checked = false;

        alert('Donation submitted successfully!');
      } catch (error) {
        console.error('An error occurred during donation submission:', error);
        alert('An error occurred during donation submission. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Donate</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-3 col-4 mx-auto mb-4">
            <img src={donationImage} alt="Donation" className="img-fluid" />
          </div>
          <div className="col-md-6 col-10 mx-auto mb-4">
            <form onSubmit={formSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Full Name"
                />
                <Form.Text className="text-danger">{errors.fullname}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile No"
                  autoComplete="tel"
                />
                <Form.Text className="text-danger">{errors.phone}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={data.address}
                  onChange={InputEvent}
                  placeholder="Full Address"
                  autoComplete="street-address"
                />
                <Form.Text className="text-danger">{errors.address}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  autoComplete="email"
                />
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                />
                <Form.Text className="text-danger">{errors.msg}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formTerms" className="mb-3">
                <Form.Check type="checkbox" label="I agree to the Terms and Conditions" id="formTerms" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
         {/* Three Cards for Address, Email, and Phone Number */}
         <div>
          <h1>Contact Us</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <Card className="h-100 shadow" style={{ cursor: 'pointer', backgroundColor: '#f8d7da' }}>
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <p>Food Donation NGO,Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                <Card.Text>{data.address}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100 shadow" style={{ cursor: 'pointer', backgroundColor: '#d4edda' }}>
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <p>aditya.tile.8@gmail.com</p>
                <p>Shubhamrathee999@gmail.com</p>
                <p>csmirage0@gmail.com</p>
                <Card.Text>{data.email}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100 shadow" style={{ cursor: 'pointer', backgroundColor: '#cce5ff' }}>
              <Card.Body>
                <Card.Title>Phone Number</Card.Title>
                <p>+917038885087</p>
                <p>+918708404271</p>
                <p>+918421875721</p>
                <Card.Text>{data.phone}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
