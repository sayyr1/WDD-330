import {clearContent, customFetch, findMatches, getFromLocalStorage, saveInLocalStorage} from "./utilities.js";
import {select, suggestionCreator, render} from "./info.js";
import {cities} from "./utilities.js";

// Constant and variables declararion
const searchForm = document.querySelector('.search');
const input = document.querySelector('#search');
const submitButton = document.querySelector('#submit');
const data = document.querySelector('.display');
const suggestions = document.querySelector('.suggestion');
const lasted = document.querySelector('.last-title');
// Variable for the Local Storage
const key = 'airport';
//Last Searcher
let last = document.querySelector('.last-search');
// Calling the function to save in the Local Storage
 let savedArray = getFromLocalStorage(key);

// Function for displaying the data of the Airport matched.
async function display(e){
    e.preventDefault();
    clearContent(lasted);
    clearContent(data);
    clearContent(suggestions);
    const input_value = input.value;
    data.classList.add('hola');
    const code = input_value.slice(0,3);
    if (input_value === '') return;
    let link = `https://airport-info.p.rapidapi.com/airport?icao=${code}&iata=${code}`;
    const airportInformation = await customFetch(link);
    displayHandler(airportInformation)
    this.reset();
}

// Render the display Information.
function displayHandler(Information){
    render(Information)
}

function displayMatches() {
    clearContent(lasted);
    clearContent(data);
    data.classList.remove('hola');
    const matchArray = findMatches(this.value, cities);
    suggestions.innerHTML = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const codeName = place.code.replace(regex, `<span class="hl">${this.value}</span>`);
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const countryName = place.country.replace(regex, `<span class="hl">${this.value}</span>`);
        const airportName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li class="data-list">${codeName}, ${cityName} ${countryName}, ${airportName}</li>
    `;
    }).join('');
    let li  = suggestions.querySelectorAll('li');
    li.forEach(selection => {
        select(selection);
    })
}

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

// Calling the Create Inputs calling
suggestionCreator(savedArray, last);


/** Delete tasks */
function deleteTask(taskId) {
    let index = savedArray.map(task => task.id).indexOf(taskId);
    savedArray.splice(index, 1)
    saveInLocalStorage(key, savedArray)
    suggestionCreator(savedArray, last);

}

suggestions.addEventListener('click', e => {
    console.log(e)
    if (e.target.tagName.toLowerCase() === 'button') {
        console.log(e.target.parentElement.id)
        deleteTask(e.target.parentElement.id)
    }

})

// Event Listeners
searchForm.addEventListener('submit', display)
input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);
submitButton.addEventListener('click', inputFunction )

