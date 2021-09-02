const w = 690;
const h = 690;
let img;
let d;
const stars = [];

function preload() {
  img = loadImage("cassiopeia.png");
}

function create_stars() {
  stars[0] = createVector(169, 260);
  stars[1] = createVector(212, 336);
  stars[2] = createVector(282, 338);
  stars[3] = createVector(316, 421);
  stars[4] = createVector(395, 370);
}
function twinkle(d, pos) {
  d.strokeWeight(random(11, 15));
  d.stroke(255, random(15, 22));
  d.point(pos);
  d.strokeWeight(random(9, 11));
  d.stroke(255, random(20, 33));
  d.point(pos);
  d.strokeWeight(random(6, 8));
  d.stroke(255, 69);
  d.point(pos);
  d.strokeWeight(random(3, 5));
  d.stroke(255, 111);
  d.point(pos);
  d.strokeWeight(1);
  d.stroke(255, 255);
  d.point(pos);
}

function setup() {
  createCanvas(w, h);
  d = createGraphics(w, h);
  frameRate(4);

  create_stars();
}

function draw() {
  d.background(0);
  for (let pos of stars) {
    twinkle(d, pos);
  }
  // image(img, 0, 0, w, h);
  image(d, 0, 0);
}
