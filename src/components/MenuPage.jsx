import { FaFilter, FaUtensils, FaChevronDown, FaChevronUp, FaChevronRight, FaStar, FaFire, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/MenuPage.css';
import { useNotification } from '../context/NotificationContext';
import EmptyCart from './EmptyCart';
const pizzas = [
  {
    id: 1,
    name: "Cheese Onion Pizza",
    category: "Veg Pizzas",
    price: 60,
    image: "/cheese-onion-pizza.jpg",
    isPopular: true,

  },

  {
    id: 2,
    name: "Cheese Capsicum",
    category: "Veg Pizzas",
    price: 60,
     image: "/cheese-capsicum-pizza.jpg",
    isPopular: true,
   
  },
  {
    id: 3,
    name: "Cheese Tomato",
    category: "Veg Pizzas",
    price: 60,
    image: "/cheese-tomato-pizza.jpg",
    isPopular: true,
  },

  {
    id: 4,
    name : "Cheese Corn",
    category: "Veg Pizzas",
    price: 60,
    image: "/cheese-corn-pizza.jpg",
    isPopular: true,
  },

   
  {
    id: 5,
    name: "Paneer Special",
    category: "Veg Pizzas",
    price: 90,
     image: "/paneer-special-pizza.jpg",
    isPopular: true,

  },

  {
    id: 6,
    name: "Veg Loaded Pizza",
    category: "Veg Pizzas",
    price: 120,
    image: "/veg-loaded-pizza.jpg",
    isPopular: true,

  },

  {
    id: 7,
    name : "Onion & capsicum",
    category: "Veg Pizzas",
    price: 90,
    image: "/O & C -pizza.jpg",
    isPopular: true,

  },

  {
    id: 8,
    name : "Tomato & Corn",
    category: "Veg Pizzas",
    price: 90,
    image: "/T & C -pizza.jpg",
    isPopular: true,
  },

  {
    id: 9,
    name: "Onion and Corn",
    category: "Veg Pizzas",
    price: 90,
    image: "/O & CO -pizza.jpg",
    isPopular: true,
  },

  {
    id: 10,
    name : "Paneer and Corn",
    category: "Veg Pizzas",
    price: 100,
    image: "/P & C -pizza.jpg",
    isPopular: true, 
  },

  {
    id: 11,
    name : "Onion and Jalepino",
    category: "Veg Pizzas",
    price: 100,
    image: "/O & J -pizza.jpg",
    isPopular: true,
  },

  {
    id: 12,
    name: "Paneer and Onion",
    category: "Veg Pizzas",
    price: 100,
    image: "/P & O -pizza.jpg",
    isPopular: true,
  },

  {
    id: 13,
    name: "BBQ",
    category: "NonVeg Pizzas",
    price: 90,
    image: "/BBQ-pizza.jpg",
    isPopular: true,
  },

  {
    id: 14,
    name: "Spicy Chicken",
    category: "NonVeg Pizzas",
    price: 90,
    image: "/spicy-chicken-pizza.jpg",
    isPopular: true,
  },

  {
    id: 15,
    name: "Chicken Sausage",
    category: "NonVeg Pizzas",
    price: 90,
    image: "/chicken-sausage-pizza.jpg",
    isPopular: true,
  },


  {
    id: 16,
    name: "American Chicken",
    category: "NonVeg Pizzas",
    price: 90,
     image: "/American-pizza.jpg",
    isPopular: true,
  },

 
  {
    id: 17,
    name: "Onion and BBQ",
    category: "NonVeg Pizzas",
    price: 110,
      image: "/O & BBQ-pizza.jpg",
    isPopular: true,
  },
  
  {
    id: 18,
    name: "Capsicum and Spicy Chicken",
    category: "NonVeg Pizzas",
    price: 110,
    image: "/S & Cap-pizza.jpg",
    isPopular: true,
  },

   {
    id: 19,
    name: "Onion and Chicken Sausage",
    category: "NonVeg Pizzas",
    price: 110,
    image: "/O & CS-pizza.jpg",
    isPopular: true,
  },


   {
    id: 20,
    name: "Chicken Loaded Pizza",
    category: "NonVeg Pizzas",
    price: 130,
    image: "/chickenL-pizza.jpg",
    isPopular: true,
  },

  {
    id: 21,
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 120,
    image: "/whiteSause.jpg",
    type: "veg"
},

{
    id: 22,
    name: "Red Sauce Pasta",
    category: "Pasta",
    price: 120,
    image: "/RedSause.jpg",
    type: "veg"
},

{
    id: 23,
    name: "Mix Sauce Pasta",
    category: "Pasta",
    price: 130,
    image: "/MixSauce.jpg",
    type: "veg"
},

{
    id: 24,
    name: "Chicken Pasta",
    category: "Pasta",
    price: 140,
    image: "/ChickenPasta.jpg",
    type: "non-veg"
},

{
    id: 25,
    name: "Veg Nuggets (10 PCS)",
    category: "Snacks",
    price: 90,
    image: "/VegNuggets.jpg",
    type: "veg"
},

{
    id: 26,
    name: "Chicken Popcorn (10 PCS)",
    category: "Snacks",
    price: 100,
    image: "/CP.jpg",
    type: "non-veg"
},



{
    id: 27,
    name: "Chicken Nuggets (6 PCS)",
    category: "Snacks",
    price: 140,
    image: "/CN.jpg",
    type: "non-veg"
},


{
    id: 28,
    name: "Chicken Wings (6 PCS)",
    category: "Snacks",
    price: 180,
    image: "/CW.jpg",
    type: "non-veg"
},

{
    id: 29,
    name: "Banana Shake",
    category: "Shakes",
    image: "/BananaShake.jpg",
    price: 70,
},

{
    id: 400,
    name: "Vanilla Shake",
    category: "Shakes",
    image: "/Vani.jpg",
    price: 70,
},

{
    id: 30,
    name: "Oreo Shake",
    category: "Shakes",
    image: "/OreoShake.jpg",
    price: 100,
  
},

{
    id: 31,
    name: "Mango Shake",
    category: "Shakes",
    image: "/MangoShake.jpg",
    price: 70,
  
},


{
    id: 32,
    name: "Strawberry Shake",
    category: "Shakes",
    image: "/StrawberryShake.jpg",
    price: 70,
  
},


  {
    id: 34,
    name: "Cold Coffee",
    category: "Shakes",
    image: "/ColdCoffee.jpg",
    price: 80,
  
  },


  {
    id: 35,
    name: "Black Currant Shake",
    category: "Shakes",
    image: "/BC.jpg",
    price: 100,

  },


  {
    id: 36,
    name: "Chocolate Shake",
    category: "Shakes",
    image: "/CS.jpg",
    price: 100,

  },

{
    id: 37,
    name: "Butter Scotch Shake",
    category: "Shakes",
    image: "/BS.jpg",
    price: 100,
},


{
    id: 38,
    name: "Virgin Mojito",
    category: "Mojito",
    image: "/VM.jpg",
    price: 80,
},



{
  id: 39,
  name: "Watermelon Mojito",
  category: "Mojito",
   image: "/WM.jpg",
  price: 80,
},

{
  id: 41,
  name: "Green Apple Mojito",
  category: "Mojito",
  image: "/GreenApple.jpg",
  price: 80,
},



{
  id: 42,
  name: "Veg Aloo Tikki Burger",
  category: "Burgers",
  image: "/VLT.jpg",
  price: 40,
},

{
  id: 43,
  name: "Special Veg Burger",
  category: "Burgers",
  image: "/SV.jpg",
  price: 50,
},

{
  id: 44,
  name: "Spicy Paneer Burger",
  category: "Burgers",
  image: "/SPB.jpg",
  price: 60,
},



{
  id: 45,
  name: "Cheese Burger",
  category: "Burgers",
   image: "/CB.png",
  price: 70,
},


{
  id: 46,
  name: "Non-Veg Burger",
  category: "Burgers",
   image: "/NonVeg.jpg",

  price: 70,
},


{
  id: 47,
  name: "Garlic Bread",
  category: "Garlic Breads",
  image: "/GB.jpg",
  price: 80,
},


{
  id: 48,
  name: "Veg Pocket",
  category: "Garlic Breads",
  image: "/VP.jpg",
  price: 95,
},

{
  id: 49,
  name: "Stuff Garlic Bread",
  category: "Garlic Breads",
  image: "/SGB.jpg",
  price: 99,
},

{
  id: 50,
  name: "Cheese Garlic Bread",
  category: "Garlic Breads",
  image: "/CGB.jpg",
  price: 110,
},


{
  id: 51,
  name: "Mushroom Garlic Bread",
  category: "Garlic Breads",
  image: "/MGB.png",
  price: 110,
},



{
  id: 52,
  name: "Add Cheesy Dip/Jalapenos Dip",
  category: "Garlic Breads",
  image: "/Ak.jpg",
  price: 20,
},


{
  id: 53,
  name: "Veg Taco",
  category: "Tacos",
  image: "/VT.jpg",
  price: 100,
},


{
  id: 54,
  name: "Non-Veg Taco",
  category: "Tacos",
  image: "/NT.jpg",
  price: 110,
},



{
  id: 55,
  name: "Veg Wraps",
  category: "Wraps",
   image: "/VW.jpg",
  price: 70,
},


{
  id: 56,
  name: "Paneer Wrap",
  category: "Wraps",
  image: "/PW.jpg",
  price: 80,
},



{
  id: 57,
  name: "Chicken Wrap",
  category: "Wraps",
  image: "/CHW.jpg",
  price: 90,
},


{
  id: 58,
  name: "Chocolava Cake",
  category: "Desserts",
  image: "/Cl.jpg",
  price: 80,
},


// {
//   id: 59,
//   name: "Chocolava Cake",
//   category: "Desserts",
//   price: 80,
// },

{
  id: 60,
  name: "Veg Grilled Sandwich",
  category: "Sandwich",
  image: "/VGS.jpg",
  price: 70,
},

{
  id: 61,
  name: "Grilled Paneer Sandwich",
  category: "Sandwich",
  image: "/PGS.jpg",

  price: 80,
},

{
  id: 62,
  name: "Grilled Chicken Sandwich",
  category: "Sandwich",
    image: "/GCS.jpg",

  price: 90,
},

{
  id: 62,
  name: "Corn and Cheese Sandwich",
  category: "Sandwich",
    image: "/C&CH.png",
  price: 110,
},


{
  id: 63,
  name: "French Fries(Salted)",
  category: "French Fries",
  image: "/VF.jpg",
  price: 70,
},


{
  id: 64,
  name: "Peri-Peri Fries",
  category: "French Fries",
  image: "/PP.jpg",
  price: 90,
},



{
  id: 65,
  name: "French Fries Large",
  category: "French Fries",
  image: "/FFL.jpg",
  price: 100,
},



{
  id: 66,
  name: "Cheesy Fries",
  category: "French Fries",
  image: "/CFr.jpg",
  price: 110,
},


{
  id: 67,
  name: "Margherita Pizza",
  category: "Veg Pizzas",
  price: 99, 
  image: "/MP.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 89,
  name: "Margherita Pizza",
  category: "Veg Pizzas",
  price: 385, 
  image: "/MP.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 90,
  name: "Margherita Pizza",
  category: "Veg Pizzas",
  price: 585, 
  image: "/MP.jpg", 
  isPopular: true,
  size: "Large",
},



{
  id: 68,
  name: "Cheese and Tomato",
  category: "Veg Pizzas",
  price: 99, 
  image: "/C&T.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 91,
  name: "Cheese and Tomato",
  category: "Veg Pizzas",
  price: 385, 
  image: "/C&T.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 92,
  name: "Cheese and Tomato",
  category: "Veg Pizzas",
  price: 585, 
  image: "/C&T.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 69,
  name: "Double Cheese Margherita(Extra Loaded)",
  category: "Veg Pizzas",
  price: 135, 
  image: "/EL.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 93,
  name: "Double Cheese Margherita(Extra Loaded)",
  category: "Veg Pizzas",
  price: 385, 
  image: "/EL.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 94,
  name: "Double Cheese Margherita(Extra Loaded)",
  category: "Veg Pizzas",
  price: 585, 
  image: "/EL.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 70,
  name: "Corn and Cheese Pizza",
  category: "Veg Pizzas",
  price: 135, 
  image: "/Corn&C.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 95,
  name: "Corn and Cheese Pizza",
  category: "Veg Pizzas",
  price: 385, 
  image: "/Corn&C.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 96,
  name: "Corn and Cheese Pizza",
  category: "Veg Pizzas",
  price: 585, 
  image: "/Corn&C.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 71,
  name: "Fresh Vegie",
  category: "Veg Pizzas",
  price: 135, 
  image: "/FV.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 97,
  name: "Fresh Vegie",
  category: "Veg Pizzas",
  price: 385, 
  image: "/FV.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 98,
  name: "Fresh Vegie",
  category: "Veg Pizzas",
  price: 585, 
  image: "/FV.jpg", 
  isPopular: true,
  size: "Large",
},
{
  id: 72,
  name: "Country Delight",
  category: "Veg Pizzas",
  price: 135, 
  image: "/CD.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 99,
  name: "Country Delight",
  category: "Veg Pizzas",
  price: 385, 
  image: "/CD.jpg", 
  isPopular: true,
  size: "Medium",
},


{
  id: 100,
  name: "Country Delight",
  category: "Veg Pizzas",
  price: 585, 
  image: "/CD.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 73,
  name: "Corn Crunch Spicy",
  category: "Veg Pizzas",
  price: 155, 
  image: "/CCS.jpg", 
  isPopular: true,
  size: "Regular",
},
{
  id: 101,
  name: "Corn Crunch Spicy",
  category: "Veg Pizzas",
  price: 385, 
  image: "/CCS.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 102,
  name: "Corn Crunch Spicy",
  category: "Veg Pizzas",
  price: 585, 
  image: "/CCS.jpg", 
  isPopular: true,
  size: "Medium",
},




{
  id: 74,
  name: "Spicy Panner",
  category: "Veg Pizzas",
  price: 175, 
  image: "/SP.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 103,
  name: "Spicy Panner",
  category: "Veg Pizzas",
  price: 175, 
  image: "/SP.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 104,
  name: "Spicy Panner",
  category: "Veg Pizzas",
  price: 385, 
  image: "/SP.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 75,
  name: "Makhni Tandoori Pizza",
  category: "Veg Pizzas",
  price: 585, 
  image: "/MT.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 105,
  name: "Makhni Tandoori Pizza",
  category: "Veg Pizzas",
  price: 385, 
  image: "/MT.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 106,
  name: "Makhni Tandoori Pizza",
  category: "Veg Pizzas",
  price: 585, 
  image: "/MT.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 76,
  name: "Farm Fresh",
  category: "Veg Pizzas",
  price: 155, 
  image: "/FF1.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 107,
  name: "Farm Fresh",
  category: "Veg Pizzas",
  price: 385, 
  image: "/FF1.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 108,
  name: "Farm Fresh",
  category: "Veg Pizzas",
  price: 585, 
  image: "/FF1.jpg", 
  isPopular: true,
  size: "Large",
},

// {
//   id: 77,
//   name: "Farm Fresh",
//   category: "Veg Pizzas",
//   price: 70, 
//   image: "/margherita-pizza.jpg", 
//   isPopular: true,
//   size: "Regular",
// },

{
  id: 78,
  name: "Veg Mexican",
  category: "Veg Pizzas",
  price: 175, 
  image: "/VM1.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 109,
  name: "Veg Mexican",
  category: "Veg Pizzas",
  price: 385, 
  image: "/VM1.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 110,
  name: "Veg Mexican",
  category: "Veg Pizzas",
  price: 585, 
  image: "/VM1.jpg", 
  isPopular: true,
  size: "Large",
},
{
  id: 79,
  name: "Veggie Spicy Crunch",
  category: "Veg Pizzas",
  price: 175, 
  image: "/VS.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 111,
  name: "Veggie Spicy Crunch",
  category: "Veg Pizzas",
  price: 385, 
  image: "/VS.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 112,
  name: "Veggie Spicy Crunch",
  category: "Veg Pizzas",
  price: 585, 
  image: "/VS.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 80,
  name: "Supreme Paneer Tadka",
  category: "Veg Pizzas",
  price: 175, 
  image: "/SPT.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 113,
  name: "Supreme Paneer Tadka",
  category: "Veg Pizzas",
  price: 385, 
  image: "/SPT.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 114,
  name: "Supreme Paneer Tadka",
  category: "Veg Pizzas",
  price: 585, 
  image: "/SPT.jpg", 
  isPopular: true,
  size: "Large",
},




{
  id: 81,
  name: "Vegie Deluxe",
  category: "Veg Pizzas",
  price: 205, 
  image: "/VD.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 115,
  name: "Vegie Deluxe",
  category: "Veg Pizzas",
  price: 385, 
  image: "/VD.jpg", 
  isPopular: true,
  size: "Medium",
},


{
  id: 116,
  name: "Vegie Deluxe",
  category: "Veg Pizzas",
  price: 585, 
  image: "/VD.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 82,
  name: "Italiano Pizza",
  category: "Veg Pizzas",
  price: 205, 
  image: "/It.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 117,
  name: "Italiano Pizza",
  category: "Veg Pizzas",
  price: 385, 
  image: "/It.jpg", 
  isPopular: true,
  size: "Medium",
},


{
  id: 118,
  name: "Italiano Pizza",
  category: "Veg Pizzas",
  price: 585, 
  image: "/It.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 83,
  name: "Pizza Genie",
  category: "Veg Pizzas",
  price: 205, 
  image: "/PG.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 119,
  name: "Pizza Genie",
  category: "Veg Pizzas",
  price: 385, 
  image: "/PG.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 120,
  name: "Pizza Genie",
  category: "Veg Pizzas",
  price: 585, 
  image: "/PG.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 84,
  name: "Veg Wonder",
  category: "Veg Pizzas",
  price: 205, 
  image: "/VegW1.png", 
  isPopular: true,
  size: "Regular",
},

{
  id: 121,
  name: "Veg Wonder",
  category: "Veg Pizzas",
  price: 385, 
  image: "/VegW1.png", 
  isPopular: true,
  size: "Medium",
},

{
  id: 122,
  name: "Veg Wonder",
  category: "Veg Pizzas",
  price: 585, 
  image: "/VegW1.png", 
  isPopular: true,
  size: "Large",
},


{
  id: 85,
  name: "Supreme Veg Exotica",
  category: "Veg Pizzas",
  price: 205, 
  image: "/SVE.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 123,
  name: "Supreme Veg Exotica",
  category: "Veg Pizzas",
  price: 445, 
  image: "/SVE.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 124,
  name: "Supreme Veg Exotica",
  category: "Veg Pizzas",
  price: 675, 
  image: "/SVE.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 86,
  name: "Veg Golden Delight",
  category: "Veg Pizzas",
  price: 205, 
  image: "/GD.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 125,
  name: "Veg Golden Delight",
  category: "Veg Pizzas",
  price: 385, 
  image: "/GD.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 126,
  name: "Veg Golden Delight",
  category: "Veg Pizzas",
  price: 585, 
  image: "/GD.jpg", 
  isPopular: true,
  size: "Large",
},



{
  id: 87,
  name: "Veg Supreme",
  category: "Veg Pizzas",
  price: 235, 
  image: "/VS.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 127,
  name: "Veg Supreme",
  category: "Veg Pizzas",
  price: 445, 
  image: "/VS.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 128,
  name: "Veg Supreme",
  category: "Veg Pizzas",
  price: 675, 
  image: "/VS.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 88,
  name: "Veg Cloud",
  category: "Veg Pizzas",
  price: 235, 
  image: "/VegC.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 129,
  name: "Veg Cloud",
  category: "Veg Pizzas",
  price: 445, 
  image: "/VegC.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 130,
  name: "Veg Cloud",
  category: "Veg Pizzas",
  price: 675, 
  image: "/VegC.jpg", 
  isPopular: true,
  size: "Large",
},



{
  id: 131,
  name: "Sausage Chicken",
  category: "Non Veg Pizzas",
  price: 119, 
  image: "/SausageCh.jpg", 
  isPopular: true,
  size: "Regular",
},



{
  id: 132,
  name: "Sausage Chicken",
  category: "Non Veg Pizzas",
  price: 385, 
  image: "/SausageCh.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 133,
  name: "Sausage Chicken",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/SausageCh.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 134,
  name: "Chicken Salami",
  category: "Non Veg Pizzas",
  price: 119, 
  image: "/SausageCh.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 135,
  name: "Chicken Salami",
  category: "Non Veg Pizzas",
  price: 385, 
  image: "/CSAL.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 136,
  name: "Chicken Salami",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/CSAL.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 137,
  name: "Spicy Chicken",
  category: "Non Veg Pizzas",
  price: 139, 
  image: "/SChicken.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 138,
  name: "Spicy Chicken",
  category: "Non Veg Pizzas",
  price: 429, 
  image: "/SChicken.jpg", 
  isPopular: true,
  size: "Medium",
},


{
  id: 139,
  name: "Spicy Chicken",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/SChicken.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 140,
  name: "Cheese and BBQ Chicken",
  category: "Non Veg Pizzas",
  price: 139, 
  image: "/SChicken.jpg", 
  isPopular: true,
  size: "Regular"
},

{
  id: 141,
  name: "Cheese and BBQ Chicken",
  category: "Non Veg Pizzas",
  price: 429, 
  image: "/SChicken.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 142,
  name: "Cheese and BBQ Chicken",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/C&BBQ.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 143,
  name: "Chicken Peri Peri",
  category: "Non Veg Pizzas",
  price: 149, 
  image: "/CPP.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 144,
  name: "Chicken Peri Peri",
  category: "Non Veg Pizzas",
  price: 429, 
  image: "/CPP.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 145,
  name: "Chicken Peri Peri",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/CPP.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 146,
  name: "Tikka Chicken",
  category: "Non Veg Pizzas",
  price: 149, 
  image: "/TC.jpg", 
  isPopular: true,
  size: "Regular",
},


{
  id: 147,
  name: "Tikka Chicken",
  category: "Non Veg Pizzas",
  price: 429, 
  image: "/TC.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 148,
  name: "Tikka Chicken",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/TC.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 149,
  name: "Golden Chicken",
  category: "Non Veg Pizzas",
  price: 149, 
  image: "/GC.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 150,
  name: "Golden Chicken",
  category: "Non Veg Pizzas",
  price: 429, 
  image: "/GC.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 151,
  name: "Mexician Chicken",
  category: "Non Veg Pizzas",
  price: 585, 
  image: "/GC.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 152,
  name: "Mexician Chicken",
  category: "Non Veg Pizzas",
  price: 179, 
  image: "/MC.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 153,
  name: "Mexician Chicken",
  category: "Non Veg Pizzas",
  price: 449, 
  image: "/MC.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 154,
  name: "Chicken Fiest",
  category: "Non Veg Pizzas",
  price: 199, 
  image: "/CF.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 155,
  name: "Chicken Fiest",
  category: "Non Veg Pizzas",
  price: 479, 
  image: "/CF.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 156,
  name: "Chicken Fiest",
  category: "Non Veg Pizzas",
  price: 649, 
  image: "/CF.jpg", 
  isPopular: true,
  size: "Large",
},


{
  id: 157,
  name: "Non Veg Supreme",
  category: "Non Veg Pizzas",
  price: 249, 
  image: "/margherita-pizza.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 158,
  name: "Non Veg Supreme",
  category: "Non Veg Pizzas",
  price: 499, 
  image: "/SNV.jpg", 
  isPopular: true,
  size: "Medium",
},

{
  id: 159,
  name: "Non Veg Supreme",
  category: "Non Veg Pizzas",
  price: 699, 
  image: "/SNV.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 160,
  name: "Metaza",
  category: "Non Veg Pizzas",
  price: 249, 
  image: "/SNV.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 161,
  name: "Metaza",
  category: "Non Veg Pizzas",
  price: 249, 
  image: "/Metaza.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 162,
  name: "Metaza",
  category: "Non Veg Pizzas",
  price: 499, 
  image: "/Metaza.jpg", 
  isPopular: true,
  size: "Medium",
},


{
  id: 163,
  name: "Metaza",
  category: "Non Veg Pizzas",
  price: 699, 
  image: "/Metaza.jpg", 
  isPopular: true,
  size: "Large",
},

{
  id: 164,
  name: "Papperoni Pizza",
  category: "Non Veg Pizzas",
  price: 249, 
  image: "/P.jpg", 
  isPopular: true,
  size: "Regular",
},

{
  id: 165,
  name: "Papperoni Pizza",
  category: "Non Veg Pizzas",
  price: 449, 
  image: "/P.jpg", 
  isPopular: true,
  size: "Medium(10)",
},


{
  id: 166,
  name: "Papperoni Pizza",
  category: "Non Veg Pizzas",
  price: 699, 
  image: "/P.jpg", 
  isPopular: true,
  size: "Large",
},


];

export default function MenuPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart, getCartCount } = useCart();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const categories = {
    'Veg Pizzas': {
      sizes: ['Regular (7")', 'Medium (10")', 'Large (13")']
    },
    'Non Veg Pizzas': {
      sizes: ['Regular (7")', 'Medium (10")', 'Large (13")']
    },

    'Burgers': {sizes : [] },
    'Garlic Breads': { sizes: [] },
    'Tacos': { sizes: [] },
    'French Fries': { sizes: [] },
    'Sandwich': { sizes: [] },
    'Wraps': { sizes: [] },
    'Desserts': { sizes: [] },
    'Pasta': { sizes: [] },
    'Snacks': { sizes: [] },
    'Shakes': { sizes: [] },
    'Mojito': { sizes: [] },
  };



  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setExpandedCategory(expandedCategory === category ? null : category);
    
    // Close filter dropdown on mobile after selecting a category
    // if (window.innerWidth <= 768) {
    //   setTimeout(() => {
    //     setShowFilter(false);
    //   }, 300); // Small delay to allow the selection to be visible

     if (window.innerWidth <= 768 && !['Veg Pizzas', 'Non Veg Pizzas'].includes(category)) {
    setTimeout(() => {
      setShowFilter(false);
    }, 300);
    }
  };

  const toggleSize = (category, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [category]: prev[category]?.includes(size)
        ? prev[category].filter(s => s !== size)
        : [...(prev[category] || []), size]
    }));

     if (window.innerWidth <= 768) {
    setTimeout(() => {
      setShowFilter(false);
    }, 300);
  }
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    if (!showFilter) {
      setExpandedCategory(null);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes({});
  };

  const hasAnyFilter = selectedCategories.length > 0 || 
                      Object.values(selectedSizes).some(sizes => sizes.length > 0);

  const isCategoryExpanded = (category) => expandedCategory === category;

  const updateQuantity = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change)
    }));
  };

//    const handleaddToCart = (pizza, quantity) => {
//   // Add your cart logic here
//   console.log(`Added ${quantity} ${pizza.name} to cart`);
//   // Example: You might want to use a context or state management for cart
//   // setCartItems(prev => [...prev, { ...pizza, quantity }]);
// };



  



    const filteredPizzas = pizzas.filter(pizza => {
//   // If no filters are selected, show all pizzas (except pasta)
//   // if (selectedCategories.length === 0 && 
//   //     Object.values(selectedSizes).every(arr => arr.length === 0)) {
//   //   return pizza.category !== "Pasta"; // Hide pasta by default


    



 const mainCategories = ['Veg Pizzas', 'NonVeg Pizzas'];


      
  // If no filters are selected, show only main categories
  if (selectedCategories.length === 0 && 
      Object.values(selectedSizes).every(arr => arr.length === 0)) {
    return mainCategories.includes(pizza.category);
  }
//   // if (selectedCategories.length === 0 && 
//   //     Object.values(selectedSizes).every(arr => arr.length === 0)) {
//   //   // Show items that are not in the pizza categories or don't have a size specified
//   //   return !['Veg Pizzas', 'NonVeg Pizzas'].includes(pizza.category) || !pizza.size;
//   // }



//   //  if (selectedCategories.length === 0 && 
//   //     Object.values(selectedSizes).every(arr => arr.length === 0)) {
//   //   return !['Veg Pizzas', 'NonVeg Pizzas'].includes(pizza.category);
//   // }


//     // Filter by category

    const categoryMatch = selectedCategories.length === 0 || 
                         selectedCategories.includes(pizza.category);


    
//     // Filter by size
    const sizeMatch = Object.entries(selectedSizes).every(([cat, sizes]) => {
      if (sizes.length === 0) return true;
      if (cat !== pizza.category) return true;
      return sizes.some(size => pizza.size?.includes(size.split(' ')[0]));
    });

    
    return categoryMatch && sizeMatch;
});




// const mainCategories = ['Veg Pizzas', 'Non Veg Pizzas'];

// const filteredPizzas = pizzas.filter(pizza => {

//   const noCategorySelected = selectedCategories.length === 0;
//   const noSizeSelected = Object.values(selectedSizes).every(arr => arr.length === 0);

//   const isSizePizza =
//     pizza.size &&
//     ['Regular', 'Medium', 'Large'].some(s =>
//       pizza.size.toLowerCase().includes(s)
//     );

//   // 🔹 CASE 1: No filters → hide size pizzas
//   if (noCategorySelected && noSizeSelected) {
//     return mainCategories.includes(pizza.category) && !isSizePizza;
//   }

//   // 🔹 Category match
//   const categoryMatch =
//     noCategorySelected || selectedCategories.includes(pizza.category);

//   // 🔹 Size match
//   const sizeMatch = Object.entries(selectedSizes).some(([cat, sizes]) => {
//     if (sizes.length === 0) return false;
//     if (cat !== pizza.category) return false;

//     return sizes.some(size =>
//       pizza.size?.toLowerCase().includes(size.split(' ')[0].toLowerCase())
//     );
//   });

//   // 🔹 If size filter is active → must match size + category
//   if (!noSizeSelected) {
//     return categoryMatch && sizeMatch;
//   }

//   // 🔹 If only category filter is active → hide size pizzas
//   return categoryMatch && !isSizePizza;
// });


// const mainCategories = ['Veg Pizzas', 'Non Veg Pizzas'];

// const filteredPizzas = pizzas.filter(pizza => {

//   const noCategorySelected = selectedCategories.length === 0;
//   const noSizeSelected = Object.values(selectedSizes).every(arr => arr.length === 0);

//   const isSizePizza =
//     pizza.size &&
//     ['Regular(7")', 'Medium(10")', 'Large(13")'].includes(pizza.size.toLowerCase());

//   // 🔴 RULE 1: Default screen → hide all size pizzas
//   if (noCategorySelected && noSizeSelected) {
//     return mainCategories.includes(pizza.category) && !isSizePizza;
//   }

//   // 🔴 RULE 2: If NO size filter but category selected → still hide size pizzas
//   if (noSizeSelected) {
//     return (
//       selectedCategories.includes(pizza.category) &&
//       !isSizePizza
//     );
//   }

//   // 🔴 RULE 3: When size filter is ON → show only matching ones
//   const categoryMatch =
//     noCategorySelected || selectedCategories.includes(pizza.category);

//   const sizeMatch = Object.entries(selectedSizes).some(([cat, sizes]) => {
//     if (sizes.length === 0) return false;
//     if (cat !== pizza.category) return false;

//     return sizes.some(size =>
//       pizza.size?.toLowerCase() === size.toLowerCase()
//     );
//   });

//   return categoryMatch && sizeMatch;
// });


   const handleAddToCart = (pizza, quantity) => {
    addToCart(pizza, quantity);
     showNotification(`${pizza.name} (${quantity}x) added to cart!`, 'success');
    // Reset quantity after adding to cart
    setQuantities(prev => ({ ...prev, [pizza.id]: 1 }));
  };

  
  // Promotion Banner Component
  const PromotionBanner = () => (
    <div className="promotion-banner">
      <div className="promotion-content">
        <span className="promotion-tag">Special Offer</span>
        <p className="promotion-text">
          <span className="promotion-highlight">Buy One Get One Free</span> on Medium and Large Pizzas - Every Day!
        </p>
      </div>
    </div>
  );

  return (
    <div className="menu-page">
      <PromotionBanner />
      <header className="menu-header">
        <div className="menu-header-content">
          <div className="menu-header-text">
            <h1 className="menu-title">
              <FaUtensils className="menu-icon" />
              Our Menu
            </h1>
          </div>
          <div className="menu-actions">
            <div className="filter-container">
              <button 
                className="filter-btn" 
                onClick={toggleFilter}
                aria-expanded={showFilter}
                aria-label="Filter menu items"
              >
                <FaFilter className="filter-icon" />
                <span>Filter</span>
                {showFilter ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
              </button>


              {showFilter && (
                <div className="filter-dropdown">
                  <div className="filter-dropdown-header">
                    <h3>Filter by Category</h3>
                    {hasAnyFilter && (
                      <button

                        className="clear-filters"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </button>

                    )}
                  </div>
                  <div className="filter-options">
                    {Object.entries(categories).map(([category, details]) => (
                      <div key={category} className="filter-category">
                        <label 
                          className={`filter-option ${isCategoryExpanded(category) ? 'expanded' : ''}`}
                          onClick={() => toggleCategory(category)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => {}}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="checkmark"></span>
                          <span className="category-name">{category}</span>
                          {details?.sizes && (
                            <span className="expand-icon">
                              {isCategoryExpanded(category) ? <FaChevronUp /> : <FaChevronRight />}
                            </span>
                          )}
                        </label>
                        
                        {isCategoryExpanded(category) && details?.sizes && (
                          <div className="size-options">
                            {details.sizes.map(size => (
                              <label key={size} className="size-option">
                                <input
                                  type="checkbox"
                                  checked={selectedSizes[category]?.includes(size) || false}
                                  onChange={() => toggleSize(category, size)}
                                />
                                <span className="checkmark"></span>
                                {size}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
 
              
          <button 
              className="header-cart-btn"
              onClick={() => navigate('/cart')}
              >

              <FaShoppingCart className="cart-icon" />
              Go to Cart
              <span className="cart-badge">{getCartCount()}</span>
            </button>     

          </div>
        </div>
      </header>


      {/* Pizza Grid Section */}
      <div className="menu-items-container">
        <h2 className="menu-category-title">
{selectedCategories.length === 0 
      ? "Our Delicious Pizzas" 
      : `Our ${selectedCategories.join(', ')}`}
      </h2>
        <div className="pizza-grid">
          
          {filteredPizzas.length >0 ? (
            filteredPizzas.map(pizza => (
            <div key={pizza.id} className="pizza-card">
              {pizza.isPopular && (
                <div className="popular-tag">
                  <FaFire /> Popular
                </div>
              )}
              
              <div className="pizza-image-container">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="pizza-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-pizza.jpg';
                  }}
                />
              </div>
              
              
              <div className="pizza-info">
                <div className="pizza-header">
                  <h3 className="pizza-name">{pizza.name}</h3>
                  <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{pizza.rating }</span>
                  </div>
                </div>
                
                <p className="pizza-category">{pizza.category} • {pizza.size}</p>
                

              <div className="price-section">
                <span className="price">₹{pizza.price}</span>
              <div className="cart-actions">
  <div className="quantity-selector">
    <button 
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(pizza.id, -1);
      }}
      className="quantity-btn"
    >

                  <FaMinus />
                     </button>
    <span className="quantity">{quantities[pizza.id] || 1}</span>
    <button 
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(pizza.id, 1);
      }}
      className="quantity-btn"
    >
                <FaPlus />
                    </button>
                  </div>
                
                <button 
                  className="cart-btn"
                  onClick={(e) => {
      e.stopPropagation();
      handleAddToCart(pizza, quantities[pizza.id] || 1);
    }}
  >
   
                  <FaShoppingCart className="cart-icon" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
       <div className="no-items-message">
              No items found matching your filters.
            </div>
    )}

        </div>
      </div>
    </div>
  );
}

