import React, { useState, useEffect, useRef } from "react";
import "../css/food.css";
import foodItems from "../data/foodData";
import FoodCard from "./FoodCard";
import FoodDetails from "./FoodDetails";

const generateCategoriesByTag = (items) => {
  const categories = {
    food: [
      { label: "All", value: "all" },
      { label: "Veg", value: "Vegetarian" },
      { label: "Non-Veg", value: "Non-Veg" },
    ],
    drinks: [{ label: "All", value: "all" }],
    bar: [{ label: "All", value: "all" }],
  };

  items.forEach((item) => {
    const { tag, personalPreferences } = item;
    if (tag in categories) {
      personalPreferences.forEach((preference) => {
        if (tag === "food" && (preference === "Vegetarian" || preference === "Non-Veg")) return;
        if (!categories[tag].some((category) => category.value === preference)) {
          categories[tag].push({ label: preference, value: preference });
        }
      });
    }
  });

  return categories;
};

const categoriesByTag = generateCategoriesByTag(foodItems);

function Food({ isSelected, selectedSecondaryCategory, handleFoodClick, handleFoodId, foodClick, foodId }) {
  const [selectedTag, setSelectedTag] = useState("all");

  const categoryRefs = useRef({});

  useEffect(() => {
    setSelectedTag("all");
  }, [isSelected]);

  const categories = categoriesByTag[isSelected] || [];

  const groupedItems = foodItems.reduce((acc, item) => {
    const normalizedCategories = Array.isArray(item.personalPreferences)
      ? item.personalPreferences.map((cat) => cat.toLowerCase())
      : [];

    const normalizedSelectedTag = selectedTag.toLowerCase();
    const categoryMatch = selectedTag === "all" || normalizedCategories.includes(normalizedSelectedTag);
    const tagMatch = isSelected === "all" || item.tag === isSelected;

    if (categoryMatch && tagMatch) {
      acc[item.secondaryCategory] = acc[item.secondaryCategory] || [];
      acc[item.secondaryCategory].push(item);
    }

    return acc;
  }, {});

  // Move selectedSecondaryCategory to the top
  const sortedGroupedItems = Object.entries(groupedItems).sort(([groupA], [groupB]) => {
    if (groupA === selectedSecondaryCategory) return -1;
    if (groupB === selectedSecondaryCategory) return 1;
    return groupA.localeCompare(groupB); // Maintain alphabetical order for others
  });

  useEffect(() => {
    if (selectedSecondaryCategory) {
      setTimeout(() => {
        const targetElement = categoryRefs.current[selectedSecondaryCategory];
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [selectedSecondaryCategory]);

  return (
    <div className="fnc">
      {/* Category Filter */}
      <div className="foodNav">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={selectedTag === cat.value ? "active" : ""}
            onClick={() => setSelectedTag(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Food List */}
      {sortedGroupedItems.map(([group, items]) => (
        <div key={group} ref={(el) => (categoryRefs.current[group] = el)} className="foodGroup">
          <h2 className="groupTitle">{group}</h2>
          <div className="foodList">
            {items.map((item) => (
              <div
                key={item.id}
                className="fl"
                onClick={() => {
                  handleFoodClick(true);
                  handleFoodId(item.id);
                }}
              >
                <FoodCard item={item} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Food Details Modal */}
      {foodClick && foodId && (
        <div className={`fd fdMain ${foodClick ? "active" : ""}`}>
          <FoodDetails foodId={foodId} onClose={() => handleFoodClick(false)} />
        </div>
      )}
    </div>
  );
}

export default Food;
