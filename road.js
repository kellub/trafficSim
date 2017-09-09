const laneW = 10;

//Stripe H is used for the height of a stripe as well as the spacing between two stripes
const stripeW = 1;
const stripeH = 4;

const NS = 0;
const EW = 1;

class road
{
  //x and y for NS roads is the bottom left.
  //x and y for EW roads is the top left.
  constructor(x, y, numLanes, len, dir)
  {
    //Road width is: Number of lanes times width of lane + width the outside road stripes + the width of the stripes between the lanes
    roadW = numLanes * laneW + 2 * stripeW + ( numLanes - 1 ) * stripeW;

    this.dir = dir;
    this.x = x;
    this.y = y;

    if( dir == NS )
    {
    this.w = roadW;
    this.h = len; 
    }
    else
    {
      assert( dir == EW, "Unexpected direction." )
      this.w = len;
      this.h = roadW;
    }
  }

  draw()
  {
    rect(this.x, this.y, this.w, this.h);
    drawStripes()
  }

  drawStripes()
  {
    //Draw outside stripes
    fill(244, 235, 66)
    rect(this.x, this.y, )
  }
}