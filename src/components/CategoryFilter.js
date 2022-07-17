import React from "react";


function CategoryFilter({categories, handleCatClick,clickedText}) {

 const buttonList= categories.map((category)=>{
    return <button 
    className={category === clickedText?"selected":""} 
    onClick={handleCatClick} 
    key={category}>{category}</button>
  }) 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonList}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
