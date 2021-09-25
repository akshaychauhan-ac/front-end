# Design Patterns

    1)  Constructor Pattern -
            function Car(model, year, miles) {
                this.model = model;
                this.year = year;
                this.miles = miles;
            }

            // Usage:
            var bmw = new Car('M4', '2019', '1000');

    2)  Module Pattern -
            var testModule = (function() {
                var counter = 0;
                return {
                    incrementCounter: function() {
                      return ++counter;
                    },
                    resetCounter: function() {
                      counter = 0;
                    }
                };
            })();

            // Usage:
            testModule.incrementCounter();
            testModule.resetCounter(); 

    3)  Revealing Module Pattern -
            var myRevealingModule = (function() {
                let privateVariable = 'not okay',
                    publicVariable = 'okay';
                function privateFun() {
                    return privateVariable;
                }
                function publicSetName(strName) {
                    privateVariable = strName;
                }
                function publicGetName() {
                    privateFun();
                }
                return {
                    setName: publicSetName,
                    message: publicVariable,
                    getName: publicGetName
                };
            })();

            //Usage:
            myRevealingModule.setName('Marvin King');

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
