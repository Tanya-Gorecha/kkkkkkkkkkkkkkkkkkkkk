function setup(){
    canvas = createCanvas(600,400);
    canvas.position(150,150);
  video = createCapture(VIDEO);
  video.size(400,200);
  video.hide();
}
function draw(){
    image(video,0,0,600,400);
    fill("red");
    stroke("red");
    circle(50,50,80);
    circle(550,50,80)
    circle(50,350,80);
    circle(550,350,80);
    stroke("green");
    fill("green");
    rect(90,10,400,50);
    rect(90,350,400,50);
    rect(500,70,50,400);
    rect(50,70,50,400);
}