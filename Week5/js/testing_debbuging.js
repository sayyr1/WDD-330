// Using Alert

function amIOldEnough(age){
    if (age < 12){
        alert(age);    // Using Alert
        return 'No, Sorry'
    } else if (age < 18) {
        return 'Only if you are accompained by an adult.';

    }
    else{
        return 'Yep, come in!'
    }
}
// console.log(amIOldEnough(21));
// Yep come in

/** USING CONSOLE.LOG */
function amIOldEnough1 (age) {
    console.log(age);
    if(age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.'
    } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompained by an adult.'
    } else{
        console.log(`In the else with ${age}`);
        return 'Yep, come in. '

    }
}
console.trace(amIOldEnough1(21));

/** USING DEBBUGER */
function amIOldEnough2(age) {
    debugger;
    if(age < 12){
        debugger;
        return 'No, sorry.';
    } else if (age < 18) {
        debugger;
        return 'Only if you are accompained by an adult';
    } else {
        debugger;
        return 'Yep, come on in';
    }
}
console.log(amIOldEnough2(16));