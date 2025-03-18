import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MenuMain from './Components/MenuMain';
import { useEffect, useState } from 'react';
import closeBtn from './Images/closeBtn.svg';
import foodItems from './data/foodData'; // Import foodItems data

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 426);
  const [isSelected, setIsSelected] = useState("food");
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedSecondaryCategory, setSelectedSecondaryCategory] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);

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

  const handleFoodId = (value) => {
    setFoodId(value);
  };

  const handleSelected = (menu) => {
    setIsSelected(menu);
  };

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

  useEffect(() => {
    if (!openMenu) {
      setTimeout(() => setViewMenu(false), 400);
    } else {
      setViewMenu(true);
    }
  }, [openMenu]);

  const secondaryCategories = [...new Set(foodItems.map((item) => item.secondaryCategory))];

  if (!isMobile) {
    return <div className="desktop-message">This website is available only on mobile devices.</div>;
  }

  return (
    <div className='backMenu'>
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
      </div>
    </div>
  );
}

export default App;
