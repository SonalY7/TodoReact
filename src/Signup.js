import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      token: ""
    };
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSignUp = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const { history } = this.props;
    fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    }).then(() => {
      history.push("/");
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
          <Link to="/SignUp">
            <button
              className="signButton"
              type="submit"
              onClick={this.handleSignUp}
            >
              SignUp
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
