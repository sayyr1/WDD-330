// /***---------------------------------------
//  * FURTHER FUNCTION
//  --------------------------------------------*/

// /**----------
//  * Call and Apply Methods
//  * ----------- */

// // function sayHello() {
// //     return `Hello, my name is ${this.name}`; // this is refering to an unspecific object
// // }

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
console.log(sayHello.call(clark));
// //Hello, my name is Clark

// /**With parameters */ 
function sayHello(greeting = 'Hello') {
    return `${greeting}, my name is ${this.name}`
}
console.log(sayHello.call(clark, 'How do you do')); //How do you do, my name is Clark
console.log(sayHello.call(clark))

// //console.log(sayHello.call(null, 4)) If the Functions doesn't refer to an object use "null". 

// function square(x) {
//     return x * x;
// }
// console.log(square.call(null, 4));
// console.log(square.apply(null, [4]));

// /**----------
//  * Memoization
//  * ----------- */
function square1(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}
// console.log(square1(3))
// console.log(square1(-11))
// console.log(square1.cache)

/***---------------------------------------
 * Inmediately Invoked Function Expression(IIFE)
 --------------------------------------------*/

 (function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();

(function() {
    const name = 'Peter Parker'; // This might be obtained fr a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
    })();
(function(){
    console.log("hola que hace");
}());

/***---------------------------------------
 * RECURSIVE FUNCTIONS
 --------------------------------------------*/
function collatz(n, sequence=[n]){
    if (n === 1) {
        return `Sequences took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n%2 === 0){
        n = n/2;
    }
    else {
        n = 3*n + 1;
    }
    return collatz(n, [...sequence,n])
}
console.log(collatz(18));

/***---------------------------------------
 * Event-driven Asynchronous Programming
--------------------------------------------*/
function wait(message, callback, seconds){
    setTimeout(callback, seconds * 1000);
    console.log(message);
}
//Create a callback
function selfDestruct(){
   // console.log("BOO00M!");
}
wait('This tape will self-destruct in five seconds...', selfDestruct, 5);
console.log('Should I accept this mission or not?')

wait('This tape will self-destruct inmediately', selfDestruct, 0);


/***---------------------------------------
 * Dealing With A Settled Promise
--------------------------------------------*/
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
        setTimeout(()=>{resolve(n)},n*200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});
roll.then(result => console.log(`I rolled a ${result}`) ).catch(result => console.log(`Drat! ... I rolled a ${result}`) );
console.log('After the roll');


/***---------------------------------------
 * Generalized Functions
--------------------------------------------*/
function random(a,b=1){
    // if only 1 arguments is provided, we need to swap the values of a and be
    if(b === 1){
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}
console.log(random(6));
console.log(random(10,20));

function random1(a,b,callback) {
    if(b === undefined) b=a, a=1; // if only one argument is supplied, assume the lower limit is 1
    const result = Math.floor((b-a+1) * Math.random()) + a;
    if(callback) {
        result = callback(result);
    }
    return result;
}

function square(n) {
    return n*n;
}
console.log(random1(1,10));


/***---------------------------------------
 *  Functions That Return Functions
--------------------------------------------*/

function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World');
    }
}
returnHello();
const hello = returnHello();
hello();

function greeter (greeting = 'Hello') {
    return function(){
        console.log(greeting)
    }
}
const englishGreeter = greeter();
englishGreeter();
const spanishGreeter = greeter('Hola');
spanishGreeter();


/***---------------------------------------
 * Function Scope
--------------------------------------------*/
function outer() {
    const outside = 'Outside';
    function inner() {
        const inside = 'Inside';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}
outer();
function closure(){
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}
const toFarenheit = closure();
console.log(toFarenheit(30));