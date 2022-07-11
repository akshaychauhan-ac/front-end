const car = {
    model: 'bmw',
    color: 'red',
    price: 2000
}

const obj2 = new Object();

Object.defineProperty(car, "type", {
    writable: true,
    enumerable: true,
    configurable: false,
    value: 'gas'
});

function Car(model, color) {
    this.model = model;
    this.color = color;
}

const c1 = new Car('BMW', 'red');

const ElectricCar = Object.create(Car);
console.log(ElectricCar.model);

const ElectricCar = Object.create(Car, {
    type: {
        value: 'Electric',
        writable: true,
        configurable: false,
        enumerable: true
    }
});
console.log(ElectricCar.type);

class Car {
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}
const car1 = new Car("BMW", 100);
car1.getInfo();