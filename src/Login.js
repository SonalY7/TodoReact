import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      token: "",
      error: ""
    };
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleLogIn = e => {
    e.preventDefault();
    const { history } = this.props;
    const username = this.state.username;
    const password = this.state.password;
    fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
      .then(res => res.json())
      .then(result => {
        if (result.msg === "ok") {
          localStorage.setItem("auth_token", result.token);
          history.push("/todos");
        } else {
          this.setState({ error: "Invalid login!" });
        }
      });
  };

  render() {
    return (
      <div className="loginDiv">
        <form className="loginForm">
          <div className="nameDiv">
            <input
              className="nameInput"
              placeholder="Username.."
              type="text"
              onChange={this.handleUsername}
            />
          </div>
          <div className="pswdDiv">
            <input
              className="pswdInput"
              placeholder="Password.."
              type="password"
              onChange={this.handlePassword}
            />
          </div>
          <button
            className="loginButton"
            type="submit"
            onClick={this.handleLogIn}
          >
            LogIn
          </button>
          <p>Not a member?</p>
          <Link to="/SignUp">
            <button className="signButton" type="submit">
              SignUp
            </button>
          </Link>
          <div className="loginErrDiv">{this.state.error}</div>
        </form>
      </div>
    );
  }
}

export default Login;
