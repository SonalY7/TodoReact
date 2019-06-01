import React, { Component } from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import UpdateMarkedDone from "./updateMarkedDone";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTodoItem: "",
      todoId: 0
    };
  }

  handleCheck = e => {
    UpdateMarkedDone(e.target.value, e.target.checked);
  };

  handleInputChange = e => {
    this.setState({ updatedTodoItem: e.target.value });
  };

  render() {
    return (
      <div>
        <UpdateMarkedDone todo={this.props.todo} />
        <input
          className="inputUpdateText"
          type="text"
          defaultValue={this.props.todo.text}
          onChange={this.handleInputChange}
        />
        <UpdateTodo id={this.props.todo.id} text={this.state.updatedTodoItem} />
        <DeleteTodo id={this.props.todo.id} />
      </div>
    );
  }
}

export default TodoItem;
