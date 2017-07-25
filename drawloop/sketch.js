function setup(){
    xspeed=1;
    yspeed=1;s
    createCanvas(500,500);
    background(250);
    
}

var x = 1;
var y = 3;
var xspeed;
var yspeed;
function draw() {
   background(50);
  ellipse(x,y,50,50);
  x += xspeed;
  y += yspeed;  
  if (x>width){
  xspeed*= -1;
  }
  else if (y>height){
  yspeed*= -1;
  }
  if (x<0){
  xspeed*= -1;

  }
  else if (y<0){
  yspeed*= -1;

  }
//   if (x>=500){
//       xspeed = -1;
//   }
//   else if (x<=0) {
//       xspeed = 2;
//   }
//     x+=xspeed;

 }
   //   background(123);
//      rectMode(CORNER); // Default rectMode is CORNER
//      fill(255); // Set fill to white
//      rect(i,25, 25, 50, 50);

//      rectMode(CORNERS); // Set rectMode to CORNERS
//      fill(100);// Set fill to gray
//      rect(i,25,25,50,50); // Draw gray rect using CORNERS mode

//      rectMode(RADIUS); // Set rectMode to RADIUS
//      fill(250); // Draw white rect using RADIUS mode
//      rect(i,50,50,30,30);// Draw white rect using RADIUS mode
 
//      rectMode(CENTER); // Set rectMode to CENTER
//      fill(100); // Set fill to gray
//      rect(i,50, 50, 30, 30);// Draw gray rect using CENTER mode
//      x = 1;
//  }