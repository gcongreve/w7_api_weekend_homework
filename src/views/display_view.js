const PubSub = require("../helpers/pub_sub.js");
const DisplayBeers = require("./display_beers.js")


const DisplayView = function (displayArea) {
 this.displayArea = displayArea;
};


DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:selected-beer', (event) => {
    const selectedBeer = event.detail;
    this.render(selectedBeer);
  })
};


DisplayView.prototype.render = function (beer) {
  displayer = new DisplayBeers(this.displayArea);
    this.clearList()
    displayer.displayBeer(beer)
};


DisplayView.prototype.clearList = function () {
  this.displayArea.innerHTML = '';
};



module.exports = DisplayView;
