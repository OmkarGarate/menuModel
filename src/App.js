import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MenuMain from './Components/MenuMain';
import { useEffect, useState, useRef } from 'react';
import closeBtn from './Images/closeBtn.svg';
import foodItems from './data/foodData';
import PersonaliseForm from './Components/PersonaliseForm'; // Import the PersonaliseForm component

import reviewBtn from './Images/Review Button.svg'
import ReviewUs from './Components/ReviewUs';
import FeedbackForm from './Components/FeedbackForm';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 426);
  const [isSelected, setIsSelected] = useState("food");
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedSecondaryCategory, setSelectedSecondaryCategory] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);
  const [showPersonaliseForm, setShowPersonaliseForm] = useState(true); // Show form on load
  const [spl, setSpl] = useState(false)
  const [foodClick, setFoodClick] = useState(false);
  const [foodId, setFoodId] = useState("");

  


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 426);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const handleFoodClick = (value) => {
    setFoodClick(value);
  };

  const handleReviewClick = (value)=>{
    setIsReview(value)
  }

  const handleFeedbackClick = (value)=>{
    setIsFeed(value)
  }

  const handleFoodId = (value) => {
    setFoodId(value);
  };

  const handleSelected = (menu) => {
    setIsSelected(menu);
  };

  useEffect(()=>{
    if(showPersonaliseForm){
      setSpl(showPersonaliseForm)

    }else{
      setTimeout(() => {
        setSpl(showPersonaliseForm)
      }, 700);
    }
  },[showPersonaliseForm])

  const handleMenu = (value, category = null) => {
    setOpenMenu(value);
    if (category) {
      const categoryItem = foodItems.find((item) => item.secondaryCategory === category);
      if (categoryItem) {
        setIsSelected(categoryItem.tag);
        setTimeout(() => setSelectedSecondaryCategory(category), 300);
      }
    } else {
      setSelectedSecondaryCategory(null);
    }
  };

  const handlePfForm = (value) => {
    if (!value) {
      setTimeout(() => setShowPersonaliseForm(false), 300); // Delay hiding the background
    } else {
      setShowPersonaliseForm(true);
    }
  };
  

  useEffect(() => {
    if (!openMenu) {
      setTimeout(() => setViewMenu(false), 400);
    } else {
      setViewMenu(true);
    }
  }, [openMenu]);

  const secondaryCategories = [...new Set(foodItems.map((item) => item.secondaryCategory))];

 
  const [isReview, setIsReview] = useState(false)
  const [isFeed, setIsFeed] = useState(false)

  if (!isMobile) {
    return <div className="desktop-message">This website is available only on mobile devices.</div>;
  }


  return (
    <div className='backMenu'>
      {spl && (
        <div className={`pfForm ${showPersonaliseForm ? 'pfView' : 'pfFade'}`}>
          <PersonaliseForm onClose={() => setShowPersonaliseForm(false)} showPersonaliseForm={showPersonaliseForm} handlePfForm={handlePfForm}/>
        </div>
      )}

      {viewMenu && (
        <div className='bm'>
          <button onClick={() => handleMenu(false)}>
            <img src={closeBtn} alt="Close" />
          </button>

          <div className="menuOpts">
            {secondaryCategories.map((category, index) => (
              <p key={index} onClick={() => handleMenu(false, category)}>{category}</p>
            ))}
          </div>
        </div>
      )}

      <div className={`allComponents ${openMenu ? "openMenu" : ""}`}>
        <Navbar 
          handleSelected={handleSelected} 
          isSelected={isSelected} 
          handleMenu={handleMenu} 
          handleFoodClick={handleFoodClick}
          handleFoodId={handleFoodId}
        />
        <MenuMain 
          isSelected={isSelected} 
          selectedSecondaryCategory={selectedSecondaryCategory} 
          handleFoodClick={handleFoodClick}
          handleFoodId={handleFoodId}
          foodClick={foodClick}
          foodId={foodId}
        />
<img 
  src={reviewBtn} 
  alt="review button" 
  className="reviewBtn" 
  onClick={() => setIsReview(true)}
/>
        {isReview && (
          <div className={`fd fdMain ${ isReview ? "active" : ""}`}>
            <ReviewUs onClose={handleReviewClick} handleFeedbackClick={handleFeedbackClick}/>
        </div>
        )}
        {isFeed && (
          <div className={`fd fdMain ${ isFeed ? "active" : ""}`}>
            <FeedbackForm onClose={handleFeedbackClick}/>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
