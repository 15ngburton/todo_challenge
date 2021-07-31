import React from "react";
import './todo.css';
import checked_checkbox from "./checkbox_checked.png"
import unchecked_checkbox from "./checkbox_unchecked.png"
import edit_icon from "./edit_icon.png"
import trash_icon from "./trash_icon.png"

const TodoItem = (props) => {
  function edit_description() {
    // Changes state to allow edits to todo item
  }

  function change_completion() {
    // props.complete = !(props.complete)
  }

  function delete_item() {
    // Changes props to remove item, and sends changes to db
  }

  function box_checked(complete) {
    if(complete){
      return checked_checkbox
    }
    return unchecked_checkbox
  }

  return (
    <div>
      <img
        className="todo_icon"
        src={box_checked(props.complete)}
        alt="completion button"
        onClick={change_completion()} 
      />
      <span className="description">{props.description}</span>
      <img
        className="todo_icon"
        src={edit_icon}
        alt="edit button" 
        onClick={edit_description()}
      />
      <img
        className="todo_icon"
        src={trash_icon}
        alt="delete button"
        onClick={delete_item()}
      />
      <hr />
    </div>
  );
};

export default TodoItem;