function TodoItem2() {
  let todoName = "Go to college";
  let todoDate = "04/10/23";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-4">{todoDate}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger kg-b">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
