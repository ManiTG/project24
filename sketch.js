
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


function setup() {
	createCanvas(800, 700);
	
	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=createSprite(400, 650, 210, 20 , {isStatic:true});
	rect1.shapeColor=color("purple")
	rect2=createSprite(500, 610, 20, 70,{isStatic:true});
	rect2.shapeColor=color("purple")
	rect3=createSprite(300, 610, 20, 70 ,{isStatic:true});
	rect3.shapeColor=color("purple")


	Engine.run(engine);
  
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})	
	 }
 }


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject=ellipse(56, 400, 45, 45);
  drawSprites();
 
}



