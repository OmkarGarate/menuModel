import React, { useEffect, useState, useRef } from "react";
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

const nutritionIcons = {
  "Time": { img: clock, alt: "Time to cook" },
  "Servings": { img: servings, alt: "Number of servings" },
  "Protein": { img: protein, alt: "Protein content" },
  "Fat": { img: fat, alt: "Fat content" },
  "Calories": { img: cals, alt: "Caloric content" },
};

function FoodDetails({ foodId, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const foodItem = foodItems.find(item => item.id === foodId);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    setIsOpen(true);
    if (imgRef.current) {
      setImgHeight(imgRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: foodItem.name,
        text: `Check out this amazing dish: ${foodItem.name}!\n\n${foodItem.description}`,
        url: window.location.href,
      })
      .then(() => console.log('Shared successfully'))
      .catch(error => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!startY) return;
    const endY = e.touches[0].clientY;
    const diff = endY - startY;

    if (diff > 50) { // Adjust threshold for swipe sensitivity
      handleClose(); // Close FoodDetails on downward swipe
    }
  };

  const cats = [];
  cats.push(foodItem.primaryCategory);
  cats.push(foodItem.secondaryCategory);
  cats.push(...foodItem.personalPreferences);

  const categoryColors = {
    vegetarian: "green",
    "non-vegetarian": "red",
    drinks: "blue",
    cocktails: "purple",
    whiskey: "brown",
    beer: "goldenrod",
  };

  const normalizedCategories = foodItem.personalPreferences.map(cat => {
    const lowerCat = cat.toLowerCase();
    if (lowerCat.includes("vegetarian")) return "vegetarian";
    if (lowerCat.includes("non-veg")) return "non-vegetarian";
    if (lowerCat.includes("drink")) return "drinks";
    if (lowerCat.includes("cocktail")) return "cocktails";
    if (lowerCat.includes("whiskey")) return "whiskey";
    if (lowerCat.includes("beer")) return "beer";
    return lowerCat;
  });

  const priorityOrder = ["veg", "nonveg", "drinks", "cocktails", "whiskey", "beer"];
  const displayCategory = normalizedCategories.find(cat => priorityOrder.includes(cat)) || normalizedCategories[0] || "other";

  return (
    <div 
      className={`fd ${isOpen ? "active" : ""}`}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
    >
      <button className="fd-close" onClick={handleClose}>
        <img src={closeBtn} alt="close button" />
      </button>
      <div className="fd-content">
        <div className="foodImg">
          <img ref={imgRef} src={foodImg} alt={foodItem.name} className="fdImg" />
          <div className="shareBtn" onClick={handleShare}>
            <img src={shareBtn} alt="share button" />
            <p>Share</p>
          </div>
        </div>
        {displayCategory && (
          <span 
            className="foodCategory" 
            style={{ color: categoryColors[displayCategory] || "gray", fontWeight: "bold" }}
          >
            {displayCategory.toUpperCase()}
          </span>
        )}
        <h1>{foodItem.name}</h1>
        <h1>{foodItem.price}</h1>

        <div className="fdCats">
          {cats.map((ct, index) => (
            <button key={index}>{ct}</button>
          ))}
        </div>

        <p className="ddHead">Details</p>
        <div ref={sectionRef} className={`fdDetails ${isVisible ? "active" : ""}`}>
          {Object.entries(foodItem.nutrition).map(([key, value]) => {
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            const [num, ...unitParts] = value.split(" ");
            const { img, alt } = nutritionIcons[formattedKey] || {};

            return (
              <div 
                className="fdd" 
                key={key} 
                style={{ 
                  height: imgHeight ? `${imgHeight}px` : "auto", 
                  transition: isOpen ? "height 0.8s ease-in-out" : "none"
                }}
              >
                {img && <img src={img} alt={alt} className="fddImg" />}
                <div className="fddNut">
                  <p className="fddNum">{num}</p>
                  <p className="fddUnit">{unitParts.join(" ")}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="ddHead">Description</p>
        <p className="ddDesc">{foodItem.description}</p>
      </div>
    </div>
  );
}

export default FoodDetails;
