// Builder Pattern

/* The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object. */

/* The cool thing about this pattern is that we separate the creation of properties and methods into different entities. */

/* If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory. But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach. */

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

const emp1 = new Employee("Deep", "DBA");
const emp2 = new Employee("Saahil", "PA");

const addProps = (obj) => {
  obj.workAt = () => console.log(obj.position);
};

addProps(emp1);
emp1.workAt();

/* In my opinion, the above pattern is useful for creating the porps and methods, by using some function */
