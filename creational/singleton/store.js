let SingletonLogger = require("./singletonLogger");

let logger = new SingletonLogger().getInstance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }
}

module.exports = Store;
