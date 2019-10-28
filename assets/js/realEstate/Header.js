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
          <span>Student Stay Over</span>
        </div>
        <nav>
          <a href="#">create ads</a>
          <a href="#">About Us</a>
          <a href="#">Login</a>
          <a href="#" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}
