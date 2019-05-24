import React, { Component } from "react";

class SignUp extends Component {
  handleUsername = e => {
    this.props.actions.setUsername(e.target.value);
  };

  handlePassword = e => {
    this.props.actions.setPassword(e.target.value);
  };

  handleSignUp = e => {
    e.preventDefault();
    this.props.actions.handleSignup();
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
            className="signButton"
            type="submit"
            onClick={this.handleSignUp}
          >
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
