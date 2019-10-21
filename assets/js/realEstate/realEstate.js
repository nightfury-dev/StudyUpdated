import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Listings from "./Listings.js";
import listingsData from "./data/listingsData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      listingsData,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 50000
    };

    this.change = this.change.bind(this);
  }

  change(event) {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.listingsData}></Listings>
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<App />, app);
