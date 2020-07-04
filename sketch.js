var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var state = "play";

function preload() {
	paper = loadImage("paper.png");
	dustbin = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	space = createSprite(600, 650, 140, 140);
	space.addImage(dustbin);
	space.scale = 0.2;

	ball = createSprite(200, 350, 50, 50);
	ball.addImage(paper);
	ball.scale = 0.2

	d1 = createSprite(600, 695, 150, 15);
	d1.shapeColor = "white";
	d2 = createSprite(675, 650, 15, 150);
	d2.shapeColor = "white";
	d3 = createSprite(525, 650, 15, 150);
	d3.shapeColor = "white";

	bin = createSprite(5000, 5000, 60, 15);
	bin.shapeColor = "green";
		
	Engine.run(engine);
}

  function draw() {
	  background("white");
	  Engine.update(engine);

	  if(state === "play") {
	  ball.x = mouseX;
	  ball.y = mouseY;
	  }
	  ball.bounceOff(d1);
	  ball.bounceOff(d2);
	  ball.bounceOff(d3);

      if(ball.isTouching(space)) {
		ball.x = 600;
		ball.y = 665;
		state = "over";
	  }

	  if(state === "over") {
        bin.x = 600;
		bin.y = 615;
	  }

	  drawSprites();

	  if(state === "over") {
        text("well done", 400, 350);
	  }

	  if(state === "play") {
        text("Scroll down and dump the waste in the dustbin", 400, 350);
	  }
  }



