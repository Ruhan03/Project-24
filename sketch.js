
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1,trach2,trash3,paperObject,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	trash1 = new Trash(620,360,200,20);	
	trash2 = new Trash(710,309,20,120);	 
  trash3 = new Trash(527,309,20,120);
  ground = new Trash(400,390,800,30);
  paperObject = new Paper(200,200);
   

	//Create the Bodies Here.


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("darkblue");
  
  drawSprites();
  trash1.display();
  trash2.display();
  trash3.display();
  paperObject.display();
  ground.display();
}

function keyPressed() {
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.positon,{x:85,y:-85});
 }
}

