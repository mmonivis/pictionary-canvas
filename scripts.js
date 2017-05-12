var canvas = document.getElementById("canvas");
console.log(canvas);

// console.dir(canvas); // Gives you documentation on the canvas itself
// console.dir(window);

var context = canvas.getContext('2d');

// Set up the base options for the pictionary board
var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
var mouseDown = false;
var mousePosition = {}
var lastMousePosition = null

colorPicker.addEventListener('change', function(event){
    // console.log(event)
    color = colorPicker.value;
    // tickness = event.target.value = 'change'(event).colorPicker(target).value
    console.log(color);
});

thicknessPicker.addEventListener('change', function(event){
    thickness = thicknessPicker.value;
    // console.log(thickness);
});

canvas.addEventListener('mousedown', function(event){
    mouseDown = true;
});

canvas.addEventListener('mouseup', function(event){
    mouseDown = false;
    lastMousePosition = null;
});

canvas.addEventListener('mousemove', function(event){
    if(mouseDown){
        // console.log(event) // inspect what the 'event' is doing
        // console.log("User has pressed the mouse down and is moving!")

        // The user has either just shown up and we don't have a lastMousePosition
        // OR, the user let go of the mouse and we reset the lastMousePosition
        if(lastMousePosition == null){
            lastMousePosition = {
                x: event.offsetX, // won't include the padding/border/margin so it aligns perfectly with the cursor
                y: event.offsetY
            }
        }

        mousePosition.x = event.offsetX;
        mousePosition.y = event.offsetY;
        // console.log(mousePosition.x);

        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineWidth = thickness;
        context.beginPath();
        context.moveTo(lastMousePosition.x, lastMousePosition.y);
        context.lineTo(mousePosition.x, mousePosition.y);
        context.stroke(); // This will draw on the canvas
        context.closePath();

        lastMousePosition = {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }
});
