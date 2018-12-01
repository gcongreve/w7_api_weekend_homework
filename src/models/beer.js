const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Beer = function () {
  this.beerData = null;
};

Beer.prototype.getBeerData = function () {
  const requestHelper = new RequestHelper("https://api.punkapi.com/v2/beers");
  requestHelper.get().then((data) => {
    this.beerData = data;
    PubSub.publish("Beer:data-ready", data);
    const allAbvs = this.getAbvs()
    PubSub.publish("Beer:all-abvs", allAbvs);
  });
};

Beer.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:selectedBeerIndex', (event) => {
    const selectedIndex = event.detail;
    const beer = this.getBeerByIndex(selectedIndex);
    PubSub.publish('Beer:selected-beer', beer);
  })
};


Beer.prototype.getAbvs = function () {
  const abvs = this.beerData.map(beer => beer.abv).filter((abv, index, abvs) => abvs.indexOf(abv) === index);
  return abvs;
};

Beer.prototype.getBeerByIndex = function (index) {
  const beer = this.beerData[index];
  return beer
};

module.exports = Beer;
