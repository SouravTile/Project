import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Donate from '../src/Donate';
import FoodDonors from './FoodDonors';
import Login from './Login';
import Volunteers from './Volunteers';
import Signup from './Signup';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foodDonors" element={<FoodDonors />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
