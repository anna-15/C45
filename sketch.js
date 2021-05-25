const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sun,meteor,backgroundImg,meteorImg;
var engine,world;
var enemyshuttle,enemyshuttleImg;
var shuttle,shuttleImg;
var laserImg,laserGroups;
function preload(){

  backgroundImg = loadImage("Images/background.png");
  meteorImg     = loadImage("Images/meteor.png");
  enemyshuttleImg = loadImage("Images/enemyshuttle.png");
  shuttleImg    = loadImage("Images/shuttle.png");
  laserImg      = loadImage("Images/laser.png")
}

function setup(){

  createCanvas(1366,657);

engine = Engine.create();
world = engine.world;

sun = new Sun(683,328,170,170);
shuttle = createSprite(200,200,50,50);
shuttle.addImage(shuttleImg)
laserGroups= new Group();

}

function draw(){
  
 

  background(backgroundImg);
  Engine.update(engine);
  shuttle.x=mouseX;
  shuttle.y=mouseY;
  
  sun.display();
  
  if(keyCode===32){
    createLasers();
  }
  

  enemyShuttle();
  spawnMeteors();


  drawSprites();
  
  
}

function spawnMeteors(){

  if(frameCount % 40 === 0){
    meteor = createSprite(350,100,10,10);

    meteor.x = Math.round(random(200,1200));
    meteor.addImage(meteorImg);
    meteor.velocityY = 13;

    meteor.lifetime = 50;
  }
}

function enemyShuttle(){

  if(frameCount % 50 === 0){
    enemyshuttle = createSprite(350,100,10,10);
    enemyshuttle.scale = 0.5;
    enemyshuttle.x = Math.round(random(100,1300));
    enemyshuttle.addImage(enemyshuttleImg);
    enemyshuttle.velocityY = 14;

    enemyshuttle.lifetime = 50;

  }


}

function createLasers(){
 
  var laser=createSprite(200,200,25,25)
  laser.addImage(laserImg);
  
  //laser.x=shuttle.x;
  laser.y=shuttle.y;
  laserGroups.add(laser);
  laser.velocityY=-4
  laser.lifetime=150;



}