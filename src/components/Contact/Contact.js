import React from 'react'
import "./contact.css"
import leftBgg from "../../assets/leftbg.png";
const Contact = () => {
  return (
    <div id="contactForm">
    <div className="image">
      <img src={leftBgg} />
    </div>
    <div className="half">
      <p className="title">Contact us</p>
      <p className="subTitle">
        Turpis facilisis tempor pulvinar in lobortis ornare magna.
      </p>
      <form>
        <input
          className="input"
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
        />
        <input
          className="input"
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
        />
        <br />
        <input
          className="input"
          type="text"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Mobile number"
        />
        <br />
        <textarea
          className="textarea"
          name="description"
          rows="4"
          cols="50"
          placeholder="Description"
        ></textarea>
        <br />
        <button className="button">Get a quote</button>
        <span id="message"> We don’t sell your email and spam </span>
      </form>
    </div>
  </div>  )
}

export default Contact