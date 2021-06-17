/************************************************** Object Methods *****************************************************/

// 1) assign - copies all enumerable own properties from source to a target object (by reference)
    	
	// Object.assign(target, ...sources)
  	const target = { a: 1, b: 2 };
	const source = { b: 4, c: 5 };
	const returnedTarget = Object.assign(target, source);

	console.log(target);
	// output: Object { a: 1, b: 4, c: 5 }
	console.log(returnedTarget);
	// output: Object { a: 1, b: 4, c: 5 }

	// Deep copy - JSON.parse(JSON.stringify(obj));

// 2) create - creates a new object, using an existing object as the prototype of the newly created object

	const person = {
	  isHuman: false,
	  printIntroduction: function() {
	    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
	  }
	};
	const me = Object.create(person);

	me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
	me.isHuman = true; // inherited properties can be overwritten

	me.printIntroduction();
	// output: "My name is Matthew. Am I human? true"

// 3) entries - returns an array of a given object's own enumerable string-keyed property [key, value] pairs

	const object1 = {
		a: "somestring",
		b: 42
	};

	for (const [key, value] of Object.entries(object1)) {
	  console.log(`${key}: ${value}`);
	}
	// output:
	// "a: somestring"
	// "b: 42"
	// order is not guaranteed

// 4) freeze - allows us to freeze an object (only at that level) so that existing properties cannot be modified

	var marks = {physics: 98, maths:95, chemistry: 91};
	finalizedMarks = Object.freeze(marks);
	finalizedMarks["physics"] = 86; // throws error in strict mode
	console.log(marks); // {physics: 98, maths: 95, chemistry: 91}

	Object.isFrozen(finalizedMarks); // returns true

// 5) seal - allows configurable properties but won’t allow new property addition or deletion or properties.

	var marks = {physics: 98, maths:95, chemistry: 91};
	Object.seal(marks);
	delete marks.chemistry; // returns false as operation failed
	marks.physics = 95; // Works!
	marks.greek = 86; // Will not add a new property

	Object.isSealed(marks); // returns true

// 6) getPrototypeOf - returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object

	const prototype1 = {};
	const object1 = Object.create(prototype1);

	console.log(Object.getPrototypeOf(object1) === prototype1);
	// output: true

// 7) hasOwnProperty - checks object for a property and returns boolean

	const object1 = {};
	object1.property1 = 42;

	console.log(object1.hasOwnProperty('property1'));
	// output: true
	console.log(object1.hasOwnProperty('toString'));
	// output: false

// 8) isPototypeOf - checks if an object exists in another object's prototype chain

	function Foo() {}
	function Bar() {}
	Bar.prototype = Object.create(Foo.prototype);

	const bar = new Bar();

	console.log(Foo.prototype.isPrototypeOf(bar));
	// output: true
	console.log(Bar.prototype.isPrototypeOf(bar));
	// output: true

// 9) keys - returns an array of a given object's own enumerable property keys

	const object1 = {
	  a: 'somestring',
	  b: 42,
	  c: false
	};

	Object.keys(object1);
	// output: Array ["a", "b", "c"]

// 10) values - returns an array of a given object's own enumerable property values

	const object1 = {
	  a: 'somestring',
	  b: 42,
	  c: false
	};

	Object.values(object1);
	// output: Array ["somestring", 42, false]
