import { customFetch, getFromLocalStorage, saveInLocalStorage } from "./utilities.js";
import {render} from "./info.js";
import {findMatches} from "./utilities.js";
import {clearContent } from "./utilities.js";

const searchForm = document.querySelector('.search');
const input = document.querySelector('#search');
const submitButton = document.querySelector('#submit');
const data = document.querySelector('.display');
const suggestions = document.querySelector('.suggestion');
const lasted = document.querySelector('.last-title');
// Variable for the Local Storage
const key = 'airport';

// Calling the function to save in the Local Storage
// const lastSearchArray = getFromLocalStorage(key);
// console.log(lastSearchArray);
 let savedArray = getFromLocalStorage(key);
console.log(savedArray)


// Function for displaying
async function display(e){
    e.preventDefault();
    clearContent(lasted);
    clearContent(data);
    clearContent(suggestions);
    const input_value = input.value;
    data.classList.add('hola');
    // const lastSearch = {
    //     search: input_value,
    //     id : new Date()
    // }

    // Local Storage
    // lastSearchArray.push(lastSearch);
    // saveInLocalStorage(key);
    // console.log(lastSearchArray);


    const code = input_value.slice(0,3);
    console.log(code)
    if (input_value === '') return;
    let link = `https://airport-info.p.rapidapi.com/airport?icao=${code}&iata=${code}`;
    console.log(link);
    const airportInformation = await customFetch(link);
    displayHandler(airportInformation)
    this.reset();

}

// Event Listener
searchForm.addEventListener('submit', display)

// Render the display Information.
function displayHandler(Information){
    render(Information)
}





// Airport Information, filtering the data from Json File.
const endpoint = 'js/airport.json';

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


function displayMatches() {
    clearContent(lasted);
    data.classList.remove('hola');

    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const codeName = place.code.replace(regex, `<span class="hl">${this.value}</span>`);
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const countryName = place.country.replace(regex, `<span class="hl">${this.value}</span>`);
        const airportName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li class="data-list">${codeName}, ${cityName} ${countryName}, ${airportName}</li>
    `;
    }).join('');
    suggestions.innerHTML = html;
    let li  = suggestions.querySelectorAll('li');
    li.forEach(selection => {
        select(selection);
    })

}

function select(element){
    element.addEventListener('click', ()=>{
        input.value = element.textContent;
    })

}





//Last Searcher.se
let last = document.querySelector('.last-search');

function inputFunction(){
    const inputValue = input.value;
    if (inputValue === '') return;
    const items = {
        item: inputValue,
        id: Date.now().toString(),
    }

    savedArray.push(items);
    saveInLocalStorage(key, savedArray);

}


function createInputs(items, itemContainer) {
    itemContainer.innerHTML = items.map(items => {
        return `
        <div class="items-saved" id=${items.id}>
            <li id=${items.id} class="saved-items">${items.item}</li>
            <button type="button" value="delete" id="last-delete">delete</button>
         </div>
        `
    }).join('');
    const savedItems = document.querySelectorAll('.saved-items')
    console.log(savedItems)
    savedItems.forEach(save =>{
        select(save)
    })




}
createInputs(savedArray, last);


/** Delete tasks */
function deleteTask(taskId) {
    let index = savedArray.map(task => task.id).indexOf(taskId);
    console.log(index);
    savedArray.splice(index, 1)
    saveInLocalStorage(key, savedArray)
    createInputs(savedArray, last);


}



suggestions.addEventListener('click', e => {
    console.log(e)
    if (e.target.tagName.toLowerCase() === 'button') {
        console.log(e.target.parentElement.id)
        deleteTask(e.target.parentElement.id)
    }

})


// Event Listeners
input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);
submitButton.addEventListener('click', inputFunction )
console.log(cities)

