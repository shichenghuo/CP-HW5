function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 5; i <= 200; i = i + 10) {
    circle(200, 200, 200-i);
  }
}
