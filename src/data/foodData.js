const foodItems = [
  // 🍛 Food Items
  {
    id: 1,
    name: "Crispy Chicken Fresh Bowl",
    price: "₹379",
    primaryCategory: "Continental",
    secondaryCategory: "Main Course",
    personalPreferences: ["Non-Veg", "Bowl"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "25 Mins", 
      servings: "01 Servings", 
      calories: "520 Calories", 
      fat: "15g Fat", 
      protein: "35g Protein" 
    }
  },
  {
    id: 2,
    name: "Chilli Garlic Veg Ramen Bowl",
    price: "₹429",
    primaryCategory: "Japanese",
    secondaryCategory: "Main Course",
    personalPreferences: ["Vegetarian", "Bowl", "Ramen", "Spicy"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "30 Mins", 
      servings: "01 Servings", 
      calories: "450 Calories", 
      fat: "8g Fat", 
      protein: "20g Protein" 
    }
  },
  {
    id: 3,
    name: "Paneer Butter Masala",
    price: "₹349",
    primaryCategory: "Indian",
    secondaryCategory: "Main Course",
    personalPreferences: ["Vegetarian", "Curry"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "30 Mins", 
      servings: "01 Servings", 
      calories: "500 Calories", 
      fat: "22g Fat", 
      protein: "18g Protein" 
    }
  },
  
  // 🍗 Bar Items
  {
    id: 4,
    name: "Whiskey Sour",
    price: "₹499",
    primaryCategory: "Beverages",
    secondaryCategory: "Cocktails",
    personalPreferences: ["Whiskey"],
    tag: "bar",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "5 Mins", 
      servings: "01 Servings", 
      calories: "180 Calories", 
      fat: "0g Fat", 
      protein: "0g Protein" 
    }
  },
  {
    id: 5,
    name: "Margarita",
    price: "₹449",
    primaryCategory: "Beverages",
    secondaryCategory: "Tequila",
    personalPreferences: ["Tequila"],
    tag: "bar",
    image: "https://via.placeholder.com/150",
    description:"The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "5 Mins", 
      servings: "01 Servings", 
      calories: "150 Calories", 
      fat: "0g Fat", 
      protein: "0g Protein" 
    }
  },

  // 🍹 Drinks (Non-Alcoholic)
  {
    id: 6,
    name: "Classic Mojito",
    price: "₹399",
    primaryCategory: "Beverages",
    secondaryCategory: "Mocktails",
    personalPreferences: ["Rum"],
    tag: "drinks",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "5 Mins", 
      servings: "01 Servings", 
      calories: "140 Calories", 
      fat: "0g Fat", 
      protein: "0g Protein" 
    }
  },
  {
    id: 7,
    name: "Fresh Orange Juice",
    price: "₹249",
    primaryCategory: "Beverages",
    secondaryCategory: "Juices",
    personalPreferences: ["Juices", "Healthy"],
    tag: "drinks",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "2 Mins", 
      servings: "01 Servings", 
      calories: "120 Calories", 
      fat: "0g Fat", 
      protein: "1g Protein" 
    }
  },

  // 🍕 More Food Items
  {
    id: 8,
    name: "Spaghetti Carbonara",
    price: "₹399",
    primaryCategory: "Italian",
    secondaryCategory: "Pasta",
    personalPreferences: ["Non-Veg", "Pasta"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "20 Mins", 
      servings: "01 Servings", 
      calories: "550 Calories", 
      fat: "18g Fat", 
      protein: "25g Protein" 
    }
  },
  {
    id: 9,
    name: "Margherita Pizza",
    price: "₹349",
    primaryCategory: "Italian",
    secondaryCategory: "Pizza",
    personalPreferences: ["Vegetarian", "Pizza"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "25 Mins", 
      servings: "01 Servings", 
      calories: "600 Calories", 
      fat: "20g Fat", 
      protein: "22g Protein" 
    }
  },
  {
    id: 10,
    name: "Grilled Chicken Salad",
    price: "₹299",
    primaryCategory: "Healthy",
    secondaryCategory: "Salad",
    personalPreferences: ["Non-Veg", "Salad"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "15 Mins", 
      servings: "01 Servings", 
      calories: "320 Calories", 
      fat: "10g Fat", 
      protein: "35g Protein" 
    }
  },
  {
    id: 11,
    name: "Tandoori Chicken",
    price: "₹459",
    primaryCategory: "Indian",
    secondaryCategory: "Tandoor",
    personalPreferences: ["Non-Veg", "Spicy"],
    tag: "food",
    image: "https://via.placeholder.com/150",
    description: "The Chilli Garlic Veg Ramen Bowl is a bold and comforting dish, featuring a rich, spicy garlic-infused broth with deep umami flavors. Loaded with fresh vegetables like bok choy, mushrooms, bell peppers, and carrots, it pairs perfectly with springy ramen noodles for a satisfying bite. The broth, made with vegetable stock, soy sauce, ginger, and chili flakes, delivers the perfect balance of heat and savoriness. Topped with crispy garlic, sesame seeds, and fresh spring onions, this bowl is a flavorful delight for spice lovers and ramen enthusiasts alike",
    nutrition: { 
      time: "35 Mins", 
      servings: "01 Servings", 
      calories: "700 Calories", 
      fat: "25g Fat", 
      protein: "50g Protein" 
    }
  }
];

export default foodItems;
