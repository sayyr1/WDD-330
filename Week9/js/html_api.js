const btn = document.querySelector('#rainbow');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];
function change(){
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}
btn.addEventListener('click', change)
 //const form = document.querySelector('.form');
 //form.addEventListener('submit', factorize, false);

// function factorize(event){
//     event.preventDefault();
//
//     const number = Number(form.number.value);
//     document.getElementById('output').innerHTML = factorsOf(number);
// }

// function factorsOf(n){
//     if (Number.isNaN(Number(n))){
//         throw new RangeError('Argument Error: Value must be and integer');
//     }
//     if (n < 0) {
//         throw  new RangeError('Argument Error: Number must be positive');
//     }
//     if (!Number.isInteger(n)){
//         throw  new RangeError('Argument Error: Number must be an iteger');
//     }
//     const factors = [];
//     for (let i = 1, max = Math.sqrt(n); i <= max; i++){
//         if (n%i === 0){
//             factors.push(i,n/i);
//         }
//     }
//     return factors.sort((a,b) => a -b);
// }

/**
 * Notification
 */
// if (window.Notification) {
//     Notification.requestPermission();
// }
// if(window.Notification) {
//     Notification.requestPermission()
//         .then((permission) => {
//             if(Notification.permission === 'granted') {
//                 new Notification('Hello JavaScript!');
//             }
//         });
// }
// const notification = new Notification('JavaScript: Novice to Ninja',{
// body: 'The new book from SitePoint',
//     icon: 'sitepointlogo.png'
// });
//
// notification.addEventListener('click', () => {
//     window.open('https://sitepoint.com')
// }, false);
// notification.close();

/**
 *
 * @type {Multimedia}
 */
const video = document.getElementsByTagName('video')[0];
video.style.width = '20rem';
video.play();
video.pause();
video.volume = 0.9;
video.muted = true;
video.currentTime += 10; // jumps forward 10 seconds
video.playbackRate = 8; // fast-forward at 8 times as fast
video.loop = true;

/**
 * CANVAS
 */
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#ccc"; // a gray stroke color
context.lineWidth = 4;
context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);