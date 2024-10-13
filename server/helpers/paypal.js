const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZWzZ2TZfuOneCKSzKxqLKwCdIqt0qOD88TX7OxK7AP0vZ7c4l9eNS2c8THHS6OC4GDA2-wh1Kco57Px",
  client_secret: "EIBRxLPng0NS_t0JzbBVO4e69XeTG-zMZddKrTqs9ocbEOL-_5x2k86u6L-VStul5SCih7q4XOQtvYTW",
});

module.exports = paypal;
