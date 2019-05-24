import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  handleLogout = () => {
    this.props.handleLogout();
  };

  render() {
    return (
      <div className="sublogout">
        <Link to="/">
          <button
            className="logoutButton"
            type="submit"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </Link>
      </div>
    );
  }
}

export default Logout;
