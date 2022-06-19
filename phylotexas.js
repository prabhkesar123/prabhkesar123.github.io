var n = 0;
var c = 4;

function setup() {
	createCanvas(1350,430);
	background(96, 155, 161);
}


function draw(){
	var a = n * 137.5;
	var r = c * sqrt(n);
	var x = r * cos(a) + width / 2;
	var y = r * sin(a) + height / 2;
	fill(255);
	noStroke();
	ellipse(x,y,4,4);
	n++
}