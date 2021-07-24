//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
// const Render = Matter.Render;

var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,390,800,20,{isStatic: true});
    World.add(myworld,ground);
    console.log(ground);

    ground2 = Bodies.rectangle(5, 200, 20,400,{isStatic: true});
    World.add(myworld,ground2);
    console.log(ground2);

    ground3 = Bodies.rectangle(800, 200, 20,400,{isStatic: true});
    World.add(myworld,ground3);
    console.log(ground3);

    ground4 = Bodies.rectangle(400, 10, 800,20,{isStatic: true});
    World.add(myworld,ground4);
    console.log(ground4);

    // Code for red box
    var redBox_options ={
        isStatic: true,
    }

    redBox = Bodies.rectangle(310, 335, 100, 90,redBox_options);
    World.add(myworld,redBox);

    // Code for green box
    var greenBox_options ={
        isStatic: true,
    }

    greenBox = Bodies.rectangle(450,335,100,90,greenBox_options);
    World.add(myworld,greenBox);

    //code for blue box

    var blueBox_options = {
        isStatic: true,
    }

    blueBox = Bodies.rectangle(200, 335, 100, 90, blueBox_options);
    World.add(myworld, blueBox);

    // Code for yellow box
    var yellowBox_options ={
        isStatic: true,
        angle:-60
        
    }

    console.log("blueBox")

    yellowBox = Bodies.rectangle(720,330,100,20,yellowBox_options);
    // Matter.Body.setAngle(yellowBox,130)
    World.add(myworld,yellowBox);

    // Code for ball
    var ball_options ={
        isStatic: false,
        restitution: 1.7
    }

    ball = Bodies.circle(700,100,20, ball_options);
    World.add(myworld,ball);
    

    // Only for debugging code, is this needed, not otherwise
    // var render = Render.create({
    //   element: document.body,
    //   engine: myengine,
    //   options: {
    //     width: 1600,
    //     height: 700,
    //     wireframes: false
    //   }
    // });
    // Render.run(render);

    //console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
    rect(redBox.position.x,redBox.position.y,100,90);
    fill("green")
    rect(greenBox.position.x,greenBox.position.y,100,90);
    fill("blue")
    rect(blueBox.position.x,blueBox.position.y, 100, 90);
    fill("red")
    rect(ground4.position.x,ground4.position.y, 800, 20); 

    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();

    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);


}
