//Main


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  console.log("test")
  car = new automobile(10,10,50,50);
}

function draw() {
  background(51);
  fill(255);
  car.draw();
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