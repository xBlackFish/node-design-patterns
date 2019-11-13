/* 

Make sure that class has only one instance with a globalpoint to access it 

This is implementation with extra Singleton class,

In node singleton is also achievable by module.exports = new Logger()

*/

class Logger {
  constructor() {
    this.logs = [];
  }

  getCount() {
    return this.logs.length;
  }

  log(msg) {
    const timeStamp = new Date().toISOString();
    this.logs.push({ msg, timeStamp });
    console.log(`${msg}-${timeStamp}`);
  }
}

module.exports = Logger;
