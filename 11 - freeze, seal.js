// freeze, seal

// freeze - Object.freeze allows us to freeze an object (only at that level) so that existing properties cannot be modified.

var marks = {physics: 98, maths:95, chemistry: 91};
finalizedMarks = Object.freeze(marks);
finalizedMarks["physics"] = 86; // throws error in strict mode
console.log(marks); // {physics: 98, maths: 95, chemistry: 91}

Object.isFrozen(finalizedMarks); // returns true


// seal - Object.seal allows configurable properties but won’t allow new property addition or deletion or properties.

var marks = {physics: 98, maths:95, chemistry: 91};
Object.seal(marks);
delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
marks.greek = 86; // Will not add a new property

Object.isSealed(marks); // returns true
