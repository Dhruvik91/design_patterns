// Abstract Factory Pattern

/* The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods. */

/* The way it works is by presenting an abstract factory the client interacts with. That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object. */

/* Basically it just adds an abstraction layer over the factory method pattern, so that we can create many different types of objects, but still interact with a single factory function or class. */

class Car {
  constructor(name, phase) {
    this.name = name;
    this.phase = phase;
  }
  turnOn = () => console.log(this.name + " is turned on.");
}

class Bike {
  constructor(name, phase) {
    this.name = name;
    this.phase = phase;
  }
  turnOn = () => console.log(this.name + " is turned on.");
}

class Truck {
  constructor(name, phase) {
    this.name = name;
    this.phase = phase;
  }
  turnOn = () => console.log(this.name + " is turned on.");
}

const VEHICLE = {
  createVehicle: (type, name, phase) => {
    switch (type) {
      case "Truck":
        return new Truck(name, phase);
      case "Car":
        return new Car(name, phase);
      case "Bike":
        return new Bike(name, phase);
    }
  },
};

const car = VEHICLE.createVehicle("Car", "BMW", "This is the badass car");


