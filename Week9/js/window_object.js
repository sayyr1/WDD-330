/**
 * ------ GLOBAL VARIABLES -----
 */
x = 6; // global variable created
window.x // Accessing to the global variable

/**
 * ------   DIALOGS -----
 */

window.alert('hello') // an alert (PAUSE)
window.confirm('hello') // Gives us option (STOP)
window.prompt('hello') // This is with an input field (STOP)

/**
 * ------   LOCATION -----
 */
alert(window.location.href) // this is for the location of the site
alert(window.location.host) // this is for the domain of the site
// window.location.assign('https://facebook.com') // this is for the domain of the site

/**
 * ------  INFORMATION  -----
 */
console.log(window.screen.height)
console.log(window.screen.width)

/**
 * ------  The Document Object  -----
 */
//window.write('<h1>Hello</h1>')


/**
 * ------  COOKIES  -----
 */
// Cookies
// Cookies are small files that are saved locally on a user’s computer.

document.cookie = 'name=john'
document.cookie

/**
 * ------  TIMING FUNCTIONS  -----
 */
window.setTimeout(() => alert("Time's Up!"), 3000) // the timeout is in milliseconds

function chant(){ console.log('Beetlejuice'); }
const  summon = window.setInterval(chant, 1000);
window.clearInterval(summon)