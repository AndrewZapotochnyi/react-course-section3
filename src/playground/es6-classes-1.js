// Car
// Make
// model
// vin
// getDescription

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} y.o.`
  }

}

const me = new Person("Andrew", 35);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());