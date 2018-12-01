const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (dropDown) {
  this.dropDown = dropDown
};


SelectView.prototype.bindEvents = function () {
  console.log("happening")
  PubSub.subscribe("Beer:data-ready", (event) => {
    const beers = event.detail;
    this.makeDropDownList(beers)
  });

  this.dropDown.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:selectedBeerIndex', selectedIndex);
  })

};



SelectView.prototype.makeDropDownList = function (beers) {
  beers.forEach((beer, index) => {
    const beerName = beer.name;
    const option = document.createElement('option');
    option.textContent = beerName;
    option.value = index;
    this.dropDown.appendChild(option);
  });
};





module.exports = SelectView;
