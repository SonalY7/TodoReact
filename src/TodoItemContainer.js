import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemContainer extends Component {
  render() {
    return (
      <div>
        <TodoItem actions={this.actions} todo={this.props.todoItem} />
      </div>
    );
  }
}

export default TodoItemContainer;
