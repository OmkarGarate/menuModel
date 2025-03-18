    import React, { useState } from 'react'
    import '../css/navbar.css'
    import bar from '../Images/bar.svg'
    import food from '../Images/food.svg'
    import drinks from '../Images/drinks.svg'
    import logo from '../Images/logo.svg'
    import menu from '../Images/menu.svg'
    import searchIcon from '../Images/searchIcon.svg'
    import foodImg from '../Images/chickenBowl.jpg';
    import backBtn from '../Images/backBtn.svg';
import FoodSearch from './FoodSearch'
import foodItems from "../data/foodData";

    function Navbar({handleSelected, isSelected, handleMenu, handleFoodClick, handleFoodId}) {

        
        const [left, setLeft] = useState("bar")
        const [right, setRight] = useState("drinks")
        
        const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setIsSearchOpen(true);
    };

    const filteredItems = searchQuery && foodItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='navbarMain'>
            <div className="navbar">
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
                
                <div className="searchBar" onClick={() => setIsSearchOpen(true)}>
                    <img src={searchIcon} alt="search icon" />
                    <div className="ser">Looking for something special?</div>
                </div>
                <div className="menu" onClick={()=>handleMenu(true)}>
                    <img src={menu} alt="menu" />
                </div>

                {isSearchOpen && (
                    <div className="searchRes">
                    <div className='backSearch'>
                        <img src={backBtn} alt="back button" className='backBtn' onClick={() =>{ setIsSearchOpen(false); setSearchQuery("")}}/>
                        <div className="searchBar">
                    <img src={searchIcon} alt="search icon" />
                    <input type="text" placeholder='search' value={searchQuery}
                        onChange={handleSearchChange}/>
                </div>
                    </div>

               
                {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => <div onClick={() => {
                            handleFoodClick(true);
                            handleFoodId(item.id);
                            setIsSearchOpen(false);
                            setSearchQuery("")
                          }}>
                             <FoodSearch key={index} item={item} />
                          </div>)
                    ): (
                        <p className='npf'>{searchQuery && "No products found"}</p>
                    ) }
                </div>
                )}

                
            </div>
            <div className="mit">
            <div className="menuItems">
            </div>
            </div>
            
            <div className="mis">
            {/* <div className={isSelected === "bar" ? "mi center" : isSelected === "food" ? "mi left" : isSelected === "drinks" ? "mi right" : "mi"} onClick={()=>handleSelected("bar")}>{left}</div> */}
                
                <div className={isSelected === "bar" ? "mi center" : isSelected === "food" ? "mi left" : isSelected === "drinks" ? "mi right" : "mi"} onClick={()=>handleSelected("bar")}>
                    <img src={bar} alt="" />
                    <p>Bar</p>
                </div>
                <div className={isSelected === "food" ? "mi center" : isSelected === "bar" ? "mi right" : isSelected === "drinks" ? "mi left" : "mi"} onClick={()=>handleSelected("food")}>
                    <img src={food} alt="" />
                    <p>Food</p>
                </div>
                <div className={isSelected === "drinks" ? "mi center" : isSelected === "food" ? "mi right" : isSelected === "bar" ? "mi left" : "mi"} onClick={()=>handleSelected("drinks")}>
                    <img src={drinks} alt="" />
                    <p>Drinks</p>
                </div>

                {/* <div className={isSelected === "bar" ? "mi center" : isSelected === "food" ? "mi left" : isSelected === "drinks" ? "mi right" : "mi"} onClick={()=>handleSelected("bar")}>{right}</div> */}
            </div>
        </div>
    )
    }

    export default Navbar