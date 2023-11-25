import { useState } from "react";
import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./Store/todo-items-store";

import "./App.css";
import TodoItem from "./Components/TodoItem";

function App() {
  const InitialtodoItems = [];
  const [todoItems, settodoItems] = useState(InitialtodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    settodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`item deleted ${todoItemName}`);
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItem);
  };
  return (
    <TodoItemsContext.Provider value={[]}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}>
          {" "}
        </TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
