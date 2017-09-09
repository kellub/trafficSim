//Main
var canv;

function setup() {
  canv = createCanvas(window.innerWidth, window.innerHeight);
  car = new automobile(10,10,30,50,3,S);
  road1 = new road( 65, 0, 3, window.innerHeight, NS );
}

function draw() {
  background(0,200,0);
  fill(255);
  if(car) 
  {
    car.draw();
    car.drive();
    if(car.isOffScreen) {
      car = null;
      console.log("car deleted");
    }
  }
  road1.draw();
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