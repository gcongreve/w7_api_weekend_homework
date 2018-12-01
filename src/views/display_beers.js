const DisplayBeers = function (displayArea) {
 this.displayArea = displayArea;
};

DisplayBeers.prototype.clearList = function () {
  this.displayArea.innerHTML = '';
};

DisplayBeers.prototype.displayBeers = function (beers) {
  this.clearList()
  this.loopThroughBeers(beers)
};

DisplayBeers.prototype.loopThroughBeers = function (beers) {
  beers.forEach((beer) => {
    this.displayBeer(beer);
  })
};


DisplayBeers.prototype.displayBeer = function (beer) {
  const div = document.createElement('div');
  div.className = "beer";
  const beerName = this.customCreateElement('h2', "textContent", beer.name);
  div.appendChild(beerName);
  const beerTagline = this.customCreateElement('h6', "textContent", beer.tagline);
  div.appendChild(beerTagline);
  const picture = this.customCreateElement('img', "src", beer.image_url);
  div.appendChild(picture);
  const abv = this.customCreateElement('p', "textContent", `Abv: ${beer.abv}%`)
  div.appendChild(abv);
  const maltList = this.getMaltList(beer.ingredients.malt);
  div.appendChild(maltList);
  const twist = this.customCreateElement('p', "textContent", `Twist: ${beer.method.twist}`);
  div.appendChild(twist);

  this.displayArea.appendChild(div)
};

DisplayBeers.prototype.getMaltList = function (malts) {
  const maltList = this.customCreateElement("ul", "textContent", "Malts:");
  malts.forEach((malt) => {
    const newMalt = this.customCreateElement("li", "textContent", malt.name)
    maltList.appendChild(newMalt)
  })
  return maltList;
};


DisplayBeers.prototype.customCreateElement = function (type, value, content) {
  const element = document.createElement(type)
  element[value] = content;
  return element;
};


module.exports = DisplayBeers;
