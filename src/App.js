import logo from "./logo.svg";
import "./about.css";
import "./styles.css";
import "./testimonials.css";
import "./ongoingproject.css";
import "./homepage.css";
import "./contact.css";
import "./footer.css";
import Arrow_01 from "./assets/Arrow_01.png";
import highlightLeft from "./assets/Highlight_05.png";
import highlightRight from "./assets/Highlight_05 (1).png";
import Group from "./assets/Mask Group (1).png";
import vector from "./assets/Vector.png";
import vector_1 from "./assets/Vector (1).png";
import leftBg from "./assets/left bg (1).png";
import icOutline from "./assets/ic_outline-location-on.png";
import leftBg_2 from "./assets/left bg (2).png";
import maskGroup from "./assets/Mask Group.png";
import rectangle from "./assets/Rectangle 6.png";
import group from "./assets/Group.png";
import leftBgg from "./assets/leftbg.png";
import ic_round from "./assets/ic_round-location-on (1).png";
import ic_baseline from "./assets/ic_baseline-phone.png";
import ic_baseline_mail from "./assets/ic_baseline-email.png";
import { useRef } from "react";
import CountUp from 'react-countup';

function App() {
  const carousel = useRef(null);

  const sideScroll = (direction) => {
    let element = carousel.current;
    if (direction == "left") {
      element.scrollLeft -= "200";
    } else {
      element.scrollLeft += "200";
    }
  };
  return (
    <>
      <div id="homePage">
        <div class="menu-container">
          <b>LUGAR</b>
          <div class="menu">
            <a class="details">HOME</a>
            <a class="details">ABOUT</a>
            <a class="details">PROJECT</a>
            <a class="details">CONTACT</a>
          </div>
        </div>
        <img class="arrowImg" src={Arrow_01} />
        <img class="highlightLeft" src={highlightLeft} />
        <img class="highlightRight" src={highlightRight} />
        <div class="content">
          <p class="title">A home is built with love and dreams</p>
          <p class="subTitle">Real estate farm that makes your dreams true</p>
          <button class="buttonProject">Our projects</button>
          <button class="buttonContact">Contact us</button>
        </div>
      </div>
      <div class="container">
        <div id="about">
          <div class="image">
            <img src={Group} />
          </div>
          <div class="content">
            <p class="aboutTitle">
              {" "}
              Award winning real estate company in Dubai{" "}
            </p>
            <p class="aboutComment">
              {" "}
              Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
              pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in
              lobortis ornare magna.{" "}
            </p>
            <div class="number-container">
              <div class="numberTitle">
                <p class="numberSubtitle">PREVIOUS PROJECTS</p>
                <div class="number"><CountUp enableScrollSpy end={34} />+</div>
              </div>
              <div class="numberTitle">
                <p class="numberSubtitle"> YEARS EXPERIENCE </p>
                <div class="number"><CountUp enableScrollSpy end={20} />y</div>
              </div>
              <div class="numberTitle">
                <p class="numberSubtitle"> ONGOING PROJECT </p>
                <div class="number"><CountUp enableScrollSpy end={12} /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="ongingProject">
          <div class="ongingProject-container">
            <div>
              <p class="title "> Ongoing projects </p>
              <p class="subTitle ">
                Turpis facilisis tempor pulvinar in lobortis ornare magna..
              </p>
            </div>

            <div class="flex-vector">
              <img onClick={() => sideScroll("left")} src={vector} />
              <img onClick={() => sideScroll("right")} src={vector_1} />
            </div>
          </div>
          <div ref={carousel} id="carousel">
            <div id="scroll-container">
              <div class="carouselImages">
                <img src={leftBg} />
                <div class="relative">
                  <p>Vintage villa</p>
                  <img src={icOutline} />
                  <span> 2715 Ash Dr. San Jose, Dubai</span>
                </div>
              </div>
              <div class="carouselImages">
                <img src={leftBg_2} />
                <div class="relative">
                  <p>Tonga villa</p>
                  <img src={icOutline} />
                  <span> 1901 Thornridge Cir. Shiloh 81063</span>
                </div>
              </div>
              <div class="carouselImages">
                <img src={maskGroup} />
                <div class="relative">
                  <p>Penthouse</p>
                  <img src={icOutline} />
                  <span>2464 Royal Ln. Mesa, 45463</span>
                </div>
              </div>
              <div class="carouselImages">
                <img src={leftBg_2} />
                <div class="relative">
                  <p>Smart city</p>
                  <img src={icOutline} />
                  <span>2715 Ash Dr. San Jose, Dubai</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonials">
          <p class="title text-center"> Few smiles and comment </p>
          <p class="subTitle text-center">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
          <div class="grid">
            <div class="image">
              <img src={rectangle} />
            </div>
            <div class="ig">
              <img src={group} />
              <p class="commentTitle"> {"Dream house isn’t dream anymore"} </p>
              <p class="comment">
                {" "}
                Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
                pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.{" "}
              </p>
              <p class="author"> Brooklyn Simmons</p>
              <p class="designation "> Artist </p>
            </div>
          </div>
        </div>

        <div id="contactForm">
          <div class="image">
            <img src={leftBgg} />
          </div>
          <div class="half">
            <p class="title">Contact us</p>
            <p class="subTitle">
              Turpis facilisis tempor pulvinar in lobortis ornare magna.
            </p>
            <form>
              <input
                class="input"
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
              />
              <input
                class="input"
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
              />
              <br />
              <input
                class="input"
                type="text"
                id="email"
                name="email"
                placeholder="Email address"
              />
              <input
                class="input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Mobile number"
              />
              <br />
              <textarea
                class="textarea"
                name="description"
                rows="4"
                cols="50"
                placeholder="Description"
              ></textarea>
              <br />
              <button class="button">Get a quote</button>
              <span id="message"> We don’t sell your email and spam </span>
            </form>
          </div>
        </div>
      </div>

      <div id="footerPage">
        <div class="end-container">
          <div class="footer-menu">
            <div class="contact">LUGAR</div>
            <div class="info">
              <div class="icon-container">
                <img src={ic_round} alt="Location Icon" />
                <p>
                  2118 Thornridge Cir. Dubai,
                  <br /> UAE 35624
                </p>
              </div>
              <div class="icon-container">
                <img src={ic_baseline} alt="Phone Icon" />
                <p>+33 415 65356 - 9</p>
              </div>
              <div class="icon-container">
                <img src={ic_baseline_mail} alt="Email Icon" />
                <p>contact@lugar.com</p>
              </div>
            </div>
          </div>
          <div class="end-container2">
            <div class="footer-menu">
              <div class="quickInfo">
                QUICK LINKS
                <div class="info">
                  <p>Home</p>
                  <p>About</p>
                  <p>Project</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>
            <div class="footer-menu">
              <div class="legalLinks">
                LEGAL LINKS
                <div class="info">
                  <p>Terms</p>
                  <p>Condition</p>
                  <p>Policy</p>
                </div>
              </div>
            </div>
            <div class="footer-menu">
              <div class="media">
                SOCIAL MEDIA
                <div class="info">
                  <p>Facebook</p>
                  <p>Youtube</p>
                  <p>Twitter</p>
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyRight">
          <p>Copyright @ 2022 Lugar Inc.</p>
        </div>
      </div>
    </>
  );
}

export default App;
