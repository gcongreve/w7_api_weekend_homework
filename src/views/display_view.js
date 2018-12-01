const PubSub = require("../helpers/pub_sub.js");

const DisplayView = function (displayArea) {
 this.displayArea = displayArea;
 this.beers = null;
};



DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:selected-beer', (event) => {
    const selectedBeer = event.detail;
    this.render(selectedBeer);
  })
};

DisplayView.prototype.clearList = function () {
  this.displayArea.innerHTML = '';
};

DisplayView.prototype.render = function (beer) {
  this.clearList()
  toDisplay = this.customCreateElement('h2', "textContent", beer.name)
  this.displayArea.appendChild(toDisplay)
};


DisplayView.prototype.customCreateElement = function (type, value, content) {
  const element = document.createElement(type)
  element[value] = content;
  return element;
};




module.exports = DisplayView;
