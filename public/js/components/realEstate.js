webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactNumberFormat = __webpack_require__(150);

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Joe"
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    _this.campus = _this.campus.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;


        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;


        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "campus",
    value: function campus() {
      if (this.props.globalState.populateFormsData.campus != undefined) {
        var campus = this.props.globalState.populateFormsData.campus;


        return campus.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "FILTER"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "city",
              className: "filters city",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "homeTypes" },
            "Home Type"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              className: "filters homeType",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Homes"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "bedrooms" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              className: "filters bedrooms",
              onChange: this.props.change
            },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "campus" },
            "Campus"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "campus",
              className: "filters campus",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Campuses"
            ),
            this.campus()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", _defineProperty({
                name: "elevator",
                value: "elevator",
                type: "checkbox",
                onChange: this.props.change
              }, "value", this.props.globalState.elevator))
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", _defineProperty({
                name: "swimming_pool",
                value: "swimmingpool",
                type: "checkbox",
                onChange: this.props.change
              }, "value", this.props.globalState.swimmingpool))
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              _react2.default.createElement("input", _defineProperty({
                name: "basement",
                value: "basement",
                type: "checkbox",
                onChange: this.props.change
              }, "value", this.props.globalState.basement))
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "label",
              { htmlFor: "filters extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", _defineProperty({
                name: "gym",
                value: "gym",
                type: "checkbox",
                onChange: this.props.change
              }, "value", this.props.globalState.gym))
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

// // Features to Add:
// // 1. College
// // 2. Major
// 3. Vibe: Book Worm-- Turn Up--Night Owl -- Social Butterfly -- Lowkey --Homebody -- Saint


exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          _react2.default.createElement("i", { "class": "fas fa-graduation-cap" }),
          _react2.default.createElement(
            "span",
            null,
            "Student Stay Over"
          )
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#", "class": "ads" },
            "create ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", "class": "login-link" },
            "Login"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Desmend"
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "loopListings",
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length === 0) {
        return "Sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == "box") {
          //This is the box view for viewing multiple ones
          return _react2.default.createElement(
            "div",
            { className: "col-md-3", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listing-image",
                  style: {
                    background: "url(\"" + listing.image + "\") no-repeat center center"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-image" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        listing.postingAuthor
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2019"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "far fa-square" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " sq.ft"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fas fa-bed" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  listing.price
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                  listing.city,
                  ", ",
                  listing.state
                )
              )
            )
          );
        }
        //This is the vertical view-rectangle style {
        else return _react2.default.createElement(
            "div",
            { className: "col-md-12 col-lg-6", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listing-image",
                  style: {
                    background: "url(\"" + listing.image + "\") no-repeat center center"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-image" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2019"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "far fa-square" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " sq.ft"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fas fa-bed" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  listing.price
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                  listing.city,
                  ", ",
                  listing.state
                )
              )
            )
          );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.change })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            this.props.globalState.filteredData.length,
            " results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              {
                name: "sortby",
                className: "sortby",
                onChange: this.props.change
              },
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", {
                className: "fas fa-list",
                onClick: this.props.changeView.bind(null, "long")
              }),
              _react2.default.createElement("i", {
                className: "fas fa-th",
                onClick: this.props.changeView.bind(null, "box")
              })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "ul",
              { className: "pages" },
              _react2.default.createElement(
                "li",
                null,
                "Prev"
              ),
              _react2.default.createElement(
                "li",
                { className: "active" },
                "1"
              ),
              _react2.default.createElement(
                "li",
                null,
                "2"
              ),
              _react2.default.createElement(
                "li",
                null,
                "3"
              ),
              _react2.default.createElement(
                "li",
                null,
                "4"
              ),
              _react2.default.createElement(
                "li",
                null,
                "5"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Next"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// var price = require("react-currency-format");

// <price
//   value={listingsData.price}
//   displayType={"text"}
//   thousandSeparator={true}
//   prefix={"$"}
//   renderText={value => <div>{value}</div>}
// />;

var listingsData = [{
  address: "3142 S Wells St",
  city: "Chicago",
  state: "Illinois",
  rooms: "7",
  price: 349000,
  floorSpace: 2000,
  neighborhood: "bridgeport",
  campus: "IIT",
  extras: ["elevator"],
  postingAuthor: "Jane Fonda",
  homeType: "condo",
  image: "https://photos.zillowstatic.com/cc_ft_768/IS7eihumdvf5hf1000000000.webp"
}, {
  address: "2034 Newart Court",
  city: "Chicago",
  state: "Illinois",
  rooms: "4",
  price: 400000,
  floorSpace: 2000,
  neighborhood: "bridgeport",
  campus: "IIT",
  extras: ["elevator"],
  postingAuthor: "John Fonda",
  homeType: "condo",
  image: "https://photos.zillowstatic.com/p_h/ISiv3niqt3qbx10000000000.jpg"
}, {
  address: "800 Dragon Court",
  city: "Drury",
  state: "Illinois",
  rooms: "0",
  price: 339000,
  floorSpace: 10000,
  neighborhood: "bronzeville",
  campus: "IIT",
  extras: ["elevator"],
  postingAuthor: "Nelson Mandela",

  homeType: "studio",
  image: "https://photos.zillowstatic.com/cc_ft_768/IS7avsc9i018oh0000000000.webp"
}, {
  address: "11 Juper Court",
  city: "Evanston",
  state: "Illinois",
  rooms: "1",
  price: 100000,
  neighborhood: "chinatown",
  campus: "IIT",
  floorSpace: 50,
  extras: ["elevator"],
  postingAuthor: "Johnny Tsunami",

  homeType: "house",
  image: "https://ap.rdcpix.com/390685504/28b138fea3ec51c8fe7a0924b425fd91l-m0xd-w640_h480_q80.jpg"
}, {
  address: "111 Syrup",
  city: "North Chicago",
  state: "Illinois",
  rooms: "3",
  campus: "IIT",
  price: 400000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  postingAuthor: "Bel Aire",

  homeType: "studio",
  image: "http://s3.amazonaws.com/ygl-photos/730W58fab5ee5ac20.jpg"
}, {
  address: "50 E 26th St APT 208",
  city: "Aurora",
  state: "Illinois",
  rooms: "1",
  campus: "Depaul",
  price: 400000,
  floorSpace: 4000,
  extras: ["gym"],
  postingAuthor: "Captain Planet",

  homeType: "apartment",
  image: "https://photos.zillowstatic.com/cc_ft_768/ISr55x9rz93mjk0000000000.webp"
}, {
  address: "4800 S Lake Park Ave APT 20",
  city: "Nortbrook",
  state: "Illinois",
  rooms: "2",
  price: 45000,
  campus: "IIT",
  floorSpace: 6000,
  extras: ["elevator"],
  postingAuthor: "James Bond",

  homeType: "apartment",
  image: "https://photos.zillowstatic.com/cc_ft_768/ISzvm2xvslxjxk0000000000.webp"
}, {
  address: "3817 S Ellis Ave UNIT 202",
  city: "Chicago",
  state: "Illinois",
  rooms: "3",
  price: 219000,
  floorSpace: 1500,
  campus: "UChicago",
  extras: ["elevator"],
  postingAuthor: "VonTae Hall",

  homeType: "apartment",
  image: "https://photos.zillowstatic.com/cc_ft_576/IS7idwxwfp0ezu0000000000.webp"
}, {
  address: "3650 S Marshfield Ave",
  city: "Oak Lawn",
  state: "Illinois",
  rooms: "6",
  campus: "UIC",
  price: 400000,
  floorSpace: 10000,
  extras: ["elevator"],
  postingAuthor: "Al Sharpton",

  homeType: "apartment",
  image: "https://photos.zillowstatic.com/cc_ft_768/ISrpo1mteo9vq01000000000.webp"
}, {
  address: "3415 S Wallace St",
  city: "Chicago",
  state: "Illinois",
  rooms: "3",
  campus: "IIT",
  price: 400000,
  floorSpace: 2000,
  extras: ["elevator"],
  postingAuthor: "Almost Famous",

  homeType: "apartment",
  image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
}, {
  address: "3146 S Shields Ave",
  city: "Chicago",
  state: "Illinois",
  rooms: "3",
  campus: "UIC",
  price: 400000,
  floorSpace: 2000,
  extras: ["elevator", "swimmingpool"],
  homeType: "house",
  image: "http://s3.amazonaws.com/ygl-photos/730W58fab5ee5ac20.jpg"
}, {
  address: "111 Tupac Ave",
  city: "Chicago",
  state: "Illinois",
  rooms: "3",
  campus: "IIT",
  price: 100000,
  floorSpace: 2000,
  extras: ["elevator"],
  homeType: "apartment",
  image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // },
  // {
  //   address: "3415 S Wallace St",
  //   city: "Chicago",
  //   state: "Illinois",
  //   rooms: "3",
  //   campus: "IIT",
  //   price: 400000,
  //   floorSpace: 2000,
  //   extras: ["elevator"],
  //   homeType: "apartment",
  //   image: "https://photos.zillowstatic.com/p_e/ISivfkc9awn00a1000000000.jpg"
  // }
}];

exports.default = listingsData;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(232);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(231);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(233);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(234);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _reactNumberFormat = __webpack_require__(150);

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
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
      filteredData: _listingsData2.default,
      populateFormsData: "",
      sortby: "price-dsc",
      view: "box",
      search: ""
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      //auto sort by price
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: "change",
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: "changeView",
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: "filteredData",
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.campus != "All") {
        newData = newData.filter(function (item) {
          return item.campus == _this3.state.campus;
        });
      }

      //for filtered extras of house

      //elevator
      if (this.state.elevator == true) {
        newData = newData.filter(function (item) {
          return item.extras.includes("elevator") == true;
        });
      }

      //swimmingpool
      if (this.state.swimming_pool == true) {
        newData = newData.filter(function (item) {
          return item.extras.includes("swimmingpool") == true;
        });
      }

      //gym
      if (this.state.gym == true) {
        newData = newData.filter(function (item) {
          return item.extras.includes("gym") == true;
        });
      }

      //price in decending order
      if (this.state.sortby == "price-dsc") {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      //price in ascending order
      if (this.state.sortby == "price-asc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != "") {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
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

  }, {
    key: "populateForms",
    value: function populateForms() {
      var _this4 = this;

      //city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      //hometype
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      //campus
      var campus = this.state.listingsData.map(function (item) {
        return item.campus;
      });
      campus = new Set(campus);
      campus = [].concat(_toConsumableArray(campus));
      campus = campus.sort();

      //bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      //make them in order from least to greatest
      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities,
          campus: campus
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, {
            change: this.change,
            globalState: this.state,
            populateAction: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, {
            listingsData: this.state.filteredData,
            change: this.change,
            globalState: this.state,
            changeView: this.changeView
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);