# Design Patterns

    1)  Constructor Pattern -
            A constructor method is used to initialize a newly created object.
            It accepts arguments to set values of member properties & methods when object is created.
            The keyword this references the new object.

            function Car(model, year, miles) {
                this.model = model;
                this.year = year;
                this.miles = miles;
            }
            Car.prototype.display = function () {
                return `${this.model} has done ${this.miles} miles`;
            };

            // Usage:
            const bmw = new Car("M4", "2019", "1000");
            const civic = new Car("Honda Civic", 2009, 20000);

            console.log(bmw.display());
            console.log(civic.display());

    2)  Module Pattern -
            We’re able to include both public/private methods and variables inside a single object & expose only what is necessary.
            To keep unit of code for a project cleanly separated and organized.

            const testModule = (function() {
                let counter = 0;
                return {
                    incrementCounter: () => ++counter,
                    resetCounter: () => {
                        console.log("Counter before reset was " + counter);
                        counter = 0;
                    }
                };
            })();

            // Usage:
            testModule.incrementCounter();
            testModule.resetCounter();
            // counter is private variable & is only accessible inside the module.

    3)  Revealing Module Pattern -
            The only difference is that the revealing module pattern was engineered as a way to ensure that all methods and variables are kept private until they are explicitly exposed; usually through an object literal returned by the closure from which it’s defined.
            const myRevealingModule = (function() {
                function myMethod() {
                    console.log("my method");
                }
                function myOtherMethod() {
                    console.log("my other method");
                }
                // explicitly return public methods when this object is instantiated
                return {
                    someMethod: myMethod,
                    someOtherMethod: myOtherMethod
                };
            })();

            //Usage:
            myRevealingModule.someMethod();
            myRevealingModule.someOtherMethod();

    4)  Singleton Pattern -
            const singletonPattern = (function() {
                let instance;

                function init() {
                    return {
                        manufacturer = 'Tesla',
                        model = 'S',
                    };
                }
                return {
                    getInstance: function() {
                        if (!instance) {
                            instance = init();
                        }

                        return instance;
                    }
                }
                })();

            // Usage:
            const instanceA = singleton.getInstance();
            const instanceB = singleton.getInstance();
            console.log(instanceA === instanceB); // true

    5)  Prototype Pattern -
            var myCar = {
                name: "Ford Escort",
                drive: function () {
                    console.log( "Weeee. I'm driving!" );
                },
                panic: function () {
                    console.log( "Wait. How do you stop this thing?" );
                }
            };

            // Use Object.create to instantiate a new car
            var yourCar = Object.create(myCar);
            // Now we can see that one is a prototype of the other
            console.log( yourCar.name );

    6) Factory Pattern -
            const Laptop = function({ ram, hdd, name }) {
                this.ram = ram || 0;
                this.hdd = hdd || 0;
                this.name = name || "";
            };
            const Tablet = function({ ram, hdd, name, network }) {
                this.ram = ram || 0;
                this.hdd = hdd || 0;
                this.network = network || 0;
                this.name = name || "";
            };
            const gadget = { Laptop, Tablet };
            const createGadget = function(type, attributes) {
                const GadgetType = gadget[type];
                return new GadgetType(attributes);
            }

            // Usage:
            const myLaptop = createGadget("Laptop", {
                ram: 8,
                hdd: 256,
                name: "Bob's MacBook Pro"
            });
            const myTablet = createGadget("Tablet", {
                ram: 4,
                hdd: 128,
                name: "Bab's iPad",
                network: "4G"
            });
            console.log(myLaptop);
            console.log(myTablet);

    7) Observer Pattern -
            const Subject = function() {
                this.observers = [];

                return {
                    subscribeObserver: function(observer) {
                        this.observers.push(observer);
                    },
                    unsubscribeObserver: function(observer) {
                        let index = this.observers.indexOf(observer);
                        if(index > -1) {
                            this.observers.splice(index, 1);
                        }
                    },
                    notifyObserver: function(observer) {
                        let index = this.observers.indexOf(observer);
                        if(index > -1) {
                            this.observers[index].notify(index);
                        }
                    },
                    notifyAllObservers: function() {
                        for(let i = 0; i < this.observers.length; i++){
                        this.observers[i].notify(i);
                        };
                    }
                };
            };

            const Observer = function() {
                return {
                    notify: function(index) {
                        console.log("Observer " + index + " is notified!");
                    }
                }
            };

            const subject = new Subject();
            const observer1 = new Observer();
            const observer2 = new Observer();

            subject.subscribeObserver(observer1);
            subject.subscribeObserver(observer2);

            subject.notifyObserver(observer2); // Observer 2 is notified!

            subject.notifyAllObservers();
            // Observer 1 is notified!
            // Observer 2 is notified!

            https://github.com/prof3ssorSt3v3/pubsub-demo
