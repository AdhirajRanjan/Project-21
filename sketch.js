
var car, wall;
var speed, weight;
var speed1, speed2, speed3;
var weight1, weigth2, weight3;

function setup() 
{
  createCanvas(1000,1000);

  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);

  weight1 = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);

  car1 = createSprite(50,200,50,50);
  car1.velocityX = speed1;
  car1.weight = weight1

  wall1 = createSprite(900,200,60,200);
  wall1.shapeColor=color(80,80,80); 
  
  car2 = createSprite(50,500,50,50);
  car2.velocityX = speed2;
  car2.weight = weight2

  wall2 = createSprite(900,500,60,200);
  wall2.shapeColor=color(80,80,80); 
  
  car3 = createSprite(50,800,50,50);
  car3.velocityX = speed3;
  car3.weight = weight3

  wall3 = createSprite(900,800,60,200);
  wall3.shapeColor=color(80,80,80); 
}

function draw() 
{
  background(255,255,255);  
  carCollide(wall1,car1,weight1,speed1);
  carCollide(wall2,car2,weight2,speed2);
  carCollide(wall3,car3,weight3,speed3);
  drawSprites();
}

function carCollide(wall,car,weight,speed)
{
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation>180)
    {
      wall.shapeColor=color(255,0,0);
    }

    if (deformation<180 && deformation>100)
    {
      wall.shapeColor=color(230,230,0);
    }

    if (deformation<100)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
}