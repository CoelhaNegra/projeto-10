var seaimg,sea, ship,  shipImg1;

function preload(){
 seaimg = loadImage ("sea.png");
 shipImg1 = loadAnimation ("ship-1.png","ship-1.png","ship-2.png","ship-2.png");
}
function setup() {
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaimg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite (130,200,30,30);
  ship.addAnimation ("naviomovendo",shipImg1);
  ship.scale = 0.25;
}

function draw() {
 background(0);
 if (sea.x < 0){
  sea.x = sea.width/8;
 }
 drawSprites();
}

