import { useRef } from "react";
import TodoItem from "./TodoItem";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const noOfClicks = useRef(0);

  const handleAddButtonClicked = () => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter your task"
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-sm-4">
          <input type="date" ref={dueDateElement}></input>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success kg-b">
            <MdOutlineLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
