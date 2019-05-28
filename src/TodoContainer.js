import React, { Component } from "react";
import REST from "./REST";
import Todo from "./Todo";

const baseUrl = "http://localhost:8000/api/";
const _ = require("lodash");

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.rest = new REST();
  }

  addTodoItem = currentItem => {
    if (currentItem !== "") {
      const data = {
        url: baseUrl + "todos",
        body: JSON.stringify({
          text: currentItem,
          userId: this.props.user
        })
      };
      this.rest
        .handlePOST(data)
        .then(item => {
          this.setState({ items: _.concat(this.state.items, item) });
        })
        .catch(err => err);
    }
  };

  makeTodoList = () => {
    const url = baseUrl + "todos/users/" + this.props.user;
    this.rest.handleGET(url).then(items => this.setState({ items: items }));
  };

  actions = {
    setCurrentTodo: this.setCurrentTodo,
    addTodoItem: this.addTodoItem,
    makeTodoList: this.makeTodoList
  };

  render() {
    return (
      <div>
        <Todo
          actions={this.actions}
          currentItem={this.state.currentItem}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default TodoContainer;
