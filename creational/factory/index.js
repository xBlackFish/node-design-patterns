const userFactory = require("./userFactory");

const user = userFactory("user", "User1", 28);
const employee = userFactory("employee", 23, "Joe Pavelski", "Moderator");

console.dir(user);
console.dir(employee);
