const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2, height-30, width, 30)
    box1 = new Box(200,300,50,50);
    box2 = new Box(230, 200, 70, 70);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    fill("red")
    ground.display();
    box2.display();
}