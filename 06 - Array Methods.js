/************************************************** Array Methods *****************************************************/

// 1) push - adds element in the end

      let arr = [];

      arr.push(1);
      // output - array length

// 2) unshift - adds element in the beginning

      let arr = [2,3];
      let elements = [0,1];

      arr.unshift(...elements);
      // output - array length

// 3) pop - removes last element

      let arr = [2,3];

      arr.pop();
      // output - removed element

// 4) shift - removes the first element
      
      let arr = [2,3];

      arr.shift();
      // output - array length

// 5) slice - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

      let arr = [1,2,3];

      arr.slice(0,2);
      // output - [1,2]

// 6) splice - add or remove elements from array

      // Array.splice(startIndex, removeCount, ...items);
      let arr = [1,2,3];

      arr.splice(1,1); 
      // remove - output - [1,3]

      arr.splice(1,1,6); 
      // add - output - [1,6,3]

// 7) filter - filters out the values where the condition is satisfied in return statement
      
      // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
      // Our objective: get the total score of force users only.
      var personnel = [
            { id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true },
            { id: 82, name: "Sabine Wren", pilotingScore: 73, shootingScore: 99, isForceUser: false },
            { id: 22, name: "Zeb Orellios", pilotingScore: 20, shootingScore: 59, isForceUser: false },
            { id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67, isForceUser: true },
            { id: 11, name: "Caleb Dume", pilotingScore: 71, shootingScore: 85, isForceUser: true }
      ];
      const totalJediScore = personnel
            .filter(person => person.isForceUser)
            .map(jedi => jedi.pilotingScore + jedi.shootingScore)
            .reduce((acc, score) => acc + score, 0);
      // output - 420

// 8) map - evaluates each item, returns an array

      // Example same as 7)
      
// 9) reduce - filters out the values where the condition is satisfied in return statement

      // Example same as 7)
      const totalJediScore = personnel.reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0);
      // output - 420

// 10) find - returns the first matched element

       const arr = [5, 12, 8, 130, 44];
       
       arr.find(element => element > 10);
       // output: 12

// 11) every - return true or false after checking all elements

       const arr = [1, 30, 39, 29, 10, 13];
       const isBelowThreshold = (currentValue) => currentValue < 40;

       arr.every(isBelowThreshold);
       // output: true

// 12) some - return true or false after at least 1 true

       const arr = [1, 2, 3, 4, 5];
       // checks whether an element is even
       const even = element => element % 2 === 0;

       arr.some(even);
       // output - true

// 13) join - can join array as a string with some delimiter - default is comma

       let arr = [1,2,3];

       arr.join();
       // output - 1,2,3

       arr.join("");
       // output - 123

// 14) toString - joins array as a csv

       let arr = [1,2,3];

       arr.toString();
       // output - 1,2,3

// 15) includes - checks for value in array

       // Array.includes(element, fromIndex);
       let arr = [1,2,3];

       arr.includes(1);
       // output - true

       arr.includes(1, 1);
       // output - false
