import React from 'react';
import './Styles.css';

const Home = () => {
    return (
      <>
      <div className="first-container-home">
          <div className="second-container-home" alt="Picture of home">
              <div className="navbar">
                  <div className="navelement1">
                      <p className="navtitle">SMOOTHIVERSE</p>
                  </div>
                  <div className="navelement2">
                      <p className="navtext">Home</p>
                      <p className="navtext">Add Smoothie</p>
                      <p className="navtext">View All</p>
                      <p className="navtext">Sign Up</p>
                      <p className="navtext">Log In</p>
                  </div>
              </div>
              <div>
                  <p className="welcometext">
                  Smoothies have gained fame over the past years for a host of health benefits with the added bonus of being tasty!  And with the internet allowing the exchange of information at wildfire-pace, this app makes use of people’s passion for smoothies! It allows the users to view smoothie recipes from their favourite categories and post comments on what they think of them. It also allows users to post their recipes, so that others can try
                  them and enjoy its goodness! We call this app “Smoothiverse” because we feel it offers the universe of smoothies in terms of variety.
                  </p>
              </div>
          </div>
          <p className="container-footer">
          &copy; Copyright Smoothiverse 2020
          </p>
      </div>
      </>
    )
  }

  export default Home
