// directions
const N = 0;
const E = 1;
const S = 2;
const W = 3;

class automobile 
{
  // x, y, width, height, speed, direction
  constructor(x, y, w, h, s, d)
  {
    this.x = x;
    this.y = y;
    this.s = s;
    this.d = d;
    this.isOffScreen = false;
    // if direction is North or South, vehicle faces North or South
    if (d === N || d === S) {
      this.w = w;
      this.h = h;
    // if direction is East or West, vehicle faces East or West
    } else if (d === E || d === W) {
      this.w = h;
      this.h = w;
    }
  }
        
  draw()
  {
    // vehicle
    rect(this.x, this.y, this.w, this.h, this.s, this.d);
  }

  drive()
  {
    // move vehicle along x/y according to direction
    if (this.d === N) {
      this.y -= this.s
    } else if (this.d === E) {
      this.x += this.s
    } else if (this.d === S) {
      this.y += this.s
    } else if (this.d === W) {
      this.x -= this.s
    }

    // detect if car is off screen
    if ( this.x > window.innerWidth ||
         this.x < 0 - this.w ||
         this.y > window.innerHeight ||
         this.y < 0 - this.h ) {
      this.isOffScreen = true;
    }
  }
}