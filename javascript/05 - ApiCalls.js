// API Calls

// 1) XMLHttpRequest

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
// request.status
// request.response

/******************************************************************************************************/

// 2) Fetch

// You can use the Cache API with the request and response objects.
// You can perform no-cors requests, getting a response from a server that doesn't implement CORS.
  // You can't access the response body directly from JavaScript, but you can use it with other APIs (e.g. the Cache API)

fetch("https://jsonplaceholder.typicode.com/users")
	.then(res => res.json())
	.then(users => console.log(users));

// Async/Await
async function getUsers() {
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
	return response.json();
}
getUsers().then(data => console.log(data));

/******************************************************************************************************/

// 3) Axios

// npm i axios
axios.get("https://jsonplaceholder.typicode.com/users")
	.then(response => console.log(data))
	.catch(err => console.error(err));

/******************************************************************************************************/

// 4) Ajax Api call by jQuery

// "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET",
  success: function(result) {
    console.log(result);
  },
  error: function(error) {
    console.log(error);
  }
});

/******************************************************************************************************/
