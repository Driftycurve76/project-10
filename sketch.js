var seaImg,shipImg1;
var sea;
var ship;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = 6;
  sea.scale=0.3;
  ship = createSprite(130,200);
  ship.addAnimation("moving",shipImg1);
  ship.scale=0.35;
  
}

function draw() {
  background("blue");
  if(sea.x>=400){
  sea.x = 0
  }
  drawSprites();
}