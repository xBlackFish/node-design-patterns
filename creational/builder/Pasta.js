class Pasta {
  constructor(builder) {
    this.type = builder.type;
    this.sausce = builder.sausce;
    this.vegetables = builder.vegetables;
    this.cheese = builder.cheese;
  }
}

module.exports = Pasta;
