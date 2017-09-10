//Main
var canv;

function setup() {
  canv = createCanvas(window.innerWidth, window.innerHeight);
  truck = new automobile(71,0,30,50,3,S);
  sedan = new automobile(window.innerWidth,115,25,44,4,W);
  coup = new automobile(0,76,20,37,5,E);
  road1 = new road( 65, 0, 2, window.innerHeight, NS );
  road2 = new road( 0, 65, 2, window.innerWidth, EW );
}

function draw() {
  background(0,200,0);
  fill(255);
  road1.draw();
  // ensure roads are drawn before cars so they don't render over cars
  if(truck) 
  {
    truck.draw();
    truck.drive();
    if(truck.isOffScreen) {
      truck = null;
      console.log("truck deleted");
    }
  }

  road2.draw();
  if(coup) 
  {
    coup.draw();
    coup.drive();
    if(coup.isOffScreen) {
      coup = null;
      console.log("coup deleted");
    }
  }
  if(sedan) 
  {
    sedan.draw();
    sedan.drive();
    if(sedan.isOffScreen) {
      sedan = null;
      console.log("sedan deleted");
    }
  }
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