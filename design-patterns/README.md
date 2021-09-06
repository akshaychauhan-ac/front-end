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
                var privateVariable = 'not okay',
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
            var singletonPattern = (function() {
                var instance;
                function init() {
                    // Singleton
                    function privateMethod() {
                      console.log('privateMethod');
                    }
                    var privateVariable = 'this is private variable';
                    var privateRandomNumber = Math.random();
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
            var single = singletonPattern.getInstance();

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

            