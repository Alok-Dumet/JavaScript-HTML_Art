let xLoc = [], yLoc = [], numSegments = 200;
let j = 0

function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  //initialize the arrays
  for(let i = 0; i<numSegments; i++){
    xLoc[i] = width/2;
    yLoc[i] = height/2; 
  }
  fill(0);
  stroke(255);
  angleMode(DEGREES)
}

function draw()
{
  background(0, 20);
  j += 0.1
  
  xLoc[numSegments] = mouseX;
  yLoc[numSegments] = mouseY;
  
  for(let i = 0; i<numSegments; i++)
  {
    xLoc[i] = xLoc[i+1];
    yLoc[i] = yLoc[i+1];
    
    let diameter = sin(map(i,0,numSegments, 0, 40))*150;
    rotate(j)
    translate(50, 10)
    let mycolor = map(xLoc[i], 0, width, 0, 255)
        stroke(mycolor, 0, 255-mycolor)
    rect(xLoc[i],yLoc[i],diameter,diameter); 
  } 
}