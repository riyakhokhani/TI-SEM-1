let btClick;
let slSize;

function setup() {

  background(220);
  createCanvas(400, 400);
  btClick = createButton("Click Me!");
  slSize= createSlider(5,100);
  //colorMode(HSB)
}


function draw() {
  let tx = slSize.value();
  background(225, 10);
  btClick.mouseClicked(clickFn);
  // let tx = slSize.value();
  fill(tx*2,35,36,48);
  // rect(50,50,50,50);
  textSize(tx);
 
  let op = slSize.value();
  text("WHATEVER!", random(0, width), height / 2);
  // fill(op,6700);
}

function clickFn() {
  // text("Got Clicked! Yeah!", random(0, width), height / 2);

}