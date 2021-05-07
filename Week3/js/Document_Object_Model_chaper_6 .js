const body = document.body;
console.log(body); // access to the body

console.log(body.nodeType);
console.log(body.nodeName);

for(let i = 0; i < document.images.length; i++){
    // do what you want
}
const imageArray = Array.from(document.images);
const Image_array = [...document.images];

// Getting An Element By Its ID
const h1 = document.getElementById('title');

// Get Element By Their Tag Name
const listItems = document.getElementsByTagName('li');

// Get Elements By Their Class Name
// const heros = document.getElementByClassName('hero');

// QUERY SELECTOR
const query = document.querySelector('#bats'); // replace the id selector
const query1 = document.querySelectorAll('.hero'); // all with class = "hero"

// const batman = ul.querySelector('li#bats');

// IN THE DOM TREE
const heroes1 = document.getElementById('roster');
// console.log(heroes1.childNodes);

const wonderWoman = document.querySelector('ul#roster li:last-child');
console.log(wonderWoman);
//<li class="hero">Wonder Woman</li>

// Finding the Value of a Node
console.log(wonderWoman.parentNode);
console.log(wonderWoman.nextSibling);

// Finding the Value of a Node
const textNode = wonderWoman.firstChild;
console.log(textNode);
// "Wonder Woman"

console.log(wonderWoman.textContent);

// GETTING AN ELEMENT'S ATTRIBUTES
// getAttribute()

console.log(wonderWoman.getAttribute('class'));
// hero

// SETTING AN ELEMENT'S ATTIBUTE
wonderWoman.setAttribute('class', 'villian');// changing the class
console.log(wonderWoman.getAttribute('class'))// new class 'villian'

wonderWoman.setAttribute('id', 'amazon'); // Add new ID
console.log(wonderWoman.getAttribute('id'))

//className
console.log(wonderWoman.className = 'hero'); // Mew class
console.log(wonderWoman.getAttribute('class'));
// class="hero"

//--- classList ---
wonderWoman.classList.add('warrior'); // adding a class="hero warrior"
console.log(wonderWoman.className);
// hero warrior
wonderWoman.classList.remove('warrior');
console.log(wonderWoman.className);

// -- toggle
// // The toggle method is a particularly useful method that will add a class if an
// element doesn’t have it already, and remove the class if it does have it. It returns
// true if the class was added and false if it was removed. For example:

wonderWoman.classList.toggle('hero');
console.log(wonderWoman.className); // remove hero

wonderWoman.classList.toggle('hero');
console.log(wonderWoman.className);


//----- Creade An Element
const flash = document.createElement('li');
// --- Create a Text Node
const flashText = document.createTextNode('Flash');
// -- Appending Nodes
flash.appendChild(flashText);

// **-- Easy way--**
const flash1 = document.createElement('li')
flash.textContent = 'Flash';

// --** FUNCTION CREATE ELEMENT**
function createElement (tag,text){
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
};


// __+++__+++ IMPORTANT
// Create to the actual text
const aquaman = document.createElement('li');
const aquaText = document.createTextNode('Aquaman');
aquaman.appendChild(aquaText);

const hero = document.getElementById('roster');
hero.appendChild(flash);
hero.insertBefore(aquaman, wonderWoman);

hero.appendChild(wonderWoman);
hero.removeChild(aquaman); // removing a <li>
hero.appendChild(aquaman); // adding again

// REPLACING ELEMENTS ON  PAGE
// replaceChild()

const title = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText, oldText);


//innerHTML
title.innerHTML = 'Suicide Squad'//***EASY WAY */

hero.innerHTML = '<li>Harley Quinn</li><li>Killer Crock</li><li>Enchantress</li><li>Captain Boomerang </li><li>katana</li><li>Slipknot</li>';

//--**UPDATING CSS **--

const superman = hero.children[1];
superman.style.border = "red 2px solid";
superman.style.backgroundColor = "blue";

//--** DISPPERARING ACT **--
superman.style.display = 'none';
superman.style.display = 'block';


//** USING WITH CAUTION */
// Its better to add a class and then CSS

superman.classList.add('highlighted');
// CSS CODE
// .highlighted{
//     border: red 2px solid;
// }
