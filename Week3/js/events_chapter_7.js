// /** EVENT LISTENER */
 doSomething = (event) => console.log('Something happened');

addEventListener('click', doSomething);
// 'Something happened'



// /** EVENT OBJECT */
function do_somethig(event){
    console.log(event.type) // Type
} 
addEventListener('click', do_somethig);
// 'click'

function doSomething1(wathever){
    console.log(wathever.target); // Target of the event
}
addEventListener('click', doSomething1);

// -Coordinates of an event
function doSomething3(event){
    console.log(
        `screen: (${event.screenX}, ${event.screenY}),
         page: (${event.screenX}, ${event.screenY}),
         client: (${event.screenX}, ${event.screenY})
        `
    )
}
addEventListener('click', doSomething3);



/** TYPE OF EVENTS */
/** --Mouse--- */
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('mousedown'));
clickParagraph.addEventListener('mouseup', () => console.log("mouseup"));


const doubleClick = document.querySelector('#dblclick');
doubleClick.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));

/** --Keyboard--- */

document.addEventListener('keydown', highlight);

addEventListener('keyup', (event) => console.log(`You stopped pressing the kwy
on ${new Date}`));

addEventListener('keypress', (event) => console.log(`
you pressed the ${event.key} character
`));

addEventListener('keydown', (event) => console.log(`
you pressed the ${event.key} character
`))

document.addEventListener('keydown', (event) => {
if(event.key === 'c' && event.ctrlKey) {
    console.log('Action canceled!');
}
});

/** REMOVING EVENT LISTENERS */
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event){
    console.log('Enjiy this while it lasts!');
    onceParagraph.style.backgroundColor = 'black';
    onceParagraph.removeEventListener('click', remove);
}

/** STOP DEFAULT BEHAVIOR */

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link');
}
)

//** BUBBLING */
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );