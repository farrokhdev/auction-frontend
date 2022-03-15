const dev = {
  BASE_URL: "https://api.beta.smartauctionhouse.com/api",
  // BASE_URL: "http://192.168.0.145:8003/api",

  // PARAMS:
  COOKIE_EXPIRES: 1,
  WEB_SOCKET_BASE_URL: "ws://192.168.0.182:9002",
  // WEB_SOCKET_BASE_URL: "ws://192.168.0.145:8003",
};

const test = {
  // BASE_URL: "http://192.168.0.145:8003/api",
  BASE_URL: "https://api.beta.smartauctionhouse.com/api",
  // BASE_URL: "https://018c-93-117-190-95.ngrok.io/api",
  // PARAMS:
  COOKIE_EXPIRES: 1,
  WEB_SOCKET_BASE_URL: "ws://api.beta.smartauctionhouse.com/ws",
};

const prod = {
  BASE_URL: "https://api.beta.smartauctionhouse.com/api",
  // PARAMS:
  COOKIE_EXPIRES: 1,
  WEB_SOCKET_BASE_URL: "ws://api.beta.smartauctionhouse.com/ws",
};

let config = dev;

if (process.env.REACT_APP_STAGE === "production") {
  config = prod;
} else if (process.env.REACT_APP_STAGE === "test") {
  config = test;
}

Object.assign(module.exports, config);
