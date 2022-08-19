const body = document.body;

// create a new element
const element = document.createElement("div");
element.innerText = "Element 1";

const element2 = document.createElement("div");
element2.innerText = "Element 2";

// add a new element

// 1. append can include strings and tags
body.append(element);
// 2. appendChild can only include tags
body.appendChild(element2);

// remove element

//1. removing the element by itselt
const elementRef = document.createElement("div");
elementRef.remove();

//2. removing the element from parent
const elementRef2 = document.createElement("div");
body.appendChild(elementRef2);
body.removeChild(elementRef2);

// add/remove class to element

elementRef.classList.add("dummy-class");
elementRef.classList.remove("dummy-class");
elementRef.classList.toggle("sfs"); // adds the class if not there, else removes if already present
