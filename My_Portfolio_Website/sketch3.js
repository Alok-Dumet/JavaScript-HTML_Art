let Cars = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER)
}

class Car
  {
    constructor(x, y)
    {
      this.position = createVector(x, y)
      this.speed = createVector(random(1, 10), 0)
      this.col = color(random(255), random(255), random(255))
      this.randX = random(20, 30)
      this.randY = random(10, 20)
    }
    
    move()
    {
      this.position.add(this.speed)
    }
    
    display()
    {
      push()
      fill(this.col)
      rect(this.position.x, this.position.y, this.randX, this.randY)
      
      push()
      fill(0,0,0)
      ellipse(this.position.x, this.position.y+ this.randY, this.randY, this.randY)
      pop()
      push()
      fill(100,100,100)
      ellipse(this.position.x, this.position.y+ this.randY, this.randY-10, this.randY-10)
      pop()
      push()
      fill(0, 0, 0)
      ellipse(this.position.x + this.randX, this.position.y+ this.randY, this.randY, this.randY)
      pop()
      push()
      fill(100,100,100)
      ellipse(this.position.x + this.randX, this.position.y+ this.randY, this.randY-10, this.randY-10)
      pop()
      
      pop()
    }
    
  }

function mousePressed()
{
  Cars.push(new Car(mouseX, mouseY));
}

function draw()
{
 background(100,100,100)
    for (car of Cars)
   {
    car.move()
    car.display()
  }
}