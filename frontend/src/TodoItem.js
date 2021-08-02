import React from "react";
import './todo.css';
import checked_checkbox from "./checkbox_checked.png"
import unchecked_checkbox from "./checkbox_unchecked.png"
import trash_icon from "./trash_icon.png"
import axios from "axios"
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description, 
      complete: this.props.complete, 
      id: this.props.id,
      active: this.props.active
    }
  }

  render() {
    function _edit_description({value}) {
      axios.put(
        'http://localhost:3000/todo_items/'.concat(String(this.state.id)),
        { description:  value }
      )
      this.setState({description: value})
    }
    
    function _change_completion() {
      axios.put(
        'http://localhost:3000/todo_items/'.concat(String(this.state.id)),
        { complete: !(this.state.complete) }
      )
      this.setState({complete: !(this.state.complete)})
    }
    
    function _delete_item() {
      axios.put(
        'http://localhost:3000/todo_items/'.concat(String(this.state.id)),
        { active: false }
      )
      this.setState({active: false})
    }
    
    function _box_checked() {
      if(this.state.complete){
        return checked_checkbox
      }
      return unchecked_checkbox
    };

    const edit_description = _edit_description.bind(this);
    const change_completion = _change_completion.bind(this);
    const delete_item = _delete_item.bind(this);
    const box_checked = _box_checked.bind(this);

    if(this.state.active === false){
      return null;
    }

    return(
      <div>
        <img
          className="todo_icon"
          src={box_checked()}
          alt="completion button"
          onClick={change_completion} 
        />
        <EditText 
          defaultValue={this.state.description}
          onSave={edit_description}
        />
        <img
          className="todo_icon"
          src={trash_icon}
          alt="delete button"
          onClick={delete_item}
        />
        <hr />
      </div>
    )
  }
};

export default TodoItem;