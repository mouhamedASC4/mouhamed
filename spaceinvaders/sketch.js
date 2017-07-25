function Laser(x,y){
    this.x=x;
    this.y=y;
}
var lasers=[];
function setup(){
    createCanvas(600,600);
    background(2);
    strokeWeight(5);
}
var row1 = [true,true,true,true,true,true,true,true];
var row2 = [true,true,true,true,true,true,true,true];
var row3 = [true,true,true,true,true,true,true,true];
var row4 = [true,true,true,true,true,true,true,true];
var row5 = [true,true,true,true,true,true,true,true];
var board =[row1,row2,row3,row4,row5];
var x = 100;
function draw() {
       background(0);
       board = true;
    //    fill(random(255),random(255),random(255),random(255));
    for(var i=0; i<8;i++){
        rect(i*75,20,40,40);
    }
    for(var i=0;i<8;i++){
        rect(i*75,100,40,40);

    }
    for(var i=0;i<8;i++){
        rect(i*75,180,40,40);
    }
    for(var i=0;i<8;i++){
        rect(i*75,260,40,40);
    }
    for(var i=0;i<8;i++){
        rect(i*75,340,40,40);
    } 
    
  if (keyIsDown(LEFT_ARROW)){
    x-= 5};
  

  if (keyIsDown(RIGHT_ARROW)){
    x+= 5};
    if(keyIsDown(32)){
        lasers.push(new Laser(x,490));
    }
fill(255,0,0);
 rect(x, 490, 20, 55);
 for(var i=0;i<lasers.length;i++){
     rect(lasers[i].x,lasers[i].y,10,40);
     lasers[i].y-=10;
 }
//   if (x>=600){
//         xspeed = +1;

//     }
//     else if(x<=0){
//         xspeed = -1;
//     }
}
var x =300;
// var xspeed =1;

