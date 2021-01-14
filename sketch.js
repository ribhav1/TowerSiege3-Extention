const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const mConstraint = Matter.MouseConstraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var shelf1, shelf2, shelf3, shelf4;
var ball1;
var rope1;
var mc;
var boxes = [];
var backgroundColor;
var textState = "notshown";
var score = 0;

function setup(){
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  var options = {
    body: ball1
  }
  mC = mConstraint.create(engine, options);


  // for(var i = 360; i <= 720; i += 40){
  //   block1 = new block(i,460,40,40,false,80);   
  //   boxes.push(block1);
  // }

  // for(var i = 380; i <= 700; i += 40){
  //   block1 = new block(i,415,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 400; i <= 680; i += 40){
  //   block1 = new block(i,360,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 420; i <= 660; i += 40){
  //   block1 = new block(i,315,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 440; i <= 640; i += 40){
  //   block1 = new block(i,260,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 460; i <= 620; i += 40){
  //   block1 = new block(i,215,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 480; i <= 600; i += 40){
  //   block1 = new block(i,160,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 500; i <= 580; i += 40){
  //   block1 = new block(i,115,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 520; i <= 560; i += 40){
  //   block1 = new block(i,60,40,40,false,80);   
  //   boxes.push(block1);
  // }
  // for(var i = 540; i <= 540; i += 40){
  //   block1 = new block(i,15,40,40,false,80);   
  //   boxes.push(block1);
  // }

  block1 = new block(775, 275, 50, 50);
  block2 = new block(815, 275, 50, 50);
  block3 = new block(795, 250, 50, 50);
  block4 = new block(415, 475, 50, 50);
  block5 = new block(465, 475, 50, 50);
  block6 = new block(440, 450, 50, 50);

  shelf1 = new block(790,300,250,20,true,100);
  shelf2 = new block(440,500,250,20,true,100);

  ball1 = new ball(120, 400, 20, 100, false);
  rope1 = new rope(ball1.body, {x: 120, y: 400});


  Engine.run(engine);
}

function draw() {
  background(170);
  
  text("Score: " + (block1.scoreVal + block2.scoreVal + block3.scoreVal + block4.scoreVal + block5.scoreVal + block6.scoreVal), 200, 300);

  block1.display();
  // block1.score();
  block2.display();
  // block2.score();
  block3.display();
  // block3.score();
  block4.display();
  // block4.score();
  block5.display();
  // block5.score();
  block6.display();
  // block6.score();

  shelf1.display();
  shelf2.display();

  if(mouseX < 120){
    World.add(world, mC);
  }else{
    World.remove(world, mC);
  }

  ball1.display();
  rope1.display();

  if(textState === "shown"){
    textSize(20);
    text("Press Space for Another Shot", 100, 200);
  }
  if(ball1.body.position.x > 130){
    rope1.fly();
    textState = "shown";
  }
}

function keyPressed(){
  if(keyCode === 32){
  rope1.attach(ball1.body);
  Matter.Body.setVelocity(ball1.body, {x: 0, y: 0});
  textState = "nonshown";
  }
}