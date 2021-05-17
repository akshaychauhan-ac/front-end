// Promises and Callbacks (async/await)

// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). 
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
//		Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
//		Rejected: onRejected() will be called (e.g., reject() was called)
//		Pending: not yet fulfilled or rejected

var promise = new Promise(function(resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
  
promise
	.then(function () {
	    console.log('Success, You are a GEEK');
	}).
	catch(function () {
	    console.log('Some error has occured');
	});

// Geeks For Geeks

/******************************************************************************************************/

var promise = new Promise(function(resolve, reject) {
    throw new Error('Some error has occured')
})
  
promise
	.then(function(successMessage) {
	    console.log(successMessage);
	})
	.catch(function(errorMessage) {
	   //error handler function is invoked
	    console.log(errorMessage);
	});

// Error: Some error has occured

/******************************************************************************************************/

// Async/await

// Async simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread
// Await function is used to wait for the promise. It makes the code wait until the promise returns a result. It only makes the async block wait.

const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}
  
console.log(1);
getData();
console.log(2);
