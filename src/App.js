import logo from "./logo.svg";
// import "./style/about.css";
import "./style/styles.css";
// import "./style/testimonials.css";
// import "./style/ongoingproject.css";
import "./style/homepage.css";
// import "./style/contact.css";
// import "./style/footer.css";
import Arrow_01 from "./assets/Arrow_01.png";
import highlightLeft from "./assets/Highlight_05.png";
import highlightRight from "./assets/Highlight_05 (1).png";
import Banner from "./components/Banner/Banner";
import Testimonial from "./components/Testimonial/Testimonial";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Description from "./components/Description/Description";



function App() {

  
  return (
    <>
      <div id="homePage">
      <Banner />
        <img className="arrowImg" src={Arrow_01} />
        <img className="highlightLeft" src={highlightLeft} />
        <img className="highlightRight" src={highlightRight} />
        <div className="content">
          <p className="title">A home is built with love and dreams</p>
          <p className="subTitle">Real estate farm that makes your dreams true</p>
          <button className="buttonProject">Our projects</button>
          <button className="buttonContact">Contact us</button>
        </div>
      </div>
      <div className="container">
        <Description />
       
        <Project />

        <Testimonial />

        <Contact />
      </div>

     <Footer />
    </>
  );
}

export default App;
