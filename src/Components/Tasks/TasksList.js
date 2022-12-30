import React from "react";
import Task from "./Task";
function TasksList({ tasks, onDone, onDelete }) {
  const tasksList = (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          isDone={task.isDone}
          onDone={onDone}
          onDelete={onDelete}
          id={task.id}
        />
      ))}
    </ul>
  );
  let content = tasks.length === 0 ? <h2>No tasks found</h2> : tasksList;
  return content;
}

export default TasksList;
