const display = document.querySelector('.display');
const button = document.querySelector('input[type="button"]');

const api = 'https://aws.random.cat/meow';

async function customFetch(url = api){
    try {
        const response = await fetch(url);
        return await  response.json();
    } catch (e){
        throw new Error (e.message);
    }
}

async function fetchRandomCats (url){
    return await customFetch(url);
}
console.log(fetchRandomCats())

async function handleDisplay(url = api) {
    const {file} = await fetchRandomCats(api);
    console.log(file);
    display.innerHTML = `<img src="${file}">`
}
button.onclick = function (){
    handleDisplay();
}