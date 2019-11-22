import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Listings from "./Listings.js";
import listingsData from "./data/listingsData";
import NumberFormat from "react-number-format";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listingsData,
      city: "All",
      homeType: "All",
      bedrooms: 0,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      campus: "All",
      elevator: "",
      basement: "",
      gym: "",
      swimming_pool: "",
      filteredData: listingsData,
      populateFormsData: "",
      sortby: "price-dsc",
      view: "box",
      search: ""
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount() {
    //auto sort by price
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price;
    });

    this.setState({
      listingsData
    });
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
        this.filteredData();
      }
    );
  }
  changeView(viewName) {
    this.setState({
      view: viewName
    });
  }

  filteredData() {
    var newData = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.rooms >= this.state.bedrooms
      );
    });

    if (this.state.city != "All") {
      newData = newData.filter(item => {
        return item.city == this.state.city;
      });
    }

    if (this.state.homeType != "All") {
      newData = newData.filter(item => {
        return item.homeType == this.state.homeType;
      });
    }

    if (this.state.campus != "All") {
      newData = newData.filter(item => {
        return item.campus == this.state.campus;
      });
    }

    //for filtered extras of house

    //elevator
    if (this.state.elevator == true) {
      newData = newData.filter(item => {
        return item.extras.includes("elevator") == true;
      });
    }

    //swimmingpool
    if (this.state.swimming_pool == true) {
      newData = newData.filter(item => {
        return item.extras.includes("swimmingpool") == true;
      });
    }

    //gym
    if (this.state.gym == true) {
      newData = newData.filter(item => {
        return item.extras.includes("gym") == true;
      });
    }

    //price in decending order
    if (this.state.sortby == "price-dsc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }

    //price in ascending order
    if (this.state.sortby == "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.search != "") {
      newData = newData.filter(item => {
        var city = item.city.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var n = city.match(searchText);

        if (n != null) {
          return true;
        }
      });
    }
    // for getting filtered data view
    this.setState({
      filteredData: newData
    });
  }
  // method for this.populateForms
  //3:28
  populateForms() {
    //city
    var cities = this.state.listingsData.map(item => {
      return item.city;
    });
    cities = new Set(cities);
    cities = [...cities];

    cities = cities.sort();

    //hometype
    var homeTypes = this.state.listingsData.map(item => {
      return item.homeType;
    });
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];
    homeTypes = homeTypes.sort();

    //campus
    var campus = this.state.listingsData.map(item => {
      return item.campus;
    });
    campus = new Set(campus);
    campus = [...campus];
    campus = campus.sort();

    //bedrooms
    var bedrooms = this.state.listingsData.map(item => {
      return item.rooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    //make them in order from least to greatest
    bedrooms = bedrooms.sort();

    this.setState(
      {
        populateFormsData: {
          homeTypes,
          bedrooms,
          cities,
          campus
        }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
          />
          <Listings
            listingsData={this.state.filteredData}
            change={this.change}
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<App />, app);
