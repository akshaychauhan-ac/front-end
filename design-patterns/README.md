# Design Patterns

    1)  Constructor Pattern -
            function Car(model, year, miles) {
                this.model = model;
                this.year = year;
                this.miles = miles;
            }

            // Usage:
            const bmw = new Car('M4', '2019', '1000');

    2)  Module Pattern -
            This is used to further emulate the concept of classes in such a way that we’re able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope.
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

    3)  Revealing Module Pattern -
            The only difference is that the revealing module pattern was engineered as a way to ensure that all methods and variables are kept private until they are explicitly exposed; usually through an object literal returned by the closure from which it’s defined.
            const myRevealingModule = (function() {
                function myMethod() {
                    console.log('my method');
                }
                function myOtherMethod() {
                    console.log('my other method');
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
            let singletonPattern = (function() {
                let instance;
                function init() {
                    // Singleton
                    function privateMethod() {
                      console.log('privateMethod');
                    }
                    let privateVariable = 'this is private variable';
                    let privateRandomNumber = Math.random();
                    return {
                        publicMethod: function() {
                            console.log('publicMethod');
                        },
                        publicProperty: 'this is public property',
                        getRandomNumber: function() {
                            return privateRandomNumber;
                        }
                    };
                }

                return {
                    // Get the singleton instance if one exists or create if it doesn't
                    getInstance: function() {
                        if (!instance) {
                            instance = init();
                        }
                        return instance;
                    }
                };
            })();

            // Usage:
            let single = singletonPattern.getInstance();

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
