const Pasta = require("./Pasta");

class PastaBuilder {
  constructor(pastaName) {
    this.pastaName = pastaName;
  }

  pastaType(type) {
    this.type = type;
    return this;
  }

  withCheese(cheese) {
    this.cheese = cheese;
    return this;
  }

  withSauce(sauce) {
    this.sauce = sauce;
    return this;
  }

  withVegetables(vegetables) {
    this.vegetables = vegetables;
    return this;
  }

  build() {
    return new Pasta(this);
  }
}

module.exports = PastaBuilder;
