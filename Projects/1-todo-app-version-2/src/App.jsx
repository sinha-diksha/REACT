import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import "./App.css";

import TodoItems from "./Components/TodoItems";
import TodoItem from "./Components/TodoItem";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem></TodoItem>
    </center>
  );
}

export default App;
