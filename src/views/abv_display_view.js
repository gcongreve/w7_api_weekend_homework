const PubSub = require("../helpers/pub_sub.js");

const AbvDisplayView = function (displayArea) {
 this.displayArea = displayArea;
 this.beersByAbv = null;
};


AbvDisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:selected-beer-abv', (event) => {
    const selectedBeers = event.detail;
    selectedBeers.forEach((beer) => {
      console.log("abv beer to be displayed", beer);
      this.render(beer);
    })
  })
};

AbvDisplayView.prototype.clearList = function () {
  this.displayArea.innerHTML = '';
};

AbvDisplayView.prototype.render = function (beer) {
  toDisplay = this.customCreateElement('h2', "textContent", beer.name)
  this.displayArea.appendChild(toDisplay)
};


AbvDisplayView.prototype.customCreateElement = function (type, value, content) {
  const element = document.createElement(type)
  element[value] = content;
  return element;
};




module.exports = AbvDisplayView;
