const User = require('./User');
const Employee = require('./Employee');

const userFactory = (type, name, age, role) => {
    if(type === 'user') {
        return new User(name, age)
    } else if(type=== 'employee') {
        return new Employee(name, age, role)
    }
}

module.exports = userFactory;