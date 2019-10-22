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
      <section id="filter">
        <div className="inside">
          <h4>FILTER</h4>
          <select
            name="neighborhood"
            className="filters neighborhood"
            onChange={this.props.change}
          >
            <option value="bridgeport">Bridgeport</option>
            <option value="bronzeville">Bronzeville</option>
            <option value="chinatown">Chinatown</option>
          </select>
          <select
            name="housetype"
            className="filters housetype"
            onChange={this.props.change}
          >
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="room">Room</option>
            <option value="house">House</option>
          </select>
          <select
            name="bedrooms"
            className="filters bedrooms"
            onChange={this.props.change}
          >
            <option value="2">2 BR</option>
            <option value="1">1 BR</option>
            <option value="3">3 BR</option>
            <option value="4">4 BR</option>
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>

          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input
                name="elevator"
                value="elevator"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input
                name="swimming_pool"
                value="swimmingpool"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input
                name="basement"
                value="basement"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input
                name="gym"
                value="gym"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

// // Features to Add:
// // 1. College
// // 2. Major
// 3. Work Hard - Play Hard
