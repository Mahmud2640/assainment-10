import React from "react";
import "./Footer.css";

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Dental Support</a>
                </li>
                <li>
                  <a href="#">Medical Support</a>
                </li>
                <li>
                  <a href="#">Life Support</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Doctor-Talk</h3>
              <p>
              Consult to verified doctors online through chat or call and get answers to all your healthcare-related queries online. Talk to a doctor and get a response.
              When you were younger, your parents made the decisions about your health. They set up your doctor visits and did all the talking for you...
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Doctor-Talk © {year}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
