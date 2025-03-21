import React from "react";
import foodImg from '../Images/chickenBowl.jpg';
import viewBtn from '../Images/viewBtn.svg'

function FoodCard({ item }) {
  // Define category colors
  const categoryColors = {
    veg: "green",
    nonveg: "red",
    drinks: "blue",
    cocktails: "purple",
    whiskey: "brown",
    beer: "goldenrod",
  };

  // Normalize category names (convert variations to standard keys)
  const normalizedCategories = item.personalPreferences.map(cat => {
    const lowerCat = cat.toLowerCase(); // Convert to lowercase
    if (lowerCat.includes("vegetarian")) return "veg";
    if (lowerCat.includes("non-veg")) return "nonveg";
    if (lowerCat.includes("drink")) return "drinks";
    if (lowerCat.includes("cocktail")) return "cocktails";
    if (lowerCat.includes("whiskey")) return "whiskey";
    if (lowerCat.includes("beer")) return "beer";
    return lowerCat; // Default to lowercase category name
  });

  // Prioritize categories: veg/nonveg first, then drinks/bar categories
  const priorityOrder = ["veg", "nonveg", "drinks", "cocktails", "whiskey", "beer"];
  const displayCategory = normalizedCategories.find(cat => priorityOrder.includes(cat)) || normalizedCategories[0] || "other";

  return (
    <div className="foodCard">
      <div className="foodDetails">
        {displayCategory && (
          <span 
            className="foodCategory" 
            style={{ color: categoryColors[displayCategory] || "gray", fontWeight: "bold" }} // Ensure color is applied
          >
            {displayCategory.toUpperCase()}
          </span>
        )}
        <h3>{item.name}</h3>
        <div className="pv">
          <p className="foodPrice">{item.price}</p>
          <img src={viewBtn} alt="viewbtn" />
        </div>
      </div>
      <img src={foodImg} alt={item.name} />
    </div>
  );
}

export default FoodCard;