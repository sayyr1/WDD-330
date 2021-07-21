/**
 * Function render the Information of the Airport
 * @param information
 * */


export function render(information){
    const display = document.querySelector('.display');
    const title = document.createElement('h2');
    title.innerHTML = 'Airport Information';
    const unorderedList = document.createElement('ul');
    unorderedList.innerHTML = `<li>${information.name}</li>
                    <li>${information.location}</li>
                    <li>${information.phone}</li>
                    <li>${information.postal_code}</li>
                    <li> <a href="${information.website}" target="_blank">${information.website}</a></li>`;
    display.appendChild(unorderedList);
    display.appendChild(title);
}

/*
* Function allows user to input suggestion list when we click.
* @param element
* */
export const input = document.querySelector('#search');
export function select(element){
    element.addEventListener('click', ()=>{
        input.value = element.textContent;
    })
}

/*
*
* */

 export function suggestionCreator(items, itemContainer) {
    itemContainer.innerHTML = items.map(items => {
        return `
        <div class="items-saved" id=${items.id}>
            <li id=${items.id} class="saved-items">${items.item}</li>
            <button type="button" value="delete" id="last-delete">delete</button>
         </div>
        `
    }).join('');
    const savedItems = document.querySelectorAll('.saved-items')
    savedItems.forEach(save =>{
        select(save)
    })
}
