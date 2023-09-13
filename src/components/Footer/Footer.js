import React from 'react'
import "./footer.css"
import ic_round from "../../assets/ic_round-location-on (1).png";
import ic_baseline from "../../assets/ic_baseline-phone.png";
import ic_baseline_mail from "../../assets/ic_baseline-email.png";
const Footer = () => {
  return (
    <div id="footerPage">
    <div className="end-container">
      <div className="footer-menu">
        <div className="contact">LUGAR</div>
        <div className="info">
          <div className="icon-container">
            <img src={ic_round} alt="Location Icon" />
            <p>
              2118 Thornridge Cir. Dubai,
              <br /> UAE 35624
            </p>
          </div>
          <div className="icon-container">
            <img src={ic_baseline} alt="Phone Icon" />
            <p>+33 415 65356 - 9</p>
          </div>
          <div className="icon-container">
            <img src={ic_baseline_mail} alt="Email Icon" />
            <p>contact@lugar.com</p>
          </div>
        </div>
      </div>
      <div className="end-container2">
        <div className="footer-menu">
          <div className="quickInfo">
            QUICK LINKS
            <div className="info">
              <p>Home</p>
              <p>About</p>
              <p>Project</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="legalLinks">
            LEGAL LINKS
            <div className="info">
              <p>Terms</p>
              <p>Condition</p>
              <p>Policy</p>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="media">
            SOCIAL MEDIA
            <div className="info">
              <p>Facebook</p>
              <p>Youtube</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyRight">
      <p>Copyright @ 2022 Lugar Inc.</p>
    </div>
  </div>
  )
}

export default Footer