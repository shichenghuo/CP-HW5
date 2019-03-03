function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 10; i <= 200; i = i + 10) {
    line(200-i, i, 200+i, i);
  }
  for (var i2 = 10; i2 <= 200; i2 = i2 + 10){
    line(i2, 200+i2, 400-i2, 200+i2);
	}
}
