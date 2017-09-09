//Main
var canv;

function setup() {
  canv = createCanvas(window.innerWidth, window.innerHeight);
  car = new automobile(10,10,30,50,3,S);
  car = new automobile(71,10,30,50,3,S);
  road1 = new road( 65, 0, 3, window.innerHeight, NS );
  road2 = new road( 0, 65, 3, window.innerWidth, EW );
}

function draw() {
  background(0,200,0);
  fill(255);
  road1.draw();
  // ensure roads are drawn before cars so they don't render over cars
  if(car) 
  {
    car.draw();
    car.drive();
    if(car.isOffScreen) {
      car = null;
      console.log("car deleted");
    }
  }
  road2.draw();
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