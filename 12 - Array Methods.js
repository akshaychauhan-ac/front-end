/************************************************** Array Methods *****************************************************/

// 1) push - adds element in the end

      let arr = [];
      arr.push(1);

// 2) unshift - adds element in the beginning

      let arr = [2,3];
      let elements = [0,1];
      arr.unshift(...elements);

// 3) pop - removes last element

      let arr = [2,3];
      arr.pop();

// 4) shift - removes the first element
      
      let arr = [2,3];
      arr.shift();

// 5) slice - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

      let arr = [1,2,3];
      arr.slice(0,2); // [1,2]

// 6) splice - add or remove elements from array

      // Array.splice(startIndex, removeCount, ...items);
      let arr = [1,2,3];
      arr.splice(1,1); // remove - [1,3]
      arr.splice(1,1,6); // add - [1,6,3]

// 7) filter - [Link](https://github.com/akshaychauhan-ac/javascript/blob/master/05%20-%20map%2C%20reduce%2C%20filter.js)

// 8) map - https://github.com/akshaychauhan-ac/javascript/blob/master/05%20-%20map%2C%20reduce%2C%20filter.js

// 9) reduce - https://github.com/akshaychauhan-ac/javascript/blob/master/05%20-%20map%2C%20reduce%2C%20filter.js

// 10) find - returns the first matched element

// 11) every - return true or false after checking all elements

// 12) some - return true or false after at least 1 true

// 13) join - can join array as a string with some delimiter - default is comma

// 14) toString - joins array as a csv

// 15) includes - checks for value in array
