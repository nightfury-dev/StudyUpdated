import React, { Component } from "react";
import ReactDOM from "react-dom";
import NumberFormat from "react-number-format";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
    this.campus = this.campus.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }
  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData;
      return cities.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData;

      return homeTypes.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData;

      return bedrooms.map(item => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        );
      });
    }
  }

  campus() {
    if (this.props.globalState.populateFormsData.campus != undefined) {
      var { campus } = this.props.globalState.populateFormsData;

      return campus.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>FILTER</h4>
          <label htmlFor="city">City</label>
          <select
            name="city"
            className="filters city"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            {this.cities()}
          </select>
          {/* <label htmlFor="neighborhood">Neighborhood</label>
          <select
            name="neighborhood"
            className="filters neighborhood"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            {this.cities()}
          </select> */}
          <label htmlFor="homeTypes">Home Type</label>

          <select
            name="homeType"
            className="filters homeType"
            onChange={this.props.change}
          >
            <option value="All">All Homes</option>
            {this.homeTypes()}
          </select>

          <label htmlFor="bedrooms">Bedrooms</label>
          <select
            name="bedrooms"
            className="filters bedrooms"
            onChange={this.props.change}
          >
            {this.bedrooms()}
          </select>

          <label htmlFor="campus">Campus</label>
          <select
            name="campus"
            className="filters campus"
            onChange={this.props.change}
          >
            <option value="All">All Campuses</option>
            {this.campus()}
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
                value={this.props.globalState.elevator}
              />
            </label>
          </div>
          <div className="filters extras">
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input
                name="swimming_pool"
                value="swimmingpool"
                type="checkbox"
                onChange={this.props.change}
                value={this.props.globalState.swimmingpool}
              />
            </label>
          </div>
          <div className="filters extras">
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input
                name="basement"
                value="basement"
                type="checkbox"
                onChange={this.props.change}
                value={this.props.globalState.basement}
              />
            </label>
          </div>
          <div className="filters extras">
            <label htmlFor="filters extras">
              <span>Gym</span>
              <input
                name="gym"
                value="gym"
                type="checkbox"
                onChange={this.props.change}
                value={this.props.globalState.gym}
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
// 3. Vibe: Book Worm-- Turn Up--Night Owl -- Social Butterfly -- Lowkey --Homebody -- Saint
