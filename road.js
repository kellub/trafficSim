const laneW = 35;

//Stripe H is used for the height of a stripe as well as the spacing between two stripes
const stripeW = 5;
const stripeLen = 4 * stripeW;

const NS = 0;
const EW = 1;

class road
{
  //x and y for roads is the top left corner
  constructor( x, y, numLanes, len, dir )
  {
    //Road width is: Number of lanes times width of lane + width the outside road stripes + the width of the stripes between the lanes
    var roadW = numLanes * laneW + 2 * stripeW + ( numLanes - 1 ) * stripeW;

    this.dir = dir;
    this.x = x;
    this.y = y;
    this.numLanes = numLanes

    if( dir == NS )
    {
      console.log("NS")
      this.w = roadW;
      this.h = len; 
    }
    else
    {
      console.log("EW")
      assert( dir == EW, "Unexpected direction." )
      this.w = len;
      this.h = roadW;
    }
  }

  draw()
  {
    fill(0);
    rect( this.x, this.y, this.w, this.h );
    this.drawStripes()
  }

  drawStripes()
  {
    //Set stripe color.
    fill( 244, 235, 66 )

    if( this.dir == NS )
    {      
      //Number of stripes is the length of the road divided by the stripe length divided by 2 since there is blank space between each stripe
      var numStripes = Math.floor( ( this.h / stripeLen ) / 2 )
      
      //draw outer lines
      rect( this.x, this.y, stripeW, this.h )
      rect( this.x + this.w - stripeW, this.y, stripeW, this.h )

      //Set lane stripe color (255)
      fill(255)
      //draw lane(s)
      for( var i = 1; i < this.numLanes; i++ ) 
      { 
        //Calculate the position to draw stripe(s)
        var currX = this.x + stripeW + i * laneW
        var currY = this.y

        for( var j = 0; j < numStripes; j++ )
        {
          rect( currX, currY, stripeW, stripeLen );
          currY += 2 * stripeLen
        }
      }
    } 
    else 
    {
      //draw outer lines
      rect( this.x, this.y, this.w, stripeW )
      rect( this.x, this.y + this.h - stripeW, this.w, stripeW )

      //Number of stripes is the length of the road divided by the stripe length divided by 2 since there is blank space between each stripe
      var numStripes = Math.floor( ( this.w / stripeLen ) / 2 )

      //Set lane stripe color (255)
      fill(255)
      //draw lane(s)
      for( var i = 1; i < this.numLanes; i++ ) 
      { 
        //Calculate the position to draw stripe(s)
        var currX = this.x 
        var currY = this.y + stripeW + i * laneW

        for( var j = 0; j < numStripes; j++ )
        {
          rect( currX, currY, stripeLen, stripeW );
          currX += 2 * stripeLen
        }
      }
    }
  }
}