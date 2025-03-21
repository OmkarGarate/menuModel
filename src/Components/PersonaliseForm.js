import React, { useState, useEffect, useRef } from "react";
import "../css/form.css";
import whiteCat from '../Images/white kitten.svg';
import calendar from '../Images/stash_data-date-solid.svg';

function PersonaliseForm({ showPersonaliseForm, handlePfForm }) {
  const [delayedShow, setDelayedShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const formRef = useRef(null);
  const dateInputRef = useRef(null); // Ref for date input

  useEffect(() => {
    if (showPersonaliseForm) {
      setIsClosing(false);
      setTimeout(() => setDelayedShow(true), 50);
    } else {
      setIsClosing(true);
      setTimeout(() => setDelayedShow(false), 300);
    }
  }, [showPersonaliseForm]);

  function handleClickOutside(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsClosing(true);
      setTimeout(() => handlePfForm(false), 300);
    }
  }

  useEffect(() => {
    if (showPersonaliseForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPersonaliseForm]);

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => handlePfForm(false), 300);
  }

  return (
    <div className={`pfForm ${delayedShow ? "pfView" : "pfFade"}`}>
      <div ref={formRef} className={`pfMain ${isClosing ? "slideOut" : "slideIn"}`}>
        <div className="pfTop">
          <div className="pftDesc">
            <h1>
              Personalize <br /> your Menu.
            </h1>
            <p>A few quick details for a <br /> seamless experience.</p>
          </div>
          <img src={whiteCat} alt="white kitten" />
        </div>
        <div className="pfInput">
          <div className="pfi">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="pfi">
            <label htmlFor="dob">Date of Birth</label>
            <p>So we can send you a surprise!</p>
            <div className="pfiIm">
              <input
                type="date"
                id="dob"
                className="custom-date"
                ref={dateInputRef}
              />
              <img
                src={calendar}
                alt="calendar"
                className="custom-calendar-icon"
                onClick={() => dateInputRef.current?.showPicker()} // Opens the date picker
              />
            </div>
          </div>
          <div className="pfi">
            <label htmlFor="contact">Contact</label>
            <p>No spam, just delicious updates!</p>
            <input type="text" />
          </div>
          <div className="pfi">
            <label htmlFor="favoriteFood">Favorite Food Dish</label>
            <p>No judgment, we love them all!</p>
            <input type="text" />
          </div>
          <button>Let's Dig In!</button>
          <p className="ml" onClick={handleClose}>Maybe Later</p>
        </div>
      </div>
    </div>
  );
}

export default PersonaliseForm;
