export async function customFetch(url) {
    try {
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f9b9ae288dmshb6aeb9fc6534480p1c3270jsnaf97fc1e1460",
                "x-rapidapi-host": "airport-info.p.rapidapi.com"
            }
        })
        return await response.json();

    } catch (e) {
        throw new Error(e.message);
    }
}

// Function to clear the content in the Display section.
export function clearContent(e){
    while (e.firstChild){
        e.removeChild(e.firstChild);
    }
}

/*
* Local Storage Save and Display
* @param key
* */

export function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))||[];
}

export function saveInLocalStorage(key, array) {
    return localStorage.setItem(key, JSON.stringify(array));
}

/*
* Find and Match function
* */
export function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.code.match(regex) || place.city.match(regex) || place.country.match(regex) || place.name.match(regex)
    });
}


