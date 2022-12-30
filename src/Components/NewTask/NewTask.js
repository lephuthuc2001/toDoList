import React from "react";

function NewTask({ onAddNewTasks }) {
  const submitHandler = (event) => {
    onAddNewTasks({
      id: Math.random().toString(36),
      title: event.target["0"].value,
      isDone: false,
    });
    event.target.querySelector("#newitem").value = "";
  };
  return (
    <form action="#" onSubmit={submitHandler} className="form">
      <label htmlFor="newitem">Add to the Todo List</label>
      <input type="text" id="newitem" />
      <button type="submit">Add item</button>
    </form>
  );
}

export default NewTask;
