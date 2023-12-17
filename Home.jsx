import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import homeImage1 from "../src/images1/Home1.jpg";
import myVideo from "../src/images1/WasteNoFood.mp4";

import Home10 from "../src/images1/Home10.jpeg";
import homeImage2 from "../src/images1/Home3.png";
import homeImage4 from "../src/images1/Home4.png";
import homeImage5 from "../src/images1/Home5.png";
import Home6 from "../src/images1/Home6.png";
import Home7 from "../src/images1/Home7.png";
import Home8 from "../src/images1/Home8.png";
import Home9 from "../src/images1/Home9.jpeg";

import testimonialBackground from "../src/images/Testimonial.png";
import "./App.css";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div
          className="container-fluid nav_bg mb-4"
          style={{ overflowX: "hidden" }}
        >
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row align-items-center">
                {/* Image column on the left for medium and larger screens */}
                <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center mt-3">
                  <img
                    src={homeImage1}
                    className="img-fluid animated mx-auto"
                    alt="Home1.jpg"
                  />
                </div>

                {/* adding video */}

                <div className="v-c">
                  <video
                    className="video"
                    width="100%"
                    height="360"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src={myVideo} type="video/mp4" />
                  </video>
                </div>

                <div className="text-overlay">
                  <h1>
                    {" "}
                    Donate Your Food with <br></br>
                    <strong style={{ color: "#3498db" }}> FoodDonors</strong>
                  </h1>
                  <h2 className="my-3">Feed Poor Child</h2>
                  <h6>
                    We are a non-profit enabling the exchange of <br></br>{" "}
                    excess food from the food industry to those who need it
                    most.
                  </h6>
                </div>

                {/* Text column on the right for medium and larger screens */}
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {" "}
                    Donate Your Food with{" "}
                    <strong style={{ color: "#3498db" }}> FoodDonors</strong>
                  </h1>
                  <h2 className="my-3">Feed Poor Child</h2>
                  <div className="mt-3">
                    <NavLink to="/Donate">
                    <Button variant="primary" size="lg" style={{ padding: '10px 40px', fontSize: '25px' }}>
                      Donate
                    </Button>

                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section for "How It Works" */}
      <section id="how-it-works" className="d-flex align-items-center">
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-10 mx-auto"></div>
          </div>
        </div>
      </section>
      {/* New section for "How It Works" */}

      {/**combined 3 pics */}
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "#3498db",
          textShadow: "2px 2px 4px #888",
        }}
      >
        How It Works
      </h1>

      <div className="cont">
        <div className="im">
          <img src={homeImage2} className="any" alt="Home2.png" />
          <div className="te">
            <p>
              <h1>Food Is Donated</h1>
            </p>
            <p>
              Farms, restaurants, cafeterias, hotels, stadiums, and grocery
              stores post excess food in under a minute on the Waste No Food
              app.
            </p>
          </div>
        </div>
        <div className="im">
          <img src={homeImage4} className="any" alt="Home4.png" />
          <div className="te">
            <p>
              <h1>Food Is Secured</h1>
            </p>
            <p>
              Pre-vetted charities immediately get notified about food donations
              and can claim any donations they can use to serve hungry clients.
            </p>
          </div>
        </div>
        <div className="im">
          <img
            src={homeImage5}
            className="any"
            style={{ height: "360px" }}
            alt="Home5.png"
          />
          <div className="te">
            <p>
              <h1>Food Is Picked Up</h1>
            </p>
            <p>
              The charitable organization, supported by a dedicated network of
              volunteers, gathers surplus food and compassionately serves it to
              alleviate hunger in society
            </p>
          </div>
        </div>
      </div>
      <br />

      <section className="d-flex align-items-center">
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="text-center">
                {/* Image 1 */}
                <img
                  src={Home9}
                  className="img-fluid animated"
                  alt="Home9.jpeg"
                />
                {/* Image 2 */}
                <img
                  src={Home10}
                  className="img-fluid animated mr-3"
                  alt="Home10.jpeg"
                  width="1200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section for "Latest News and Highlights" */}
      <section id="latest-news" className="d-flex align-items-center">
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="text-center">
                <h1 style={{ fontSize: "2.5em" }}>
                  <br />
                  Latest News and Highlights
                </h1>
              </div>
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mt-4">
                  <Card>
                    <Card.Img variant="top" src={Home6} />
                    <Card.Body>
                      <Card.Title>
                        Hunger Network, Pasco County Partner To Prevent Food
                        Waste
                      </Card.Title>
                      <Card.Text>
                        Tampa Bay Network to End Hunger is expanding its
                        Creating a Regenerative Community Food System program
                        into Pasco County.
                      </Card.Text>
                      <a
                        href="https://www.brecorder.com/news/40277403"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mt-4">
                  <Card>
                    <Card.Img variant="top" src={Home7} />
                    <Card.Body>
                      <Card.Title>
                        Empowering Communities: The Rise of Food Donation
                        Initiatives in India
                      </Card.Title>
                      <Card.Text>
                        Amidst the diverse flavors of India, a heartwarming
                        trend emerges – a surge in food donation initiatives.
                        From bustling cities to rural landscapes.......
                      </Card.Text>
                      <a
                        href="https://telanganatoday.com/nirmal-food-bank-feeds-nearly-one-lakh-persons-in-8-years"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mt-4">
                  <Card>
                    <Card.Img variant="top" src={Home8} />
                    <Card.Body>
                      <Card.Title>
                        USA: "Nourishing Hearts Across the Nation: Food Donation
                        Initiatives Thrive"
                      </Card.Title>
                      <Card.Text>
                        Join the movement as communities in the United States
                        come together to address hunger through impactful food
                        ...
                      </Card.Text>
                      <a
                        href="https://news.harvard.edu/gazette/story/2021/08/how-food-donations-can-help-fight-hunger-and-climate-change/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New section for "Customer Reviews/Testimonials" */}
      {/* New section for "Customer Reviews/Testimonials" with background image */}
      <div className="text-center">
        <br />
        <h1 style={{ fontSize: "2.5em" }}>Customer Reviews</h1>
      </div>
      <section
        id="customer-reviews"
        className="d-flex align-items-center"
        style={{
          backgroundImage: `url(${testimonialBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff", // text color on top of the background image
        }}
      >
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mt-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>Elon Musk</Card.Title>
                      <Card.Text>
                        "I had a wonderful experience using FoodDonors. The
                        process was smooth, and it feels great to contribute to
                        those in need."
                      </Card.Text>
                      {/* Add any additional information or buttons as needed */}
                    </Card.Body>
                  </Card>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mt-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>Mark Zukerberg</Card.Title>
                      <Card.Text>
                        "FoodDonors is a fantastic platform that makes it easy
                        for businesses to donate excess food. Highly
                        recommended!"
                      </Card.Text>
                      {/* Add any additional information or buttons as needed */}
                    </Card.Body>
                  </Card>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mt-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>Bill Gates</Card.Title>
                      <Card.Text>
                        "The impact of FoodDonors is incredible. It's
                        heartwarming to know that my contributions are helping
                        those in need."
                      </Card.Text>
                      {/* Add any additional information or buttons as needed */}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
