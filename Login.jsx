import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors(validation(values));

    try {
      const response = await axios.post('http://localhost:3001/login', values);

      if (response.data.success) {
        console.log('Login successful:', response.data);
        navigate('/home');
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Email'
              id='email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter Password'
              id='password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
          <p>You agree to our terms and condition</p>
          <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
