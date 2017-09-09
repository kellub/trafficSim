const laneW = 10;

//Stripe H is used for the height of a stripe as well as the spacing between two stripes
const stripeW = 1;
const stripeH = 4;

class road
    {
    constructor(x, y, numLanes, h)
        {
            this.x = x;
            this.y = y;
            //Lane width is: Number of lanes times width of lane + width the outside road stripes + the width of the stripes between the lanes
            this.w = numLanes * laneW + 2 * stripeW + ( numLanes - 1 ) * stripeW;
            this.h = h;
        }
        
    draw()
        {
            rect(this.x, this.y, this.w, this.h);
            drawStripes()
        }
        
    drawStripes()
        {
            //Draw outside stripes
            
        }
    }

    test