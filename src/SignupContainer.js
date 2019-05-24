import React, { Component } from "react";
import SignUp from "./Signup";
import REST from "./REST";

const baseUrl = "http://localhost:8000/api/";

class SignupContainer extends Component {
  constructor() {
    super();
    this.rest = new REST();
    this.state = {
      username: "",
      password: ""
    };
  }

  setUsername = username => {
    this.setState({ username: username });
  };

  setPassword = password => {
    this.setState({ password: password });
  };

  handleSignup = () => {
    const data = {
      url: baseUrl + "users",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    this.rest.handlePOST(data).then(() => {
      const { history } = this.props;
      history.push("/");
    });
  };

  actions = {
    setUsername: this.setUsername,
    setPassword: this.setPassword,
    handleSignup: this.handleSignup
  };

  render() {
    return (
      <section>
        <SignUp actions={this.actions} />
      </section>
    );
  }
}

export default SignupContainer;
