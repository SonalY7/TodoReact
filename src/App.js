import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Logout from "./Logout";

class App extends Component {
  componentDidMount() {
    if (!localStorage.getItem("auth_token")) {
      console.log("no token");
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <div className="headDiv">
          <h1>Todos</h1>
        </div>
        <div className="logout">
          <Logout />
        </div>
        {/* <Todo /> */}
        <TodoList />
      </div>
    );
  }
}

export default App;
