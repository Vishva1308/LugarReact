import React from 'react'
import "./descripton.css"
import group from "../../assets/apartment.png";
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup';
const Description = () => {
  return (
    <>
    <div id="about">
    <div className="image">
      <img src={group} />
    </div>
    <div className="content">
      <p className="aboutTitle">
        {" "}
        Award winning real estate company in Dubai{" "}
      </p>
      <p className="aboutComment">
        {" "}
        Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
        pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in
        lobortis ornare magna.{" "}
      </p>
      <div className="number-container">
        <div className="numberTitle">
          <p className="numberSubtitle">PREVIOUS PROJECTS</p>
          <div className="number"><CountUp enableScrollSpy end={34} />+</div>
        </div>
        <div className="numberTitle">
          <p className="numberSubtitle"> YEARS EXPERIENCE </p>
          <div className="number"><CountUp enableScrollSpy end={20} />y</div>
        </div>
        <div className="numberTitle">
          <p className="numberSubtitle"> ONGOING PROJECT </p>
          <div className="number"><CountUp enableScrollSpy end={12} /></div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Description