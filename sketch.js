const Engine  = Matter.Engine;
 const   World = Matter.World;
  const  Bodies = Matter.Bodies ;


var snowBg ;
var kid , kidImg ;
var snowFlakes=[]
var ground ;
var engine , world ;


function preload(){
snowBg = loadImage("snow1.jpg") ;
kidImg = loadImage("kid1.png") ;

}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world ;
  kid = createSprite(400, 200, 50, 50);
  kid.addImage(kidImg) ;
  kid.scale = 0.5 ;
  ground = new Ground(400,400,800,20) ;

  

}

function draw() {
  background(snowBg);  
  Engine.update(engine) ;
  ground.display();
  if(frameCount%60===0){
    snowFlakes.push(new Snow(random(width/2-50, width/2+50), 10,10));
     }
  for (var j = 0; j < snowFlakes.length; j++) {
    snowFlakes[j].display();
  }
  
  drawSprites();
}