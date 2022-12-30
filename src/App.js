import React, { useState } from "react";

import "./App.css";
import NewTask from "./Components/NewTask/NewTask";
import TasksList from "./Components/Tasks/TasksList";
import TasksFilter from "./Components/TasksFilter/TasksFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const addTasksHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const checkDoneHandler = (id) => {
    const doneTask = tasks.find((task) => task.id === id);
    doneTask.isDone = !doneTask.isDone;
    setTasks([...tasks]);
  };

  const checkDeleteHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const incompletedTasksFilteredHandler = () => {
    setIsFiltered((prevIsFiltered) => {
      return !prevIsFiltered;
    });
  };
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="quote">Get one item done at a time.</div>
      <TasksList
        tasks={
          isFiltered ? tasks.filter((task) => task.isDone === false) : tasks
        }
        onDone={checkDoneHandler}
        onDelete={checkDeleteHandler}
      />
      <TasksFilter
        isFiltered={isFiltered}
        filter={incompletedTasksFilteredHandler}
      />
      <NewTask onAddNewTasks={addTasksHandler} />
    </div>
  );
}

export default App;
