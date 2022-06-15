import React, { useState } from "react";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const deletIcon =
  "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/undefined/external-delete-multimedia-kiranshastry-solid-kiranshastry.png";
export default function Todo() {
  const [items, setValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    //console.log(items);
  };

  const deletTodolist = (event) => {
    const name = event.target.id;
    console.log(name.id);
    const element = document?.getElementById(`${name}`);
    element.parentElement.remove();
  };
  const handleClick = (ev) => {
    if(items===""){
      alert("Please enter text")
    }else{
      setTodoItems((prevItem) => {
      return [...prevItem, items]})
    }
    // console.log(todoArray);
  };
  const todoDisplayArray = [
    <div id="col-rev" className="column-direction">
      {todoItems.map((todoItem, index) => (
        <div id="col" className="todolist" key={index}>
          <h4 className="todo-item-heading">{`${year}-${month}-${day} @ ${hour}:${minute}:${second}`}</h4>
          {todoItem}
          <img
            src={deletIcon}
            id={index}
            alt="delete icon"
            className="btnRemove"
            onClick={deletTodolist}
          />
        </div>
      ))}
    </div>,
  ];
  return (
    <>
      <div className="todo">
        <div className="todoContainer">
          <h2>My-Todo Lists</h2>
          <textarea
          placeholder="Start writing here ....."
            row="10"
            column=" 50"
            value={items}
            onChange={handleChange}
          ></textarea>
          <button className="todo-btn" onClick={handleClick}>
            Add
          </button>
        </div>
        {todoDisplayArray}
      </div>
    </>
  );
}
