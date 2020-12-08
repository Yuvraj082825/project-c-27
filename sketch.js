
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(280,450,30);
	bobObject2=new Bob(340,450,30);
	bobObject3=new Bob(400,450,30);
	bobObject4=new Bob(460,450,30);
	bobObject5=new Bob(520,450,30);
	roof3=new Roof(400,50,800,10);
	roof2=new Roof(340,50,800,10);
	roof1=new Roof(280,50,800,10);
	roof4=new Roof(460,50,800,10);
	roof5=new Roof(520,50,800,10);
	rope1=new Rope(bobObject1.body,roof1.body,20,0);
	rope2=new Rope(bobObject2.body,roof2.body,20,0);
	rope3=new Rope(bobObject3.body,roof3.body,20,0);
	rope4=new Rope(bobObject4.body,roof4.body,20,0);
	rope5=new Rope(bobObject5.body,roof5.body,20,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  //keyPressed();
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
	}
}



