// Storage

// With web storage, web applications can store data locally within the user's browser.
// Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

// window.localStorage

// The localStorage object stores the data with no expiration date.
// The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

localStorage.setItem("lastname", "Smith");
// Retrieve
localStorage.getItem("lastname");

// window.sessionStorage

// The sessionStorage object is equal to the localStorage object, except that it stores the data for only one session.
// The data is deleted when the user closes the specific browser tab.