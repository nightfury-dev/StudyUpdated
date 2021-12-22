import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  render() {
    return (
      <header>
        <div className="logo">
          <i class="fas fa-graduation-cap"></i>
          <span>Study Updated</span>
        </div>
        <nav>
          <a href="#" class="ads">
            create ads
          </a>
          <a href="#" class="login-link">
            Login
          </a>
          <a href="#" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}
