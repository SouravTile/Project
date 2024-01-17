import React from 'react';
import { Card } from 'react-bootstrap';
import foodDonorsImage from '../src/images/A1.png';
import Aditya from "../src/images/Aditya.jpg";
import Chaitanya from "../src/images/Chaitanya.jpg";
import Shubham from "../src/images/Shubham.jpg";
const About = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <img src={foodDonorsImage} alt="Food Donors" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover',marginTop:"50px" }} />
      <h2 style={{ fontSize: '4em', marginTop: '20px' }}>Diverting Excess Food to Hungry People</h2>
      <br />
      <p style={{ fontSize: '2em' }}>
        Waste No Food empowers groups with perishable resources to donate to charities serving the needy. We help cut waste and build resilient and flourishing communities.
      </p>
      <br />
      <h1 style={{ fontSize: '4em', marginTop: '20px' }}>Our Founders</h1>
      <br />
      {/* End of cards */}
      <p style={{ fontSize: '2em' }}>
        Waste No Food was founded in 2011 to divert excess food to hungry people. Since then, it has provided millions of meals to the hungry and has initiated partnerships with the City of San Jose, San Francisco Airport, the Tampa Bay Network to End Hunger, and the University of Illinois.
      </p>
      <p style={{ fontSize: '2em' }}>
      Aditya Tile, a dedicated student at CDAC Mumbai, has made an invaluable contribution to this website through his exceptional skills and commitment. His passion for learning and innovative approach to problem-solving have significantly enriched the platform, leaving a lasting impact on its development.      </p>
      <p style={{ fontSize: '2em' }}>
      Chaitanya Mirage, a dedicated student at CDAC Mumbai, has played a pivotal role in shaping certain aspects of this website through his valuable contributions. His commitment to excellence and enthusiasm for web development have left a positive imprint on the platform.       </p>
      <p style={{ fontSize: '2em' }}>
      Shubham Rathee, a student at CDAC Mumbai, has made noteworthy contributions to this website.Shubham Rathee's input has undoubtedly played a positive role in the development and improvement of this website. </p>

      {/* Cards at the end */}
      <div className="row text-center d-flex justify-content-center">
  <div className="col-md-3 mt-4">
    <Card>
      <Card.Img variant="top" src={Aditya} />
      <Card.Body>
        <Card.Title>Aditya Tile</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-3 mt-4">
    <Card>
      <Card.Img variant="top" src={Shubham} />
      <Card.Body>
        <Card.Title>Shubham Rathee</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-3 mt-4 ">
    <Card>
      <Card.Img variant="top" src={Chaitanya} />
      <Card.Body>
        <Card.Title>Chaitanya Mirage</Card.Title>
      </Card.Body>
    </Card>
  </div>
</div>
    </div>
  );
};

export default About;
