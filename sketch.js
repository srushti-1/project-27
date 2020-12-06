var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;
var constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	 bob1 = new Bob(400, 650, 20);
	 bob2 = new Bob(400, 650, 20);
	 bob3 = new Bob(400, 650, 20);
	 bob4 = new Bob(400, 650, 20);
	 bob5 = new Bob(400, 650, 20);
	 rope1 = new Rope(bob1, roof, 0, 0);
	 rope2 = new Rope(400, 650, 200, 20);
	 rope3 = new Rope(400, 650, 200, 20);
	 rope4 = new Rope(400, 650, 200, 20);
	 rope5 = new Rope(400, 650, 200, 20);
	 constraint = new Rope(230, 180, 80, PI/2);
	 constraint = new Rope(constraint, bob1);
    
	keyPressed();
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.didplay();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  constraint.display();

  drawSprites();
 

}

function keyPressed() {
		if (keyCode === UP_ARROW) {
		   
			Matter.Body.applyForce(bob1.body, bob1.body.Position, {x: 110, y: -110})
	
		}}