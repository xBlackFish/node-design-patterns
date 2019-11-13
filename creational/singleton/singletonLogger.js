let Logger = require("./logger");

class SingletonLogger {
  constructor() {
    if (!SingletonLogger.instance) {
      SingletonLogger.instance = new Logger();
    }
  }

  getInstance() {
    return SingletonLogger.instance;
  }
}

module.exports = SingletonLogger;