import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {
  const [currentCategory,setCurrentCategory] = useState("Produce")
  const [currentText,setCurrentText] = useState("")

  const onSelectChange = (e) =>{
    setCurrentCategory(e.target.value)
  }

  const onInputChange = (e) =>{
    setCurrentText(e.target.value)
  }

  const onFormSubmit = (e) =>{
    e.preventDefault()
    const newItem = {
      id : uuid(),
      name : currentText,
      category: currentCategory
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={onFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onInputChange} value={currentText}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onSelectChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
