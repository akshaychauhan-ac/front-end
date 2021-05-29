// Map, Set

// 1) Map - is a collection of keyed data items, just like an Object. 
		//  But the main difference is that Map allows keys of any type.

new Map() // creates the map.
map.set(key, value) // stores the value by the key.
map.get(key) // returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) // returns true if the key exists, false otherwise.
map.delete(key) // removes the value by the key.
map.clear() // removes everything from the map.
map.size // returns the current element count.

// Example -
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'

alert(map.size); // 3

// forEach example
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});


// 2) Set - is a special type collection – “set of values” (without keys), where each value may occur only once.

new Set(iterable) // creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) // adds a value, returns the set itself.
set.delete(value) // removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) // returns true if the value exists in the set, otherwise false.
set.clear() // removes everything from the set.
set.size // is the elements count.

// Example -
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
