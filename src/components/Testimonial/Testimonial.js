import React from 'react'
import "./testimonials.css"
import rectangle from "../../assets/Rectangle 6.png";
import group from "../../assets/Group.png";
const Testimonial = () => {
  return (
<div id="testimonials">
          <p className="title text-center"> Few smiles and comment </p>
          <p className="subTitle text-center">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
          <div className="grid">
            <div className="image">
              <img src={rectangle} />
            </div>
            <div className="ig">
              <img src={group} />
              <p className="commentTitle"> {"Dream house isn’t dream anymore"} </p>
              <p className="comment">
                {" "}
                Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
                pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.{" "}
              </p>
              <p className="author"> Brooklyn Simmons</p>
              <p className="designation "> Artist </p>
            </div>
          </div>
        </div>  )
}

export default Testimonial