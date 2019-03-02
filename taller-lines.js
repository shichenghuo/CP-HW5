function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 0; i < 400; i += 10) {
    line(i, i+30, i, i-400);
  }
}
