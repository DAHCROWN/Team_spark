import React from "react";
import Header from "../../Components/Header/header.components";
import "./second-lodge.styles.scss";
import mapIcon from "../../assets/google map.jpg";
import { Link } from "react-router-dom";
import frontLogo from "../../assets/Green Lodge.png";
import payStack from "../../assets/paystack.jpeg";
function Second() {
  return (
    <div className="second">
      <Header />
      <div className="second-top">
        <img src={frontLogo} alt="" />
      </div>
      <div className="description">
        <div className="description-first-item">
          <div className="number-remaining">
            <h1>Available Room</h1>
            <p>6 bedrooms</p>
          </div>
          <div className="features">
            <h1>Features</h1>
            <h4>
              Brand new
              <br />
              Secured environment
              <br />
              Spacious compound
              <br />
              24hrs security
              <br />
              Standby generator
              <br />
              Private transformer
            </h4>
          </div>
        </div>

        <img src={payStack} alt="" />
      </div>
      <div className="sub-description">
        <div className="description-right-item">
          <Link to="/GoogleSecond">
            <img src={mapIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Second;
