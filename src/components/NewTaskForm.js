import React from "react";
import { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [catSelected,setCatSelected]=useState("Code")
  const [inputData, setInputData]=useState("")

  function handleOptionSelected(e){
    setCatSelected(e.target.value)
  }
  function handleInput(e){
    setInputData(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text:inputData, category:catSelected})
  }
 const optionList= categories.filter(cat=>cat!=="All").map((cat,index)=>{
    return <option key={index}>{cat}</option>
  })
  return (
    <form onSubmit={handleSubmit}  className="new-task-form">
      <label>
        Details
        <input onChange={handleInput} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleOptionSelected} name="category">
          {optionList}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
