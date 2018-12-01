const PubSub = require("../helpers/pub_sub.js");

const AbvSelectView = function (dropDown) {
  this.dropDown = dropDown
};


AbvSelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Beer:all-abvs", (event) => {
    const abvs = event.detail;
    console.log("abvs:", abvs);
    abvs.forEach((abv) => {
      const option = document.createElement('option');
      option.textContent = abv;
      this.dropDown.appendChild(option);
    })
  });
  this.dropDown.addEventListener('change', (event) => {
    PubSub.publish('AbvSelectView:selected-abv', event.target.value)
  })
};

module.exports = AbvSelectView;
