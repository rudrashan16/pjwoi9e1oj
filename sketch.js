var hypotonicBall,database;
var position;
//var ball;
function setup(){
   database = firebase.database();
  // console.log(database)
    createCanvas(500,500);
   hypotonicBall = createSprite(250,250,10,10);
    hypotonicBall.shapeColor = "red";

var hypotonicBallPosition = database.ref("ball/position");
hypotonicBallPosition.on("value",readPosition,showError);





}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    console.log(position);

    hypotonicBall.x = position.x;
    hypotonicBall.y = position.y;
}
function rightPosition(x,y){
    database.ref("ball/position").set({
        'x': position.x+ x ,
        'y':position.y +y
    })
}
function showError(){
    console.log("error");
}