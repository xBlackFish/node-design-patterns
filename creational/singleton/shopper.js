let SingletonLogger = require("./singletonLogger");

let logger = new SingletonLogger().getInstance();

class Shopper {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
    logger.log(`New Shopper: ${name} has ${balance} in account.`);
  }
}

module.exports = Shopper;
