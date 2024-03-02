// Factory Method Pattern

/* The Factory method pattern provides an interface for creating objects that can be modified after creation. The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code. */

// In my opinion, it is just a class.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.comment = "This is a user.";
  }
  getName = () => console.log(this.name);
}

const user1 = new User("Ravi", 3);
console.log(`User: ${user1.name}, Age: ${user1.age}`);
