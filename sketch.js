const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var Eng ,MyWorld ,Ground;
var ball;


function setup() {
  createCanvas(800,400);
  Eng = Engine.create();
  MyWorld = Eng.world;
  var Ground_options = {
   isStatic: true
  }
  Ground = Bodies.rectangle(200,390,400,20,Ground_options);
World.add(MyWorld,Ground);
var ball_options = {
  restitution: 1
 }
 ball = Bodies.circle(200,200,25,ball_options);
World.add(MyWorld,ball);
}

function draw() {
background(255,255,255);  
Engine.update(Eng);
rectMode(CENTER);
rect(Ground.position.x ,Ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x ,ball.position.y,25,25);
}