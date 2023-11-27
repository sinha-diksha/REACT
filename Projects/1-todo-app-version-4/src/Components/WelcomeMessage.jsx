import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";
const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};
export default WelcomeMessage;
