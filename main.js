//Main
var canv;

function setup() {
  canv = createCanvas(window.innerWidth, window.innerHeight);
  console.log("Setup Run")
  //car = new automobile(10,10,50,50);
  road1 = new road( 65, 0, 3, window.innerHeight, NS );
}

function draw() {
  background(51);
  fill(255);
  //car.draw();
  road1.draw()
}

function assert( condition, message )
{
  if (!condition) 
  {
    message = message || "Assertion failed";
    if (typeof Error !== "undefined")
    {
      throw new Error(message);
    }
    throw message; // Fallback
  }
}