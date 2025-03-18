import React from "react";
import foodImg from '../Images/chickenBowl.jpg';

function FoodSearch({ item }) {
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
    <div className="foodCard foodSearch">
        <img src={foodImg} alt={item.name} />
      <div className="foodDetails">
        
        {displayCategory && (
          <span 
            className="foodCategory" 
            style={{ color: categoryColors[displayCategory] || "gray" }} // Ensure color is applied
          >
            {displayCategory.toUpperCase()}
          </span>
        )}
        <h3>{item.name}</h3>
        
      </div>
      <div className="pv">
          <button className="viewButton">VIEW →</button>
        </div>
      
    </div>
  );
}

export default FoodSearch;