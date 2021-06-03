const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

// URL's variables
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// Event Handlers for each button
textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error (response.statusText);
        })
        .then( response => response.text() )
        .then( text => outputDiv.innerHTML = text)
        .catch( error => console.log('There was an error', error));
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then( response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok){
                return response;
            }
            throw Error(response.statusText);
        })
        .then( response => response.json())
        .then( data => outputDiv.innerHTML = data.value)
        .catch(error => console.log('There was an error', error))
}, false);