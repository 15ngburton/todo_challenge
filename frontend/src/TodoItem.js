import React from "react";

const TodoItem = (props) => {
  function edit_description() {
    // Changes state to allow edits to todo item
  }

  function change_completion() {
    // Changes props to NOT(complete) and sends changes to db
  }

  function delete_item() {
    // Changes props to remove item, and sends changes to db
  }

  return (
    <div>
      <img src="/" alt="completion button" onClick={change_completion()} />
      <span>{props.description}</span>
      <img src="/" alt="edit button" onClick={edit_description()} />
      <img src="/" alt="delete button" onClick={delete_item()} />
    </div>
  );
};

export default TodoItem;
