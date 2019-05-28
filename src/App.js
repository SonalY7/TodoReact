import React, { Component } from "react";
import "./App.css";
import LogoutContainer from "./LogoutContainer";
import TodoContainer from "./TodoContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="headDiv">
          <h1>Todos</h1>
        </div>
        <div className="logout">
          <LogoutContainer />
        </div>
        <TodoContainer user={this.props.location.state.id} />
      </div>
    );
  }
}

export default App;
