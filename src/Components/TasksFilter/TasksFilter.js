import React from "react";

function TasksFilter({ isFiltered, filter }) {
  const filterHandler = () => {
    filter();
  };
  return (
    <div className="filter-wrapper">
      <label htmlFor="filter" className="filter-label">
        Show incompleted task only
      </label>
      <input
        onChange={filterHandler}
        type="checkbox"
        id="filter"
        checked={isFiltered}
      />
    </div>
  );
}

export default TasksFilter;
