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
// ------------------------------------------------------------

console.log(1);
setTimeout(function () {
    console.log(2);
},0);
Promise.resolve(3).then(function (num) {
    console.log(num);
});
console.log(4);
/*****************************************************************************************************************/

// 4)
let str = "This is a string";
str = str.split(" ").map(ele => ele.split("").reverse().join("")).join(" ");

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

a.sum();

/*****************************************************************************************************************/

// 7)
let arr = [[1,2,3],[2,3],[2]];

function findNumbers(arr, length1, length2, length3) {
    let i = 0;
    let j = 0;
    let k = 0;
    let elements = [];

    while (i < length1 && j < length2 && k < length3) {
        if (arr[0][i] === arr[1][j] && arr[1][j] === arr[2][k]) {
            elements.push(arr[0][i]);
            i++;
            j++;
            k++;
        } else if(arr[0][i] < arr[1][j]) {
            i++;
        } else if(arr[1][j] < arr[2][k]) {
            j++;
        } else if(arr[2][k] < arr[1][j]) {
            k++;
        }
    }
    console.log(elements);
}
findNumbers(arr[0].length, arr[1].length, arr[2].length);

/*****************************************************************************************************************/

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

/*****************************************************************************************************************/

// 9)
function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
typeof a;
typeof b;

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
