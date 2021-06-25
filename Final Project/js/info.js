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
*
* */

