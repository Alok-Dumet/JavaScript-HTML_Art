let osc, playing, freq, r;

let pianoNotes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
function setup()
{
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playNote);  
  osc = new p5.Oscillator('sine');
  r = new p5.Reverb();
  r.process(osc);
}

function draw()
{
  background(255, 255, 255); 
  let keyWidth = width / 8;


  for (let i = 0; i < 8; i++)
  {
    if (mouseX > i * keyWidth && mouseX < (i + 1) * keyWidth && mouseIsPressed)
    {
      console.log("lol")
    }
    else
    {
      fill(255);
    rect(i * keyWidth, 0, keyWidth, height);
    stroke(0);
    strokeWeight(2);
    }
    
    
  }
  fill(180)
  rect(0, height-20,width, 20)
  
  for (let i = 0; i < 8; i++)
  {
      if (mouseX > i * keyWidth && mouseX < (i + 1) * keyWidth && mouseIsPressed)
    {
    fill(200);
    stroke(0);
    strokeWeight(2);
    rect(i * keyWidth, 0, keyWidth, height -17);
      
    push()
    fill(100)
    noStroke()
    rect((((i+1)*keyWidth)-10), 1, keyWidth - 86, height-17)
    pop()
    
    push()
    stroke(0)
    line((i) * keyWidth, height-17, ((i+1) * keyWidth), height-17);
    // pop()
    }
  }
  
  for (let i = 0; i < 8; i++)
  {
    line((i+1) * keyWidth, height-20, ((i+1) * keyWidth) - 3, height);
  }
}

function playNote()
{
  let keyWidth = width / 8;
  let noteIndex = floor(mouseX / keyWidth);
  freq = pianoNotes[noteIndex];

  osc.freq(freq);
  osc.start();
  osc.amp(0.5, 0.1);
  osc.amp(0, 0.5);
}