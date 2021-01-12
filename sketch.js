//alias for Engine, World and Bodies 
//namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine, myworld, box1, box2, box3, box4, box5, ground, pig1, pig2, log1, log2, log3, log4,platform, bird, bg, log5, ssobject
    ;

function preload() {
    bg = loadImage("sprites/bg.png");

}
function setup() {
    createCanvas(1200, 400);
    myengine = Engine.create();
    myworld = myengine.world;
    
    platform = new Ground(150,305,300,170);


    ground = new Ground(600, height, 1200, 20);
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig2 = new Pig(810, 220);
    log2 = new Log(810, 180, 300, PI / 2);
    box5 = new Box(810, 160, 70, 70);
    log3 = new Log(760, 120, 150, PI / 7)
    log4 = new Log(870, 120, 150, -PI / 7);
    bird = new Bird(200, 50);
    // log5 = new Log(230, 180, 80, PI / 2);
    ssobject = new slingShotClass(bird.body, { x: 200, y: 50 });
    // console.log(mybody);
    //Engine.run(myengine);//checks for 60 fps

}

function draw() {
    background(bg);
    Engine.update(myengine);//checks for every frame



    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    //log5.display();
    ssobject.display();


    ground.display();
    platform.display();


}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    ssobject.fly();
}

