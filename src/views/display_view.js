const PubSub = require("../helpers/pub_sub.js");

const DisplayView = function (displayArea) {
 this.displayArea = displayArea;
 this.beer = null;
};


DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:selected-beer', (event) => {
    const selectedBeer = event.detail;
    this.render(selectedBeer);
  })
};

DisplayView.prototype.render = function (beer) {
  this.customCreateElement('h2', beer.name)
};


DisplayView.prototype.customCreateElement = function (type, content) {
  const element = document.createElement(type)
  element.textContent = content;
  this.displayArea.appendChild(element);
};




module.exports = DisplayView;
