import React, { useState, useEffect, useRef } from "react";
import "../css/form.css";
import whiteCat from '../Images/white kitten.svg';
import calendar from '../Images/stash_data-date-solid.svg';
import "../css/foodDetails.css";
import foodImg from '../Images/chickenBowl.jpg';
import foodItems from "../data/foodData";
import clock from '../Images/tabler_clock-filled.svg';
import servings from '../Images/Serving.svg';
import protein from '../Images/Protien.svg';
import fat from '../Images/Fat.svg';
import cals from '../Images/Calories.svg';
import closeBtn from '../Images/closeBtn.svg';
import shareBtn from '../Images/shareBtn.svg';
import blueCat from '../Images/cat.svg'

function FeedbackForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const formRef = useRef(null);
  const dateInputRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose(false);
    }, 400);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (isSwiping && startX - currentX > 50) {
      handleClose();
    }
    setIsSwiping(false);
  };

  return (
    <div 
      className={`fd ${isOpen ? "active" : ""}`}
      ref={formRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="fd-close" onClick={handleClose}>
        <img src={closeBtn} alt="close button" />
      </button>
      <div className="fd-content">
        <div className={`pfForm fbForm`}>
          <div className={`pfMain fbMain`}>
            <div className="pfTop">
              <div className="pftDesc">
                <h1>How Did We <br /> Do? 🤗</h1>
                <p>Your thoughts = Our secret ingredient!</p>
              </div>
              <img src={blueCat} alt="white kitten" />
            </div>
            <div className="pfInput">
              <div className="pfi">
                <label htmlFor="name">Name</label>
                <input type="text" />
              </div>
              <div className="pfi">
                <label htmlFor="dob">Date of Birth</label>
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
                    onClick={() => dateInputRef.current?.showPicker()}
                  />
                </div>
              </div>
              <div className="pfi">
                <label htmlFor="contact">Contact</label>
                <input type="text" />
              </div>
              <div className="pfi">
                <label htmlFor="favoriteFood">Feedback</label>
                <textarea></textarea>
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;