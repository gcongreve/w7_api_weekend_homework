const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Beer = function () {
  this.beerData = null;
};

Beer.prototype.bindEvents = function () {
  const requestHelper = new RequestHelper("https://api.punkapi.com/v2/beers");
  requestHelper.get().then((data) => {
    this.beerData = data;
    PubSub.publish("Beer:data-ready", data);
  });
};




module.exports = Beer;
