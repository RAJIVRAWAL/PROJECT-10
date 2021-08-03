
var sea,seaImg1


function preload() {

  seaImg = loadImage("sea.png");

  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  }


function setup(){
  createCanvas(400,400);
 
//correction done
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.25;
//correction done
  ship = createSprite(130,200,30,30);
  ship.addAnimation("shipImg1",shipImg1);
  ship.scale = 0.25;

}

function draw() {
  background("blue");
  sea.velocityX = -3;
  
  if (sea.x < 0) {
    //correction done
    sea.x = width/2
  }
  
  drawSprites();
}
