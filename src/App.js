import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import REST from "./REST";
import LogoutContainer from "./LogoutContainer";

const baseUrl = "http://localhost:8000/api/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      user: this.props.location.state.id,
      updatedValue: "",
      checked: "f",
      checkID: 0,
      currentItem: { text: "", key: "" }
    };
    this.rest = new REST();
  }

  setCurrentTodo = currentItem => {
    this.setState({ currentItem: currentItem });
  };

  addTodoItem = () => {
    console.log(this.state.user);
    if (this.state.currentItem.text !== "") {
      const data = {
        url: baseUrl + "todos",
        body: JSON.stringify({
          text: this.state.currentItem.text,
          userId: this.state.user
        })
      };
      this.rest
        .handlePOST(data)
        .then(item => {
          let prevState = this.state.items.slice();
          prevState.push(item);
          this.setState({ items: prevState });
        })
        .catch(err => err);
    }
  };

  deleteTodoItem = item => {
    const url = baseUrl + "todos/" + item;
    this.rest.handleDELETE(url);
    let prevState = [...this.state.items];
    console.log(prevState);
    let index;
    for (let i in prevState) {
      if (prevState[i].id === item) {
        index = i;
      }
    }
    prevState.splice(index, 1);
    this.setState({ items: prevState });
  };

  setUpdateTodo = item => {
    this.setState({ updatedValue: item });
  };

  updateTodo = item => {
    if (this.state.updatedValue !== "") {
      const data = {
        url: baseUrl + "todos/" + item,
        body: JSON.stringify({ text: this.state.updatedValue })
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
    this.setState({ checkID: id, checked: marked });
  };

  makeTodoList = () => {
    const url = baseUrl + "todos/users/" + this.state.user;
    this.rest.handleGET(url).then(items => this.setState({ items: items }));
  };

  actions = {
    setCurrentTodo: this.setCurrentTodo,
    addTodoItem: this.addTodoItem,
    makeTodoList: this.makeTodoList,
    deleteTodoItem: this.deleteTodoItem,
    setUpdateTodo: this.setUpdateTodo,
    markDone: this.markDone,
    updateTodo: this.updateTodo
  };

  render() {
    return (
      <div>
        <div className="headDiv">
          <h1>Todos</h1>
        </div>
        <div className="logout">
          <LogoutContainer />
        </div>
        <TodoList
          actions={this.actions}
          currentItem={this.state.currentItem}
          items={this.state.items}
          updatedValue={this.state.updatedValue}
          checkID={this.state.checkID}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default App;
