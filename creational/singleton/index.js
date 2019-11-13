let SingletonLogger = require("./singletonLogger");
let Store = require("./store");
let Shopper = require("./shopper");

let logger = new SingletonLogger().getInstance();

logger.log("launching app...");

let joe = new Shopper("Joe", 100);
let sportStore = new Store("Sports supplies", [
  { item: "Boxing gloves", quantity: 2, price: 39 },
  { item: "Running Shoes", quantity: 12, price: 179 }
]);

logger.log("configuration finished...");

console.log(`${logger.getCount()} logs in total`);
console.log(logger.logs);
