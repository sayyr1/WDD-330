/* CHAPTER 2**/
//This is using Template Literals
const she = 'Siri';
console.log(`Hello\n ${ she }!`);
const age = 9;
console.log(`His age is ${ age } \` years old`) //placing a backtick

// SYMBOLS 

const uniqueID = Symbol('this is a unique ID');
console.log(typeof uniqueID); // typeof is for know the type of the variable
console.log(uniqueID);

//NUMBERS
console.log(Number.isInteger(42));

// EXPONENTIAL NOTATION
console.log(1e6); //1000000 one million
console.log(2E3); // 2 multiplied by 10^3 (two thousand)
console.log(2.5e-3)//


// NUMBER methods

const number1 = (5).toExponential(); //using parenthesis in the numbers
console.log(number1);

const PI = 3.1415926;
console.log(PI.toFixed(2)); // Just fix as a String with the determinates places

const otherNumber = 2.459 .toPrecision(3); // This method is for rounding
console.log(otherNumber);

// ARITHMETIC OPERATIONS

// there are operations that I already reviewed. 

// INCREMENTING VALUES
let points = 5;
points++;
console.log(points); // So what’s the difference between putting the ++ operator before or after the
// variable? The main difference is the value that is returned by the operation. Both
// operations increase the value of the points variable by 1, but points++ will
// return the original value then increase it by 1, whereas ++points will increase the
// value by 1, then return the new value:

++points;
console.log(points);

// CHECKING A VALUE IS A NUMBER
console.log(Number.isFinite(1/0));

//  PARSING NUMBERS
console.log(parseInt('1010',2));

const address = '221B Bakes Street';
console.log(parseInt(address, 10)); // Converts string into integer

const floatNumber = '2.89';
console.log(parseFloat(floatNumber, 10)); // Strings to Floatnumber. 

// BOOLEANS

// EQUALITIES
//Soft Equality answer == 5; <<true
// Hard Equality, answer === '5'; false
// Always use the Hard Equality. 
const answer = 5;
console.log(answer === '5');

// INEQUALITY
console.log( 16 !== '16'); // Always use the !==

////////////////////////////////////////////////////////
/* CHAPTER 3**/

//--------ARRAYS (methods)-------
 const avenger = ['Hulk', 'Iron Man', 'Thor', 'Black Widow'];
 console.log(avenger);
 console.log(avenger[avenger.length-1]); // lenght -1, is for the last in the array

 console.log(avenger.pop()); // Return the last item of the array, but the array no longer contains that item.
 console.log(avenger);

 console.log(avenger.shift());
 console.log(avenger); // Retunt the first item, but removes.

 console.log(avenger.push('Sayri')); // Add a new item in the LAST, and  return the value of the new length.

 console.log(avenger.unshift('New Superhero')); // Add a new item to the BEGGINING

// merging
 console.log(avenger.concat(['Batman', 'Robbin'])) // "MERGE" an array, buuut it doesn't the average
 console.log(avenger);
const merging = [...avenger,...['Other Sperhero', 'New Superhero']]; // using three dots: ...
console.log(merging);

// join()
console.log(avenger.join()); //Return the Array as String
console.log(avenger.join(' & ')); // Adding "&" in the middle of each item

//slice()
 console.log(avenger.slice(2,4)); //starts at the third item (index of 2)
// ➥ and finishes at the fourth (the item with index 4 is not
// ➥ included)

//splice()
console.log(avenger.splice(2, 1, 'Johan')); // First number the index, and the second how many items to remove from the array. 
console.log(avenger);
console.log(avenger.splice(1, 0, 'Friend')); // Without removing just adding a item

//reverse()
console.log(avenger.reverse()); //reverse the array

//sort()
console.log(avenger.sort()); // Changes the order permanentely 

//indexOf()
console.log(avenger.indexOf('Sayri')); // the place
//includes if is true or false in the array
console.log(avenger.includes('Sayri', 2)); //The numeber is for where to start to search

// Multidimentional array
const coordinates = [[2,3], [4,5], [3,7]];
const otherCoordinates = [2,2,2,2,2]
console.log(coordinates[1][0]); //Accessing to the item of the outer array and the inner
console.log([...coordinates, ...otherCoordinates]);

//------SETS ---------
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla);
console.log(jla.size); // method for the size of the set

console.log(jla.has('Superman')); // If contains the item(true or false)
// Sets do not have Index notation

// delete()
console.log(jla.delete('Superman')); //Removing a value for the set

//clear()
console.log(jla.clear()); //Removing all the values in the set
console.log(jla.size);  // All thes items are removed

// Set to Array and Viceversa
const set = new Set().add('Edwin').add('Sayri').add('Quinchiguango');
const array = [...set]; //Converting to Array
const array1 = Array.from(set); // Another way
console.log(array1);

const array2 = ['John', 5, 'Juan'];
const set2 = new Set(array2);
console.log(set2);

// -- MAPS ---
const romanNumerals = new Map();
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV');
console.log(romanNumerals); // In the aoutpur appears using "hash rocket symnol =>"
 
//get()
console.log(romanNumerals.get(2)); // It is like a dictionary
 const array3 = [...romanNumerals];
 const array4 = [Array.from(romanNumerals)];
 console.log(array3);

 //--- LOGIC---
 //if
 const if_age = 12;
 if(age < 18){
 console.log('I am sorry your are not old enough');
 }

 //else
 const n = 12;
 if(n%2 === 0){
     console.log(n + ' is an even number');
 }
 else{
     console.log(n + 'is an odd number')
 }

 // Ternary Operator
 const h = 7;
 h % 2 === 0 ? console.log(h + ' is an even number') :
  console.log(n + ' is an odd number');
//inside of template string
console.log(h+  ` is a ${(h%2 === 0)? 'even' : 'odd'} number`)

//switch
switch (h) {
    case 4:
        console.log('You rolled 4');
        break;
    case 5:
        console.log("You rolled 5");
        break;
    case 7:
        console.log('You rolled 7');
        break;
    default: // If none works
        console.log('You rolled a number leess than four');
        break;          
}

// LOOPS
//while
let bottles = 10;
while(bottles > 0){
    console.log(`There were ${bottles} green bottles, having
    on a wall. And if one green bottle should accidentaly fall,
    there'd be ${bottles-1} green bottles hanging on the wall`)
    bottles--;
}

//do-while
 let bottles1 = 10;
 do{
     console.log(`There were ${bottles1} green bottles,
     hanging on a wall. And if one green bottle should accidentally fall,
     there'd be ${bottles1-1} green bottles hanging on the wall`)
     bottles1--;

 } while(bottles1 > 0);
//for
for ( let bottles2 = 10; bottles2 > 0; bottles2--) {
    console.log(`There were ${bottles2} bottles, in the house, 
    and one bottle accidentally falls and now is ${bottles2-1} in the wall.`);
}
//nested loops
for(let i = 1; i < 13; i++){
    for(let j = 1; j < 13; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);

    }
}
//looping over arrays
for(const value of avenger){
    console.log(value);
}
// looping over sets
const letter = new Set('hello');
for(const letters of letter){
    console.log(letter);
}
//Looping over maps
const roman_numerals = new Map();
roman_numerals.set(1, 'I').set(2, 'II').set(3,"III");
for(const key of roman_numerals.keys()) { // KEYS of map
    console.log(key);
}
for(const value of roman_numerals.values()){ // accessing to the VALUES
    console.log(value);
}
//**accesing keys and values*/
for(const [key, value] of roman_numerals.entries()){ //accesing to BOTH keys and values
    console.log(`${key} in Roman numerals is ${value}`);
}

///////////////////////////////////////////////////////////////////////////////////////
 /** CHAPER 4 */
 //***FUNCTIONS***
 function hello(){
     console.log('hello World!')     // This is the best way to declare function for me
 }
const goodbye = function() {
    console.log('Goodbay World!');
}
const goodbye1 = function bye() {
    console.log('Goodbye World!')
}

// Invoking the function
hello();
goodbye(); // if I declare the function to a varialble I need to put()

// Return Values
function howdy(){
    return 'Howdy Wordl!';
}
const message = howdy();
console.log(message);

//***PARAMETERS AND ARGUMENTS***
function square(x){ // "x" is acting as parameter
    return x*x // "x" is acting as varible
}
console.log(square(4.5)); // I am invoking the function square asigning(4.5)

function mean(a,b,c){ // I can add many parameters to the functions
    return(a + b + c) / 3;
}
console.log(mean(1, 2, 4));

//variable numbers and arguments
function arguments(){
    return arguments;
}
console.log(arguments('hello', NaN));

function rest(...args){ //rest parameter
    for(arg of args){
        console.log(arg);
    }
}
rest(2,4,6,8);

function means(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}
console.log(means(4, 4 ,4,4,4,4, 2));

// Default parameters
function hello(name = 'World') {
    console.log(`Hello ${name}`)
}
hello(); //Invoking
hello('Universe'); //Overriding

function discount(price, amount = 10) { // amount 10%
    return price * (100 - amount) / 100; // This is a good formula for discounts
}
console.log(discount(20));
console.log(discount(20, 18)); // 18% percents

// Arrow Functions
const add = (x, y) => x + y; // Parameters in parentheses, and don't need to return this is default
const hello3 = () => alert('Hello World!'); // If there is not parameters is "()"

const tax = (salary) => {
const taxable = salary - 8000;
const lowerRate = 0.25 * taxable;
taxable = taxable - 20000;
const higherRate = 0.4 * taxable;
return lowerRate + higherRate;  // I this case I need to put the return
}

// Function Hoisting
// I do not understand at all

// ** CALLBACKS ** (passsign arguments to another)
function sing(song){
    console.log(`I'm singing along to ${song}`)
}
sing('Let It Go')
// I'm singing along to Let It Go

function sing1(song, callback) {
    console.log(`I'm singing along to ${song}`)
    callback();
}

function dance() {
    console.log("I'm moving my body to the groove")
}
sing1('Let it Go', dance) //Dance is passing as an argument  without parentheses
sing1('Let It Go' ,() => {console.log("I'm standing on my head");});

// ** ARRAY ITERATORS **
//forEach()
const colors = ['Red', 'Green', 'Blue'];
colors.forEach( (color, index) =>
console.log(`Color at position ${index} is ${color}`)
);
//map
 const sentence = 'The quick brown fox jumped over the lazy dog'
 console.log(sentence.split());
//  const total = words.reduce( (acc,word) => acc + word.length, 0)
//  console.log(total);

//filter()
const numbers4 = [2, 7, 6, 5, 11, 23, 12];
numbers4.filter(x => x%2 === 0 ); // this returns true if the number is even

// Improving the mean()
function mean6(array) {
    const total = array.reduce((a, b) => a + b);
    return total / array.length
}

function mean7(array, callback) {
    if (callback) {
        array.map( callback );
    }
   const total = array.reduce((a, b) => a + b);
   return total/array.length; 
}
console.log(mean7([2,5,7,11]));