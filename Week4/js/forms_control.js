const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted

    const hero = {} // create an empty object
    hero.name = form.heroName.value; // crate a naem property based on the input field's value
    alert(JSON.stringify(hero)); // Convert object oto JSON string and display in alert dialog


}

hero.realName = form.realName.value;

// Checkbox Input Fields
hero.powers = [];
for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

// Radio Button Input Fields


// Select Drop-Down List
hero.age = form.age.value;

hero.city = form.city.value;

// form.ciy.options[0].text;

// Text Areas
hero.origin = form.origin.value;


form.origin.value = 'Born as Kal-El on the planet Krypton...';

form.origin.value = 'Born as Kal-El on the planet Krypton...';

// Validation
// form.addEventListener('submit', validateInline, false);

// function validate (event) {
//     const fistLetter = form.heroName.value[0];
//     if(fistLetter.toUpperCase() === 'X'){
//         event.preventDefault();
//         alert('Your name is not allowed to start with X!')
//     }
// }

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
    document.getElementById('submit').disabled = true;
    } else {
    document.getElementById('submit').disabled = false;
    }
    }