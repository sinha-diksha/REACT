function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-sm-6">
          <input type="text" placeholder="Enter your task"></input>
        </div>
        <div class="col-sm-4">
          <input type="date"></input>
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success kg-b">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
