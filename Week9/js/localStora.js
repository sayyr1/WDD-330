const display = document.querySelector('.display');
const input = document.querySelector('[data-input]');
console.log(input, display);
const button = document.querySelector('[type="button"]');
const form = document.querySelector('.form');


// create an empty array
const inputArray = JSON.parse(localStorage.getItem('key'))||[];
console.log(inputArray);

function inputValue(e){
    console.log(e)
    const inputValue = input.value;
    if (inputValue === ""){
        return;
    }

    const items = {
        item: inputValue,
        id : 2
    }
    inputArray.push(items)

    // save to the local Storage.
    localStorage.setItem('key', JSON.stringify(inputArray))

    createInputs(inputArray, display);
    form.reset();
}

function createInputs(items, itemContainer) {
    itemContainer.innerHTML = items.map(items => {
        return `
        <li>${items.item}</li>
        `
    }).join('');
}
createInputs(inputArray, display);
// Adding the event Listener
button.addEventListener('click', inputValue);



