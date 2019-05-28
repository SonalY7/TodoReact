import React, { Component } from "react";
import REST from "./REST";
import TodoItem from "./TodoItem";

const baseUrl = "http://localhost:8000/api/";

class TodoItemContainer extends Component {
  constructor(props) {
    super(props);
    this.rest = new REST();
  }

  deleteTodoItem = item => {
    const url = baseUrl + "todos/" + item;
    this.rest.handleDELETE(url).then(() => this.props.makeTodoList());
  };

  updateTodo = (id, updatedText) => {
    if (updatedText !== "") {
      const data = {
        url: baseUrl + "todos/" + id,
        body: JSON.stringify({ text: updatedText })
      };
      this.rest.handlePUT(data);
    }
  };

  markDone = (id, marked) => {
    const data = {
      url: baseUrl + "donetodos/" + id,
      body: JSON.stringify({ done: marked })
    };
    this.rest.handlePUT(data);
  };

  actions = {
    deleteTodoItem: this.deleteTodoItem,
    setUpdateTodo: this.setUpdateTodo,
    markDone: this.markDone,
    updateTodo: this.updateTodo
  };

  render() {
    return (
      <div>
        <TodoItem actions={this.actions} todo={this.props.todo} />
      </div>
    );
  }
}

export default TodoItemContainer;
