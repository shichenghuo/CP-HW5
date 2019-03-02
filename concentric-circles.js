function setup() {
  createCanvas(400, 400);
}
var offset = 10
function draw() {
  background(220);
  for (var i = 10; i <= 100; i = i + 15) {
    circle(i, i,i + offset);
  }
}
