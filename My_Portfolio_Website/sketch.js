let xLoc = [], yLoc = [], numSegments = 200;
let j = 0
let title, paragraph, an1, an2, an3;

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
  title = select("#id1");
  paragraph = select("#id2");
  an1 = select("#a1");
  an2 = select("#a2");
  an3 = select("#a3");
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

  title.position(50,70);
  paragraph.position(50,220);
  an1.position(50,225);
  an2.position(50,265);
  an3.position(50,305);
}