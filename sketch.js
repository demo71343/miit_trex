var trex_running;
var edges;
var groundImage;
var cloud;


function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
groundImage=loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200);
  trex=createSprite(150, 130, 30, 75);
  trex.addAnimation("running",trex_running)
  trex.scale=0.7;
  ground=createSprite(300,180,600,10);
  ground.addImage("ground",groundImage);
  ground1=createSprite(300,190,600,10);
  ground1.visible=false;
}

  function draw() {
  background("lightblue"); 
  
  console.log(trex.y);

  if (keyDown("space") && trex.y>150){ 
  trex.velocityY=-12
  }
  trex.velocityY=trex.velocityY+0.8 

  edges=createEdgeSprites()
  trex.collide(ground1)

  ground.velocityX=-2;

  if(ground.x<0){
  ground.x=300;
}

  createClouds();
  drawSprites();
}


function createClouds(){
  cloud = createSprite(500, 80, 40,10);
  cloud.velocityX = -2;


}
