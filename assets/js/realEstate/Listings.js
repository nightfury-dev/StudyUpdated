import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
    this.loopListings = this.loopListings.bind(this);
  }
  loopListings() {
    var { listingsData } = this.props;

    if (listingsData == undefined || listingsData.length == 0) {
      return "Sorry your filter did not match any listing";
    }

    return listingsData.map((listing, index) => {
      return (
        <div className="col-md-3" key={index}>
          <div className="listing">
            <div
              className="listing-image"
              style={{
                background: `url("${listing.image}") no-repeat center center`
              }}
            >
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-image"></div>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">05/05/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="far fa-square"></i>
                      <span>{listing.floorSpace} sq.ft</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed"></i>
                      <span>{listing.rooms}</span>
                    </div>
                  </div>
                  <div className="view-btn">View Listing</div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">{listing.price}</span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i>
                {listing.city}, {listing.state}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">390 results found</div>
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

        <section className="listings-results">{this.loopListings()}</section>

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
