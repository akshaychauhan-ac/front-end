// Call, apply, bind -

// 1) call
var mathLib = {
    pi: 3.14,
    area: function(r) {
        return this.pi * r * r;
    },
    circumference: function(r) {
        return 2 * this.pi * r;
    }
};

mathLib.area(2); // 12.56
mathLib.area.call({pi: 3.14159}, 2);

// 2) apply
var cylinder = {
    pi: 3.14,
    volume: function(r, h) {
        return this.pi * r * r * h;
    }
};
cylinder.volume.apply({pi: 3.14159}, [2, 6]);

// call() and apply() are useful for when you want to borrow a method from one object and use it in a completely separate object.

// 3) bind
var newVolume = cylinder.volume.bind({pi: 3.14159}); // This is not instant call
// After some long time, somewhere in the wild 
newVolume(2,6); // Now pi is 3.14159

// bind - adding a context which will be accessible in the method (useful while calling)
// useful for maintaining context in asynchronous callbacks and events