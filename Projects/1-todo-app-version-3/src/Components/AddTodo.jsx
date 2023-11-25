function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter your task"></input>
        </div>
        <div className="col-sm-4">
          <input type="date"></input>
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success kg-b">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
