// console.log("Test JS!")

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// // context.moveTo(0,0);
// // Move pen/hand/tool to 100,100
// context.moveTo(100,100);
// // Draw a line to 200,200
// context.lineTo(200,200);
// // Without moving the pen, draw to 300,100
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
// context.strokeStyle = "#ff0000"
// context.stroke();

// Draw a circle!
context.beginPath();
context.fillStyle = "#FFFF00";
context.arc(200,200,50,0,1.5*Math.PI);
context.fill();

var x = 200;
var y = 200;
var r = 120;
var xDirection = 1;
var yDirection = 1;
// var red = 0;
// var blue = 0;
// var green = 0;

function drawBall(){
    context.fillStyle = "#000";
    context.beginPath();
    context.arc(x,y,r,0,2*Math.PI);
    context.clearRect(0,0,800,427);
    context.fill();
    if((x > 800-r) || (x < r)){
        xDirection = -xDirection;
    }
    if((y > 427-r) || (y < r)){
        yDirection = -yDirection;
    }
    // var randomX = Math.random() * 4
    // var randomY = Math.random() * 4
    x += 3 * xDirection;
    y += 1 * yDirection;
    // red += 1;
    // blue += 1;
    // green += 1;
}

var ball = setInterval(drawBall,20);

var hit = 0;
var miss = 0;
canvas.addEventListener('click', function(event){
    if(Math.sqrt((event.layerY - y) * (event.layerY - y) + (event.layerX - x) * (event.layerX - x)) < (2 * r)){
        // console.log("Hit");
        hit++;
    }
    else{
        // console.log("Miss");
        miss++;
    }

    document.getElementById('hit-count').innerHTML = hit;
    document.getElementById('miss-count').innerHTML = miss;
});

