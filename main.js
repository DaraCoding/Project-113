function preload() {
}
 
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
 
  tint_color = "";
}
 
function draw() {
  rect(30, 20, 575, 435, 20);

  image(video, 200, 100, 180, 180);
  tint(tint_color);
}
 
function take_snapshot(){    
  save('student_name.png');
}
 
function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}
