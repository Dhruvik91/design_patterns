/* Singleton Pattern */

/* 
Singleton is a design pattern that ensures that a class has only one immutable instance.
 Said simply, the singleton pattern consists of an object that can't be copied or modified. 
 It's often useful when we want to have some immutable single point of truth for our application. */

// Where to use that ?

/* Let's say for example we want to have all of our app's configuration in a single object. 
 And we want to disallow any duplication or modification of that object. */

const CONFIG = {
  start: () => {
    console.log("App Started");
  },
  end: () => {
    console.log("App ended");
  },
};

Object.freeze(CONFIG); // Making it immutable

// Now no one can update the above object

