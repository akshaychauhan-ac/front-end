// 1) XMLHttpRequest

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
// request.status
// request.response


// 2) Fetch

fetch("https://jsonplaceholder.typicode.com/users")
	.then(res => res.json())
	.then(users => console.log(users));

// Async/Await

async function getUsers() {
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
	return response.json();
}
getUsers().then(data => console.log(data));


// 3) Axios

// npm i axios
axios.get("https://jsonplaceholder.typicode.com/users")
	.then(response => console.log(data))
	.catch(err => console.error(err));

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
