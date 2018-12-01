const DisplayBeer = function () {

}

DisplayBeer.prototype.displayData = function (div, beer) {
  div.appendChild(this.createCustomElement("h3", "textContent", beer.name));
  const list = document.createElement("ul");
  list.appendChild(this.createCustomElement("p", "textContent", `Meaning: ${data.meaning}`));
  list.appendChild(this.createCustomElement("p", "textContent", `Height: ${data.height}`));
  div.appendChild(list);
  const image = this.createCustomElement("img", "src", "https://techflourish.com/images/mountain-with-cross-clipart-9.png")
  image.style.height = `${data.height/5}px`;
  div.appendChild(image);
};


DisplayBeer.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};

module.exports = DisplayBeer;
