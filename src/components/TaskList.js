import React from "react";
import Task from "./Task"


function TaskList({ tasks,handleDelete}) {
  console.log(tasks)
  const taskList = tasks
  .map((task) => {
    return <Task 
    className={"task"} 
    handleDelete={handleDelete} text={task.text} 
    category={task.category} key={task.text} />
  })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
