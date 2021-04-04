
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var backGroundImg;

function preload(){
    backGroundImg= loadImage("background.jpg");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1310,670);

	paper = new Paper(400,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backGroundImg);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

  paper.depth = dustbinObj.depth;
  dustbinObj.depth = dustbinObj.depth + 1;
}

function keyPressed (){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-130});
	}

	/*if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:145});
	}*/

	/*if (keyCode === UP_ARROW) { 
		Matter.Body.setStatic(packageBody,false);
	}*/

	
 
}

