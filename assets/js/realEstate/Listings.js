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
    <section className="Listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

    <section className="sortby-area">
      <div>390 results found</div>
      <div className="sort-options">
        <select name="sortby" className="sortby">
          <option value="price-asc">Highest Price</option>
          <option value="price-dsc">Lowest Price</option>
        </select>
      <div className="view">
        <i className="fas fa-list"></i>
        <i className="fas fa-th"></i>
      </div>
    </div>
  </section>

    <section className="listings-results">
      <div className="listing">
        <div className="listing-image">
          <span className="Address">Address</span>
          <div className="details">
            <div className="user-image"></div>
            <div className="user-details">
              <span className="user-name">Nina Smith</span>
              <span className="post-date">05/05/2019</span>
            </div>
            <div className="listing-details">
              <div className="floor-space"><i class="far fa-square"></i>1000 ft&sup2;</div>
              <i className="fas fa-bed"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pagination"></section>
    );
    }
}
