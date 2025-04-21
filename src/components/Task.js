import React from "react";

function Task({ task, onDeleteTask }) {
  const handleClick = () => {
    onDeleteTask(task.text); // Or use a unique id if available
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
