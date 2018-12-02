const PubSub = require('../helpers/pub_sub.js')
const DisplayBeers = require('./display_beers.js')

const SelectAll = function (location) {
  this.location = location;
  this.beers = null;
}
SelectAll.prototype.bindEvents = function () {
  PubSub.subscribe("Beer:data-ready", (event) => {
    this.beers = event.detail;
  });
   this.location.addEventListener('click', (event) => {
     this.showAll();
   });
  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', (event) => {
    this.deleteAll();
  })
};

SelectAll.prototype.showAll = function () {
  const displayBeers = new DisplayBeers(document.querySelector('#beer-display'));
  displayBeers.displayBeers(this.beers);
};


SelectAll.prototype.deleteAll = function () {
  area = document.querySelector('#beer-display');
  area.innerHTML = " "
};

module.exports = SelectAll;
