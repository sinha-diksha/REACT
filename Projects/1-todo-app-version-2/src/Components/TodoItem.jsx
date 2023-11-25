import { FaMinusCircle } from "react-icons/fa";

function TodoItem({ todoName, todoDate }) {
  console.log(1);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-sm-6 input1">{todoName}</div>
        <div className="col-sm-4 input1">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" class="btn btn-danger kg-b">
            <FaMinusCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
