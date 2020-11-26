const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  
  /*  var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);*/
    ground1 = new ground (200,390,400,20)
    box1 = new box(200,300,50,50);

    box2 = new box(240,100,50,100);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    

   /* ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
    box1.display();
    box2.display();
    ground1.display();
}