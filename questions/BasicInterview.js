// Questions

// 1) bind, call, apply

let name = {
	firstName: "Abc",
	lastName: "Xyz"
};
function print() {
	console.log(this.firstName + " " + this.lastName);
}

// ------------------------------------------------------------------------------------------------------------------------


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

// ------------------------------------------------------------------------------------------------------------------------


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
// ------------------------------------------------------------
console.log(1);
setTimeout(function () {
    console.log(2);
},0);
Promise.resolve(3).then(function (num) {
    console.log(num);
});
console.log(4);

// ------------------------------------------------------------------------------------------------------------------------


// 4)

let str = "This is a string.";
str = str.split(" ").map(ele => ele.split("").reverse().join("")).join(" ");

// ------------------------------------------------------------------------------------------------------------------------


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

// ------------------------------------------------------------------------------------------------------------------------


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

a.sum();

// ------------------------------------------------------------------------------------------------------------------------

// 7)

var arr = [[1,2,3],[2,3],[2]]

let firstArr = arr[0];
let iCount = 0;
let iElement = firstArr[0];
let i = 0, j = 0, k = 0;

for (i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let prevCount = iCount;
    let iNextElement = iElement;

    for (j = 0; j < firstArr.length; j++) {
        for (k = 0; k < temp.length; k++) {
            if (firstArr[j] === temp[k]) {
                iElement = firstArr[j];
                iCount++;
                break;
            }
        }
        if (iCount > prevCount) {
            break;
        }
    }
}
if (iCount === (arr.length - 1)) {
    console.log("element found" + iElement);
}

// ------------------------------------------------------------------------------------------------------------------------


// 8)

var a = 10;
var b = 20;
(function () {
    console.log(a);
    console.log(b);
    var a = 30;
    b = 40;
    console.log(a);
    console.log(b);
})();

// ------------------------------------------------------------------------------------------------------------------------


// 9)

function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
typeof a;
typeof b;

// ------------------------------------------------------------------------------------------------------------------------


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
