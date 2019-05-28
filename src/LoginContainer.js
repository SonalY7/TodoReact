import React, { Component } from "react";
import REST from "./REST";
import Login from "./Login";

const baseUrl = "http://localhost:8000/api/";

class LoginContainer extends Component {
  constructor() {
    super();
    this.rest = new REST();
    this.state = {
      username: "",
      password: "",
      error: "",
      id: ""
    };
  }

  setUsername = username => {
    this.setState({ username: username });
  };

  setPassword = password => {
    this.setState({ password: password });
  };

  handleLogin = () => {
    const data = {
      url: baseUrl + "users/login",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    this.rest.handlePOST(data).then(result => {
      if (result.msg === "ok") {
        const { history } = this.props;
        history.push("/todos", { id: result.id });
      } else {
        this.setState({ error: result.msg });
      }
    });
  };

  actions = {
    setUsername: this.setUsername,
    setPassword: this.setPassword,
    handleLogin: this.handleLogin
  };

  render() {
    return (
      <section>
        <Login actions={this.actions} error={this.state.error} />
      </section>
    );
  }
}

export default LoginContainer;
