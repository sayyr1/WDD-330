
const Dice0 = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
// Crate a instance of the constructor
const redDice = new Dice0();
console.log(redDice.sides) // 6
console.log(redDice.roll()) //2

// CLASSES

class Dice {
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
        return 'A way of choosing rando numbers'
    }
}

console.log(Dice.description()); // Method called from the Dice class

// Prototypal Inheritance

class Turtle0 {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hey dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`
    }
}

const leo = new Turtle0('Leonardo');
console.log(leo);
console.log(leo.sayHi());
console.log(leo.attack());

// Prototepy property
// if you want to augment the class with
// extra methods and properties after it has been created
Turtle0.prototype.weapon = 'Hands';

// adding methods
Turtle0.prototype.attack = function () {
    return `Feel the power of my ${this.weapon}`;
}
console.log(leo.weapon);
console.log(leo.attack());
// Finding out the Property

leo.weapon = 'knife';
console.log(leo.attack());


Turtle0.prototype.eat = function () {
    return 'This pizza tastes great!'
}

const mike = new Turtle0('Michelangelo');
console.log(mike.eat());

mike.weapon = 'Nunchackus';
console.log(mike.attack());


/** --- Public and Private Methods-- */

// Getters and Setters

class Turtle1 {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

// const raph = new Turtle0('Raph');
const raph = new Turtle1('Raphael', 'Red');
console.log(raph.getColor());
console.log(raph.setColor(4));


//** --- INHERITANCE --- */
class NinjaTurtle extends Turtle1 {
    constructor(name) {
        super(name); // Inherite the name from the parent
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` }
}

const john = new NinjaTurtle('Juan');
console.log(john.setColor(4));


//** -- POLYMORPHISMO --- */
//The concept of polymorphism means that different objects can have the same
// method, but implement it in different ways.

// toString() Method is so important

// Adding Methods to Built-in Objects

// monkey parching
Number.prototype.isEven = function () {
    return this % 2 === 0;
}

Number.prototype.isOdd = function () {
    return this % 2 === 1;
}

console.log(42..isEven());
console.log(42..isOdd());

//** --- Getters and Setters --- */
class Dice2 {
    constructor(sides = 6) {
        Object.defineProperty(this, 'sides', {
            get() {
                return `this dice has ${sides} sides`
            },
            set(value) {
                if (value > 0) {
                    sides = value;
                    return sides;
                } else {
                    throw new Error('The number of sides must be positive')
                }
            }
        });
        this.roll = function () {
            return Math.floor(sides * Math.random() + 1)
        }
    }
}
const yellowDice = new Dice2;

console.log(yellowDice.sides);
yellowDice.sides = 10;
console.log(yellowDice.sides);

/** --  Creating Objects from Other Objects --- */
const Human = {
    arms: 2,
    legs: 2,
    walk() {
        console.log('Walking');
    }
}
const lois = Object.create(Human);
// Creating a new objects

lois.arms;
// 2
lois.legs;
// 2
lois.walk()
// Walking
Human.isPrototypeOf(lois);
//true

// Adding properties for each instance using assignment
lois.name = 'Lois Lane';
//'Lois Lane'


//** ---- MIXIN--- */
function mixin(target, ...objects) {
    for (const object of objects) {
        if (typeof object === 'object') {
            for (const key of Object.keys(object)) {
                if (typeof Object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key], object[key]);
                }
                else {
                    Object.assign(target, object);
                }
            }
        }
    }
    return target;
}
const a = {}, b = { foo: 'bar' }, c = { numbers: [1,2,3] };
mixin(a,b,c);
// { foo: 'bar', numbers: [ 1, 2, 3 ] }
c.numbers.push(4);
// 4
a.numbers
// [ 1, 2, 3 ]
c.numbers
// [ 1, 2, 3, 4]