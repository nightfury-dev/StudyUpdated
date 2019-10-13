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
      <section className="filter">
        <h4>Filter</h4>
        <select name="neighborhood">
          <option>Bridgeport</option>
        </select>
      </section>
    );
  }
}
