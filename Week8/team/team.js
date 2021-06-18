const api = "https://swapi.dev/api/people";
const display = document.querySelector('.display');
const btn1 = document.querySelector('.btn1');

btn1.onclick = function () {
    handleDisplay()
}



async function customFetch(url = api)  {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        throw new Error(e.message);
    }
}

async function fetchPeople (url) {
    return await customFetch(url)
}
// function renderPeople(peoples) {
//     const display = document.querySelector('.display')
//     display.innerHTML = peoples.map(people => `${people.name}`)
//
// }
async function handleDisplay(url = api) {
    const { results, next, previous, count } = await fetchPeople(url);
    renderPeople(results)
    if (next) {
        renderNextButton(next)
    }
    if(previous){
        renderPrevButton(previous)
    }
    let number = 1

    for (let i = 0; i < count; i += 10) {
        renderPageNumber(number);
        number++;

    }

}
function renderPageNumber(number){
    const display = document.querySelector('.display')
    const button = document.createElement('button');
    button.innerHTML = number;
    button.onclick = function (){
        handleDisplay(api + '/?page=' + number
        )
    }
    display.appendChild(button);
}

function renderPeople(peoples) {
    const display = document.querySelector('.display')
    peoples.forEach(people => {
        const peopleCard = document.createElement('div')
        const name = document.createElement('p')
        name.innerHTML = people.name
        const action = document.createElement('button')
        action.innerHTML = "Details"
        action.onclick = function () {
            peopleCard.innerHTML += `${people.gender} ${people.hair_color}`
        }
        peopleCard.appendChild(name)
        peopleCard.appendChild(action)
        display.appendChild(peopleCard);
    })
}


function renderNextButton(nextUrl) {
    const currentNextButton = document.getElementById('next')
    if (currentNextButton) {
        currentNextButton.remove()
    }
    const container = document.querySelector('.container');
    const nextButton = document.createElement('button')
    nextButton.innerHTML = "Next";
    nextButton.id = 'next';
    nextButton.onclick = function () {
        handleDisplay(nextUrl)
    }
    container.appendChild(nextButton);

}

function renderPrevButton(prevUrl) {
    const currentPrevButton = document.getElementById('prev')
    if (currentPrevButton) {
        currentPrevButton.remove()
    }
    const container = document.querySelector('.container');
    const prevButton = document.createElement('button')
    prevButton.innerHTML = "Prev";
    prevButton.id = 'prev';
    prevButton.onclick = function () {
        handleDisplay(prevUrl)
    }
    container.appendChild(prevButton);

}












//
// function displayNames() {
//     fetch(api)
//         .then((response) => response.json())
//         .then(data => {
//             console.log(data);
//             display.innerHTML = data.results.map(result => `${result.name}<br>`);
//         })
// }
//
//
// function displayNext() {
//     fetch(api)
//         .then((response) => response.json())
//         .then(data => {
//             console.log(data.next);
//             fetch(data.next)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data);
//                     data
//                     display.innerHTML = data.results.map(result => `${result.name}<br>`);
//                 })
//         })
//
// }
//
// function displayPrev() {
//     fetch(api)
//         .then(response => response.json())
//         .then(data=> {
//             fetch(data.next)
//                 .then(
//                     data => data.json()
//                 )
//                 .then(datos => console.log(datos))
//
//
//         })
// }