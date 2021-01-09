var bullet, wall, thickness, speed, weight;


function setup() {
  createCanvas(1300,400);

  bullet = createSprite(300,200,60,20);
  bullet.shapeColor = "white"
 
  thickness = random(22,83);
  wall = createSprite(1100,200,thickness,200);

  speed = random(223,321)
  weight = random(30,52)
}

function draw() {
  background(0,0,0); 
  
  bullet.velocityX = speed;

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    
    var damage = (0.5*weight*speed**speed)/(thickness*thickness*thickness);

    if(damage>10){
      bullet.shapeColor = "red"
    }

    if(damage<10){
      bullet.shapeColor = "green"
    }

    


  }
  drawSprites();
}