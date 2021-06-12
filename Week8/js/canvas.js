const canvas = document.querySelector('.myCanvas');
const context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
    };
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}


function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);

}
drawGradient();

// Drawing Other Shapes by Creating Paths
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}
    drawCircle(canvas);

/**
 * SAVE DRAWING
 */
function saveDrawing() {
    var canvas5 = document.getElementById("demo3");
    window.open(canvas5.toDataURL("image/png"));
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

/**
 * SAVE DRAWING
 */
window.addEventListener('load', drawImageToCanvas, false);
function drawImageToCanvas() {
    const canvas = document.querySelector('#demo6');
}

/**
 * DRAW IMAGES
 */
window.addEventListener("load", drawImageToCanvas, false);
function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0);
}

/**
 * MANIPULATE IMAGES
 */
function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 68, 68);
    var imageData = context.getImageData(0, 0, 200, 200);
    var red, green, blue, greyscale;
    for (var i = 0; i < imageData.data.length; i += 4) {
        red = imageData.data[i];
        green = imageData.data[i + 1];
        blue = imageData.data[i + 2];
    }
    grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale;
}

/**
 * MANIPULATE VIDEOS
 */
function drawOneFrame(video, context, canvas){
// draw the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var imageData = context.getImageData(0, 0, canvas.width,
canvas.height);
    var pixelData = imageData.data;
// Loop through the red, green and blue pixels,
// turning them grayscale
    var red, green, blue, greyscale;
    for (var i = 0; i < pixelData.length; i += 4) {
        red = pixelData[i];
        green = pixelData[i + 1];
        blue = pixelData[i + 2];
//we'll ignore the alpha value, which is in position i+3
        grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        pixelData[i] = grayscale;
        pixelData[i + 1] = grayscale;
        pixelData[i + 2] = grayscale;
    }
    context.putImageData(imageData, 0, 0);
}
function draw(video, context, canvas) {
    if (video.paused || video.ended) return false;
    drawOneFrame(video, context, canvas);
// Start over!
    setTimeout(function(){ draw(video, context, canvas); }, 0);
}