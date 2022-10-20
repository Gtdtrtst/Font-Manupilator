
nosex = 0;
nosey = 0;
leftWristx = 0;
rightWristx = 0;
difference  = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(550,400);
    canvas.position(560,100);
    video.position(40,50);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults);
}
function draw(){
background('#DEDAED');
fill('#070c14');
textSize(difference);
text('Hello',50,50,400);
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+nosex+" nosey= "+nosey);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
        console.log("leftwristx = "+leftWristx+ " rightwristx = "+rightWristx+" defference= "+difference);
    }
}