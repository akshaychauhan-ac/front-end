// Event Bubbling/Capturing

// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. 
// With capturing, the process is in reverse. We usually attach an event to a handler using the addEventListener function.

addEventListener("click", handler, useCapture=false);

// The third argument useCapture is the key. The default value is false. 
// So, it will be a bubbling model where the event is handled by the innermost element first and it propagates outwards
	// till it reaches the parent element. If that argument is true, it is capturing model.

// For Ex: Bubbling Model

// <div onClick="divHandler()">
//     <ul onClick="ulHandler">
//         <li id="foo"></li>
//     </ul>
// </div>

function handler() {
 // do something here
}
function divHandler(){}
function ulHandler(){}

// Bubbling Model
document.getElementById("foo").addEventListener("click", handler);
// When we click the list element, the order of execution of handlers is like this in bubbling (default) model.
handler() => ulHandler() => divHandler()

// Capturing Model
document.getElementById("foo").addEventListener("click", handler, true);
divHandler => ulHandler() => handler()
