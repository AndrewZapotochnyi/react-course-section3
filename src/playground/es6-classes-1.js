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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }

}


const me = new Student("Andrew", 35, "Marketing");
console.log(me.getGreeting());
console.log(me);
console.log(me.getDescription());

// Traveler -> Person

// const other = new Person();
// console.log(other.getGreeting());