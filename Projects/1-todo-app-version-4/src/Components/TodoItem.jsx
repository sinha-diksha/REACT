import { MdDeleteOutline } from "react-icons/md";
const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger kg-b"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
