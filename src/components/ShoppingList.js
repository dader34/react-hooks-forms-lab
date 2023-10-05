import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentText,setCurrentText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onSearchChange = (e) =>{
    setCurrentText(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (currentText && item.category === (selectedCategory === "All" ? item.category : selectedCategory)){
      return item.name.toLowerCase().includes(currentText.toLowerCase())
    }
    
    if (selectedCategory === "All") return true;
    return (item.category === selectedCategory);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} currentText={currentText} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
