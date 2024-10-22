let xLoc = [], yLoc = [], numSegments = 400;
let j = 0
let jchange = 0.1;
let onOff = [];

function setup()
{
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(255);
  angleMode(DEGREES)
  ellipseMode(CENTER)
  
  let i = 0;
  for (var x = 0; x < 16; x++)
  {
    for (var y = 0; y < 12; y++)
    {
      // let r = random(0,255)
      // let g = random(0,255)
      // let b = random(0,255)
      onOff[i] = random(0, 255);
      i++;
    }
  }
  
}

function draw()
{
  background(0, 20);
  j += jchange;
  
  xLoc[numSegments] = mouseX;
  yLoc[numSegments] = mouseY;
    for (var x = 0; x < 31; x++)
    {
      for (var y = 0; y < 12; y++)
      {
        if(
          mouseX > x * 50 &&
          mouseX < (x + 1) * 50 &&
          mouseY > y * 50 &&
          mouseY < (y + 1) * 50
        )
        {
          xLoc[numSegments-1] = x*50
          yLoc[numSegments-1] = y*50
          for(let i = 0; i<numSegments; i++)
          {
            xLoc[i] = xLoc[i+1];
            yLoc[i] = yLoc[i+1];
            let diameter = sin(map(i,0,numSegments, 0, 20))*150;
            let mycolor = map(xLoc[i], 0, width, 0, 255)
            stroke(mycolor, 255-mycolor, 0)
            if(j > 2 || j < -2)
              {
                jchange*=-1
              }
            rect(xLoc[i],yLoc[i],diameter,diameter);
          }
        }
      }
    } 

}