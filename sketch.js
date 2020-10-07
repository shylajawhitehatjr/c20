
var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200, 200, 60, height/2);

  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  

  if(wall.x-car.x<wall.width/2+car.width/2)

    {

      car.velocityX=0;

      deform=(0.5*weight*speed*speed)/22500;

if(deform<100)

{
car.shapeColor=color(0,255,0);

}

if(deform<180&&deform>100)

{
car.shapeColor=color(230,230,0);

}

if(deform>180)

{
car.shapeColor=color(255,0,0);

}

  }
  drawSprites();
}