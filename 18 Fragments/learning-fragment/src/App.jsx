import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FoodItems from "./Components/foodItems";
import ErrorMessage from "./Components/ErrorMessage";
import FoodInput from "./Components/FoodInput";
import Container from "./Components/Container";

import React from "react";

function App() {
  // let foodItems = [

  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];

  let [foodItems, setFoodItem] = useState([]);
  // let [textToShow, setTextState] = useState("enter the list");
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItem(newItem);
    }
  };

  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h1>I am still hungry</h1>;
  // }
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>

        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
