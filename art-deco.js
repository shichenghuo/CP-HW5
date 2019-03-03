function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var x = 5; x <= 100; x += 15) {
  rectMode(CENTER)
  square(80,200,x,x)
  noFill()
  }
  for (var x = 5; x <= 100; x += 15) {
  rectMode(CENTER)
  square(200,200,x,x)
  noFill()
  }
  for (var x = 5; x <= 100; x += 15) {
  rectMode(CENTER)
  square(320,200,x,x)
  noFill()
  }
   for (var x = 5; x <= 100; x += 15) {
  rectMode(CENTER)
  square(440,200,x,x)
  noFill()
  }
}
