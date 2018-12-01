const Beer = require('./models/beer.js')
const DisplayView = require("./views/Display_view.js")
const SelectView = require("./views/select_view.js")

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript has loaded');


  const selectView = new SelectView(document.querySelector('#beer-list'));
  selectView.bindEvents();

  const beer = new Beer();
  beer.bindEvents();



  // const displayView = new DisplayView(document.querySelector('#beer-display'));
  // displayView.bindEvents();


})
