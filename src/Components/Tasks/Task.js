import React from "react";

function Task({ title, onDone, id, onDelete, isDone }) {
  const checkDoneHandler = () => {
    onDone(id);
  };

  const deleteTasksHandler = (event) => {
    event.target.parentNode.parentNode.classList.add("fall");
  };
  if (!isDone) {
    return (
      <li
        onTransitionEnd={(e) => {
          onDelete(id);
        }}
      >
        <span className="label">{title}</span>
        <div className="actions">
          <input
            onChange={checkDoneHandler}
            type="checkbox"
            className="btn-action btn-action-done"
            checked={isDone}
          />
          <button
            onClick={deleteTasksHandler}
            className="btn-action btn-action-delete"
          >
            ❌
          </button>
        </div>
      </li>
    );
  }
  if (isDone) {
    return (
      <li
        onTransitionEnd={(e) => {
          onDelete(id);
        }}
        className="done"
      >
        <span className="label">{title}</span>
        <div className="actions">
          <input
            onChange={checkDoneHandler}
            type="checkbox"
            className="btn-action btn-action-done"
            checked={isDone}
          />
          <button
            onClick={deleteTasksHandler}
            className="btn-action btn-action-delete"
          >
            ❌
          </button>
        </div>
      </li>
    );
  }
}

export default Task;
