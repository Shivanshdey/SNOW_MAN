
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var backgroundImg;

function preload()
{
   //preload the images here
backgroundImg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create();
	world = engine.world;

snow1=new snow(100,50,50,50)
snow2=new snow(200,50,50,50)
snow3=new snow(300,50,50,50)
snow4=new snow(400,50,50,50)
snow5=new snow(500,50,50,50)
snow6=new snow(600,50,50,50)
snow7=new snow(700,50,50,50)
snow8=new snow(800,50,50,50)
snow9=new snow(900,50,50,50)
snow10=new snow(1000,50,50,50)
ground = new Ground(600,height,1200,20);


	
  
  
  World.add(world, snow);
  Engine.run(engine);
  
}


function draw() {
background(backgroundImg);

  
    snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();
    snow6.display();
    snow7.display();
    snow8.display();
    snow9.display();
    snow10.display();
    ground.display();
  drawSprites()

}
