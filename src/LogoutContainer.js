import React, { Component } from "react";
import REST from "./REST";
import Logout from "./Logout";

const baseUrl = "http://localhost:8000/api/";

class LogoutContainer extends Component {
  constructor() {
    super();
    this.rest = new REST();
  }

  handleLogout = () => {
    const url = baseUrl + "users/logout";
    this.rest.handleDELETE(url).then(result => console.log(result));
  };

  render() {
    return (
      <section>
        <Logout handleLogout={this.handleLogout} />
      </section>
    );
  }
}

export default LogoutContainer;
