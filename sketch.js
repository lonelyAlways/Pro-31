var ground,division;
var particles,plinko;

function setup() {
  createCanvas(800,400);
  
  ground=new Ground(400,380,800,10);
  division=new Division();
  particles=new Particles();
  plinko=new Plinko();
}
var particles=[]
var plinko=[]
var division=[]

var divisionHeight=300

function draw() {
  background(255,255,255);  

  ground.display();
  drawSprites();
}  

for(var i=0;i <=width; i=i+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}