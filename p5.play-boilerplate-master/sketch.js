const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var test;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  background(255);
  
  engine = Engine.create();
  world = engine.world;

  floor = new Sthala(400, 795, 800, 10)
  left_wall = new Sthala(-5, 400, 10, 800)
  right_wall = new Sthala(805, 400, 10, 800)

  for (var k = 0; k <=innerWidth; k = k + 80){
    divisions.push(new Delitev(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Pinnar(j, 75, 10));
  }

  for (var j = 15; j <=innerWidth; j=j+50){ 
    plinkos.push(new Pinnar(j, 175, 10));
  }

  for (var j = 40; j <=innerWidth; j=j+50){ 
    plinkos.push(new Pinnar(j, 275, 10));
  }

  for (var j = 15; j <=innerWidth; j=j+50){ 
    plinkos.push(new Pinnar(j, 375, 10));
  }
}



function draw() {
  background(0, 0, 0); 
  
  Engine.update(engine);
  
  if(frameCount%60===0){
    particles.push(new Bolsek(random(0, 800), 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  for (var m = 0; m < particles.length; m++){
    obj = particles[m];
    if(obj.body.position.y > 700){
      console.log("objy", obj.body.position.y);
      obj.removeFromWorld();
    }
  }

  floor.display();
  left_wall.display();
  right_wall.display();

  drawSprites();

  textSize(35);
  text("20", 25, 750);
  text("10", 105, 750);
  text("5", 185, 750);
  text("2", 265, 750);
  text("1", 345, 750);
  text("1", 425, 750);
  text("2", 505, 750);
  text("5", 585, 750);
  text("10", 665, 750);
  text("20", 745, 750);
}