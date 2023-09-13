import React from 'react'
import "./ongoingproject.css"
import vector from "../../assets/Vector.png";
import vector_1 from "../../assets/Vector (1).png";
import leftBg from "../../assets/left bg (1).png";
import icOutline from "../../assets/ic_outline-location-on.png";
import leftBg_2 from "../../assets/left bg (2).png";
import maskGroup from "../../assets/Mask Group.png";
import { useRef } from "react";
const Project = () => {
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
    <div className="ongingProject">
    <div className="ongingProject-container">
      <div>
        <p className="title "> Ongoing projects </p>
        <p className="subTitle ">
          Turpis facilisis tempor pulvinar in lobortis ornare magna..
        </p>
      </div>

      <div className="flex-vector">
        <img onClick={() => sideScroll("left")} src={vector} />
        <img onClick={() => sideScroll("right")} src={vector_1} />
      </div>
    </div>
    <div ref={carousel} id="carousel">
      <div id="scroll-container">
        <div className="carouselImages">
          <img src={leftBg} />
          <div className="relative">
            <p>Vintage villa</p>
            <img src={icOutline} />
            <span> 2715 Ash Dr. San Jose, Dubai</span>
          </div>
        </div>
        <div className="carouselImages">
          <img src={leftBg_2} />
          <div className="relative">
            <p>Tonga villa</p>
            <img src={icOutline} />
            <span> 1901 Thornridge Cir. Shiloh 81063</span>
          </div>
        </div>
        <div className="carouselImages">
          <img src={maskGroup} />
          <div className="relative">
            <p>Penthouse</p>
            <img src={icOutline} />
            <span>2464 Royal Ln. Mesa, 45463</span>
          </div>
        </div>
        <div className="carouselImages">
          <img src={leftBg_2} />
          <div className="relative">
            <p>Smart city</p>
            <img src={icOutline} />
            <span>2715 Ash Dr. San Jose, Dubai</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Project