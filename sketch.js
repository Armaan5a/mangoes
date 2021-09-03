const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload() {
	child = loadImage("plucking mangoes/boy.png");
  plant = loadImage("plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;

	tree = createSprite(900,330,30,40)
  tree.addImage(plant)
  tree.scale=0.45  
  
  ground=new Ground(600,595,1200,15);
	 
  boy = createSprite(200,530,30,40)
  boy.addImage(child)
  boy.scale=0.1
  
  m1=new Mangoes(1100,270,60)
  m2=new Mangoes(850,200,60)
  m3=new Mangoes(920,200,52)
  m4=new Mangoes(980,230,65)
  m5=new Mangoes(1050,200,52)
  m6=new Mangoes(850,130,60)
  m7=new Mangoes(990,120,55)
  m8=new Mangoes(750,230,60)
  m9=new Mangoes(800,280,55)
  m10=new Mangoes(920,120,50)
  stone=new Stone(230,540,40,40)
  band = new Rubberband(stone.body,{x:245, y:510})
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(409,569,23);
  drawSprites();
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  m9.display()
  m10.display()
  stone.display()
  band.display()
  ground.display()

}

function mouseDragged(){
  //if(band.rubbarband.bodyA===stone.body){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}//}

function mouseReleased(){
band.fly()  
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:200,y:50});
  band.attach(stone.body)
}
}

function detectollision(ma,st){
  m
}

