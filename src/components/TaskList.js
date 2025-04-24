import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Assumes text is unique
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.text)} // Proper prop name
        />
      ))}
    </div>
  );
}

export default TaskList;