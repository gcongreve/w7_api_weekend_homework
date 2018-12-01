const Beer = require('./models/beer.js')
const DisplayView = require("./views/Display_view.js")
const SelectView = require("./views/select_view.js")
const AbvSelectView = require("./views/abv_select_view.js")
const AbvDisplayView = require("./views/abv_display_view.js")

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript has loaded');


  const selectView = new SelectView(document.querySelector('#individual-beer-list'));
  selectView.bindEvents();

  const abvSelectView = new AbvSelectView(document.querySelector('#abv-beer-list'));
  abvSelectView.bindEvents();

  const displayView = new DisplayView(document.querySelector('#individual-beer-display'));
  displayView.bindEvents();

  const abvDisplayView = new AbvDisplayView(document.querySelector('#abv-beer-display'));
  abvDisplayView.bindEvents();


  const beer = new Beer();
  beer.getBeerData();
  beer.bindEvents();






})
