function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 20; i <= 390; i = i + 20) {
    line(i, 20, i, 390);
  }
}
