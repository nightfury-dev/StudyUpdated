// var price = require("react-currency-format");

// <price
//   value={listingsData.price}
//   displayType={"text"}
//   thousandSeparator={true}
//   prefix={"$"}
//   renderText={value => <div>{value}</div>}
// />;

var listingsData = [
  {
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
    image:
      "https://photos.zillowstatic.com/cc_ft_768/IS7eihumdvf5hf1000000000.webp"
  },
  {
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
  },
  {
    address: "800 Dragon Court",
    city: "Drury",
    state: "Illinois",
    rooms: "0",
    price: 339000,
    floorSpace: 1000000,
    neighborhood: "bronzeville",
    campus: "IIT",
    extras: ["elevator"],
    postingAuthor: "Nelson Mandela",

    homeType: "studio",
    image:
      "https://photos.zillowstatic.com/cc_ft_768/IS7avsc9i018oh0000000000.webp"
  },
  {
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
    image:
      "https://ap.rdcpix.com/390685504/28b138fea3ec51c8fe7a0924b425fd91l-m0xd-w640_h480_q80.jpg"
  },
  {
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
  },
  {
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
    image:
      "https://photos.zillowstatic.com/cc_ft_768/ISr55x9rz93mjk0000000000.webp"
  },
  {
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
    image:
      "https://photos.zillowstatic.com/cc_ft_768/ISzvm2xvslxjxk0000000000.webp"
  },
  {
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
    image:
      "https://photos.zillowstatic.com/cc_ft_576/IS7idwxwfp0ezu0000000000.webp"
  },
  {
    address: "3650 S Marshfield Ave",
    city: "Oak Lawn",
    state: "Illinois",
    rooms: "6",
    campus: "UIC",
    price: 400000,
    floorSpace: 10000000,
    extras: ["elevator"],
    postingAuthor: "Al Sharpton",

    homeType: "apartment",
    image:
      "https://photos.zillowstatic.com/cc_ft_768/ISrpo1mteo9vq01000000000.webp"
  },
  {
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
  },
  {
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
  },
  {
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
  }
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
];

export default listingsData;
