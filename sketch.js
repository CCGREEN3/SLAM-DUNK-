
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500,750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(20,200,20,ball_options)
	World.add(world,this.ball)
    
    ground = new Ground(750,700,1500,20);
	leftSide = new Ground(1100,630,20,120);
	rightSide = new Ground(1300,630,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)
  
  ground.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});
	}
}



