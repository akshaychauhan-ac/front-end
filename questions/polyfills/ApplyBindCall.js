const printName = function (city, country) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + country);
};
const name = {
    firstName: "Hello",
    lastName: "World"
};

Function.prototype.myCall = function(obj, ...args) {
    obj.callFn = this;
    obj.callFn(...args);
}
printName.myCall(name, "Delhi", "India")

Function.prototype.myApply = function(obj, args = []) {
    obj.callFn = this;
  obj.callFn(...args);
}
printName.myApply(name, ["Delhi", "India"])

Function.prototype.myBind = function(val, ...args) {
    const context = this;
    return function(...args2)  {
        context.apply(val, [...args, ...args2]);
    }
}
const fn = printName.myBind(name);
fn("Delhi", "India");