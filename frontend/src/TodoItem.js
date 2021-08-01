import React from "react";
import './todo.css';
import checked_checkbox from "./checkbox_checked.png"
import unchecked_checkbox from "./checkbox_unchecked.png"
import edit_icon from "./edit_icon.png"
import trash_icon from "./trash_icon.png"
import axios from "axios"

const TodoItem = (props) => {
  function edit_description() {
    // TODO: CREATE FORM
    // TODO: PUT REQUEST
    // TODO: CHANGE REACT DESCRIPTION 
  }

  function change_completion() {
    axios.put('http://localhost:3000/todo_items/'.concat(String(props.id)), { complete: !(props.complete) })
    props.complete = !(props.complete)
  }

  function delete_item() {
    axios.put('http://localhost:3000/todo_items/'.concat(String(props.id)), { active: false})
    // TODO: CHANGE REACT DELETION
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
        onClick={change_completion} 
      />
      <span className="description">{props.description}</span>
      <img
        className="todo_icon"
        src={edit_icon}
        alt="edit button" 
        onClick={edit_description}
      />
      <img
        className="todo_icon"
        src={trash_icon}
        alt="delete button"
        onClick={delete_item}
      />
      <hr />
    </div>
  );
};

export default TodoItem;