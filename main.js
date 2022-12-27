i="";
j="";
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting objects";
    j=document.getElementById("status").value;
}
function modelLoaded(){
    console.log("model Loaded!");
    status=true;
}
function draw(){
    image(video,0,0,480,380);
}