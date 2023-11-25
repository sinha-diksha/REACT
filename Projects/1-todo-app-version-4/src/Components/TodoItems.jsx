import TodoItem from "./TodoItem";
import { useContext } from "react";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../Store/todo-items-store";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  const todoItemsFromContext = useContext(TodoItemsContext);
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          key={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
