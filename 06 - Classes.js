// Classes

// get and set

// Class expressions
// The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).

// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"

// Class declarations
// 	Normal way of declaring classes

// Static methods
// 	The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

// Private fields - #a