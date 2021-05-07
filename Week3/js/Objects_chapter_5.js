const Superman = {
    name1: 'Clarck',
    age: 25
}
console.log(Superman.age); // Accesing an Object using 'dot'
console.log(Superman['name1']); //

// const realName = Symbol('real name');
// supergirld[realName] = 'Kara Danvers';


//

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villian: false,
    allies: ['Batmn', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }

};

for ( const key in superman) {   // key is for the property names.
    console.log(key + ":" + superman[key]); // superman[key] is for the value of each property
}

for (const key1 in superman){
    if(superman.hasOwnProperty(key1)){
        console.log(key1 + ":" + superman[key1]);
    }

}
for(const values of Object.values(superman)){
    console.log(values);  // Just the values
}

for (const [key, values] of Object.entries(superman)) {
    console.log(`${key}: ${values}`)
}

// Adding Properties
superman.city = 'Metropolis';
console.log(superman);

//Changing Properties
superman['real name'] = 'Kal El'; // Property changed
console.log(superman)

//Removing Properties
delete superman.fly;
console.log(superman);

// Nesting Objects
const jla = {
    superman: {realName: 'Clark Kent'},
    batman: {realName: 'Bruce Wayne'},
    wonderWoman: {realName: 'Diana Prince'}
}

console.log(jla.wonderWoman.realName);
console.log(jla['batman']['realName']);
console.log(jla.superman['realName']);

// Objects as Parameters to Function
function greet ({greeting = 'Hello', name, age = 18}){
    return `${greeting}! My name is ${name} and I am ${age} years old`;
}
console.log(greet({name : 'Lisa'}));

// This
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log(dice.roll());
dice.sides = 20;
console.log(dice.sides); // Changing the number of sides


// --JSON --
const batman2 = '{"name": "Batman","real name": "Bruce", "weight": 20}'
console.log(JSON.parse(batman2)); // To Object

console.log(JSON.stringify(superman)); // To JSOn
console.log(JSON.stringify(superman, null, " "));

// Math Methods
console.log(6 * Math.random()); // Random numebers between 0 - 6

console.log(Math.floor(6 * Math.random())); //Random integer

// -- Date Objects
const today = new Date();
console.log(today.toString());
//Mon May 03 2021 17:58:49 GMT-0500 (Ecuador Time)

const myBirthday = new Date('2021 11 1'); // other dates
console.log(myBirthday.toString());

// Regular Expression
const language = /[a-zA-Z]+ing$/;
const pattern = new RegExp(language);
console.log(pattern.test('joking'));

const pdf = /.*\.pdf$/;
console.log(pdf.test('fsdfsdfsdf.pdf'));
//true

