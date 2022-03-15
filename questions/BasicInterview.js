/************************************************** Questions *****************************************************/

// 1) bind, call, apply
let name = {
	firstName: "Abc",
	lastName: "Xyz"
};
function print() {
	console.log(this.firstName + " " + this.lastName);
}

/*****************************************************************************************************************/

// 2) polyfills - bind, push
Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

Array.prototype.myPush = function (...args) {
    let obj = this;
    obj[obj.length] = args[0];
    return obj.length;
}

/*****************************************************************************************************************/

// 3) Event Loop
console.log(1);
setTimeout(function () {
	console.log(2);
},0);
queueMicrotask(function () {
    console.log(10);
});
Promise.resolve(3).then(function (num) {
    console.log(num);
});
console.log(4);

//Output: 1 4 10 3 2

// ------------------------------------------------------------

console.log(1);
setTimeout(function () {
    console.log(2);
},0);
Promise.resolve(3).then(function (num) {
    console.log(num);
});
console.log(4);

//Output: 1 4 3 2

/*****************************************************************************************************************/

// 4)
let str = "This is a string";
str = str.split(" ").map(ele => ele.split("").reverse().join("")).join(" ");
// Output: sihT si a gnirts

let str = "This is a string";
let words = str.split(" ");

for (let j = 0; j < words.length; j++) {
    let temp = "";
    let word = words[j].split("");
    debugger;
    for (let i = 0; i <= (word.length / 2); i++) {
        temp = word[i];
        word[i] = word[word.length - 1 - i];
        word[word.length - 1 - i] = temp;
    }
    words[j] = word.join("");
}
console.log(words.join(" "));

/*****************************************************************************************************************/

// 5)
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

// Output: 
    // outer func:  this.foo = bar
    // outer func:  self.foo = bar
    // inner func:  this.foo = undefined
    // inner func:  self.foo = bar

/*****************************************************************************************************************/

// 6)
var a = {
    a: 10,
    b: 20,
    sum: function() {
        return this.a + this.b;
    }
};

var b = {
    a: 1,
    b: 2
};

a.sum();        // Output: 30
a.sum.call(b)   // Output: 3

/*****************************************************************************************************************/

// 7)
const arr1 = [1,2,3];
const arr2 = [2,3,4,5];
const result = arr1.filter(val => arr2.includes(val));
console.log(result);

// [2,3]

/*****************************************************************************************************************/

// 8)
var a = 10;
var b = 20;
(function () {
    console.log(a); // Output: undefined
    console.log(b); // Output: 20
    var a = 30;
    b = 40;
    console.log(a); // Output: 30
    console.log(b); // Output: 40
})();

/*****************************************************************************************************************/

// 9)
function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
typeof a; // Output: undefined
typeof b; // Output: 'number'

/*****************************************************************************************************************/

// 10)
/**
 * @description Coding Challenge
 * isAnagram should accept 2 strings and return true if strings are anagram
 * Anagrams are strings constructed from the same set of characters
 * 
 * @returns Boolean flag if the words were Anagram
 */
function isAnagram(word, checkWord) {
    return false;
}
// Expected Output: true
isAnagram("Desserts", "Stressed");
// Expected Output: false
isAnagram("Hello", "World");

/*****************************************************************************************************************/

// 11)
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1.slice(-1));
console.log(arr2.slice(-1));

/***********************************/

// Hoisting
function test(){
console.log(a,b,c);

var a = 0;
let b = 1;
const c = 2;
}
test(); // Output: undefined b cannot be initialized (temperal dead zone)

/********************************/

// Implicit and Explicit Binding
var obj1 = {
name: "Test",
display: function() {
console.log(this.name);
}};

var obj2 = {
name: "Test2"
};

obj1.display.call(obj2) // Output: Test2

/******************************************/

var obj1 = {
name: "Test",
display: () => {
console.log(this.name);
}
};

var obj2 = {
name: "Test2"
};

obj1.display.call(obj2) // Output: Nothing as it is an arrow function and it refers to window object

/**********************************************/

// Memoization
function fib(n, previousFib = []) {
  let result;
  if (previousFib[n] != null) {
    return previousFib[n];
  }
 if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, previousFib) + fib(n - 2, previousFib);
  }
  previousFib[n] = result;
  return result;
}
console.log(fib(1000));
https://www.section.io/engineering-education/an-introduction-to-memoization-in-javascript/

/**********************************************/

// Infinite Currying
function sum(a){
  return function (b){
      if(b){
	   return sum(a+b);
	}
      return a;
   }
}

console.log(sum(3)(2)(4)(5)()); // Output: 14

/**********************************************/

const calculate = {
  total:0,
  add: function (num) {
     this.total += num;
     return this;
  },
  multiply: function (num) {
     this.total *= num;
     return this;
  },
  sub: function (num) {
     this.total -= num;
     return this;
  },
  divide: function (num) {
     this.total /= num;
     return this;
  }
};

const ans = calculate.add(10).multiply(20).sub(50);
console.log(ans.total);

/**********************************************/

console.log(null == undefined) // true
console.log(null === undefined) // false 

/**********************************************/

// flatten array
const flat = (arr, ans = []) => {
    arr.forEach(val => {
    if(Array.isArray(val)){
        flat(val, ans);
        }else{
            ans.push(val);
        }
    })
return ans;
}
let value = [1,2,[3,4],5,6,7,[8,[9,10]]];
console.log(flat(value));

/**********************************************/

function varScoped() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i* 1000)
    }
};
varScoped(); // 3 3 3

function letScoped() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i* 1000)
    }
};
letScoped(); // 0 1 2

/**********************************************/

// Unique values in array
[1,2,3,4,1,2,3,4].filter((value, index, self) => self.indexOf(value) === index);
