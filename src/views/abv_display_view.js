const PubSub = require("../helpers/pub_sub.js");

const AbvDisplayView = function (displayArea) {
 this.displayArea = displayArea;
 this.beersByAbv = null;
};


AbvDisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:selected-beer-abv', (event) => {
    const selectedBeers = event.detail;
    this.clearList()
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
  const div = document.createElement('div');
  div.className = "beer";
  const toDisplay = this.customCreateElement('h2', "textContent", beer.name)
  div.appendChild(toDisplay)
  const picture = this.customCreateElement('img', "src", beer.image_url)
  div.appendChild(picture)
  this.displayArea.appendChild(div)
  const maltList = this.getMaltList(beer.ingredients.malt)
  this.displayArea.appendChild(maltList)
};

AbvDisplayView.prototype.getMaltList = function (malts) {
  const maltList = document.createElement("ul");
  malts.forEach((malt) => {
    const newMalt = this.customcreateElement("li", "textContent", malt.name)
    maltList.appendChild(newMalt)
  })
  return maltList;
};




AbvDisplayView.prototype.customCreateElement = function (type, value, content) {
  const element = document.createElement(type)
  element[value] = content;
  return element;
};




module.exports = AbvDisplayView;
