//** ---A SEARCHING EXAMPLE -- */

// Accessing Forms Elements
const form = document.forms[0];
// const form = document.getElementByTaganme('form')[0];
// const form = document.form.search;
// const form = document.form['search'];
// const [input,button] = form.elements;
 
// Form Properties and Methods

const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

// Submiting
// const form = document.forms['search'];
form.addEventListener('submit', search, false);
// function search(event){
//     alert(' Form Submitted');
//     event.preventDefault();
// }


function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

// Inserting a PlaceHolder

input.value= 'Search Here';

input.addEventListener('focus', function(){
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === ''){
        input.value = 'Search Here';
    }
}, false);