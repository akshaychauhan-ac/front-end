const input = 123304;
let output = "";
const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const toString = function(num) {
    if (num > 0) {
        const char = num % 10;
        let remaining = (num - char) / 10;

        output = arr[char] + output;
        return toString(remaining);
    } else {
        return output;
    }
};

console.log(toString(input));


const input = [
    [1, 2, 3],
    [9, 5, 6],
    [7, 8, 4]
];

const findSums = function(arr) {
    const n = arr.length;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0, j = (n - 1); i < n; i++, j--) {
        sum1 += arr[i][i];
        sum2 += arr[i][j];
    }
    console.log(sum1);
    console.log(sum2);
};

findSums(input);


// function checkAnagram (str1, str2) {
//     if (str1 && str2) {
//         return str1.toLowerCase().split("").sort() === str2.toLowerCase().split("").sort();
//     }
//     return false;
// }
// checkAnagram("Army", "Mary");

function anagramWithoutSort(str1, str2) {
    let tempStr2 = str2.split("");

    if (str1 && str2) {
        for (let i = 0; i < str1.length; i++) {
            if (tempStr2.indexOf(str1[i].toLowerCase()) || tempStr2.indexOf(str1[i].toUpperCase())) {
                tempStr2.splice(tempStr2.indexOf(str1[i].toLowerCase()) || tempStr2.indexOf(str1[i].toUpperCase()), 1);
            }
        }
    }
    console.log(tempStr2.length);
    return !!tempStr2.length;
}
anagramWithoutSort("Army", "Mary");


function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function something() {

    console.log(new Date());

    await delay(1000);

    console.log(new Date());

}
something();


intersection observer

infinite scrolling


/* "54321" */

function sumNumbers(input, sum = 0) {
    sum = input.split("").reduce((acc, num) => {
        return acc + parseInt(num);
    }, 0);
    if (sum / 10 > 1) {
        sum = sumNumbers(sum.toString(), sum);
    }
    return sum;
}

console.log(sumNumbers("54321"));

/* [5,4,5,2,2] */

function nonRepeating(input) {
    const arr = [];
    input.forEach(item => {
        if (arr.indexOf(item) === -1) {
            arr.push(item);
        } else {
            arr.splice(arr.indexOf(item), 1);
        }
    });
    return arr;
}

console.log(nonRepeating([5, 4, 5, 2, 2]));


// accordion

// adobe

/*
0 0 0 0 1 1 1 1
0 0 0 0 0 0 1 1
0 0 1 1 1 1 1 1
0 0 0 0 0 0 0 1
*/

let count = 0;
for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = arr[i].length - 1;
    let mid = Math.floor(right / 2);

    if (arr[i].length === 1) {

    }
    while (left !== right) {
        if (arr[i][mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = (left + right) / 2;
    }
    const newCount = arr[i].length - (left + 1);
    count = newCount > count ? newCount : count;
}

function promiseDelay(delay) {
    let timeout;
    let resolveMethod;
    const result = new Promise((resolve, reject) => {
        resolveMethod = resolve;
        timeout = setTimeout(() => {
            resolve();
        }, delay);
    });
    return {
        result,
        clear: function() {
            if (timeout) {
                clearTimeout(timeout);
                resolveMethod();
            }
        }
    }
}
result = promiseDelay(200)


let obj = {
    x: 2,
    getX: function() {
        setTimeout(() => console.log('a'), 0);
        new Promise(res => res(1)).then(v => console.log(v));
        setTimeout(() => console.log('b'), 0);
    }
}
obj.getX();

function interval(callback, delay) {
    let timeoutMap = {};
    let i = 0;

    function set(callback, delay) {
        function callAgain() {
            timeoutMap[i] = setTimeout(() => {
                callback();
                i++;
                callAgain();
            }, delay);
        }
        callAgain();
    }

    function clear(timeoutId) {
        clearTimeout(timeoutMap[timeoutId]);
    }
    return {
        set,
        clear
    }
}

const inter = interval();
const int1 = inter.set(() => {
    console.log(1);
}, 1000);
inter.set(() => {
    console.log(2);
}, 1000);
inter.clear(int1);

// stanza living

/* arr = [4,6]
s = 10 */

/* 4x + 6y = 10
x + y = 2

/* ()(), (())
2
"((()))","(()())","(())()","()(())","()()()"


function formParenthesis(count) {
  
} */

nums = [2, 7, 11, 15], target = 9

function findPairs(arr, target) {
    let pair = [];

    for (let i = 0; i < arr.length; i++) {
        const index = arr.indexOf(target - arr[i]);
        if (index) {
            pair.push(i);
            pair.push(index);
            break;
        }
    }

    return pair;
}

console.log(findPairs(nums, target));

reduce polyfill


let myObj = {
    a: "abc"
};
let myObj2 = myObj;
console.log(myObj2 === myObj);
let myObj3 = {
    a: "abc"
};

console.log(myObj2 === myObj3);

let a = {
    key: 10
}

function val(obj) {
    obj.key = 20;
}

val(a)

console.log(a)

{
    key: 20
}

function changeObject(x) {
    x = {
        member: "bar"
    };
    console.log("in changeObject: " + x.member);
}
var x = {
    member: "foo"
};
console.log("before changeMember: " + x.member);
changeObject(x);
console.log("after changeMember: " + x.member);

//foo
//bar
//foo

var a1 = {
    a: 10
}
a1 = {
    a: 11
}


const name = {
    first: "ABC",
    printName: () => {
        return this.first;
    }
}
console.log(name.printName())

function method() {
    const obj = {
        value: 5,
        printThis: function() {
            console.log("val", this.value);
        }
    };

    return obj.printThis.bind(obj);
}

const abc = method()
abc();

let str = "abcgdbdgedg";

function print(string) {
    let map = {};
    let output = "";

    string.split("").forEach(str => {
        if (map[str]) {
            map[str] += 1;
        } else {
            map[str] = 1;
        }
    });
    for (let key in map) {
        if (map[key] > 2) {
            output += key;
        }
    }
    return output;
}

console.log(print(str));