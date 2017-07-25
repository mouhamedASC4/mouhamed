function setup(){
    createCanvas(500,500);
    background(255);
    textSize(100);
}
var row1=["su","nu","nu","nu"];
var row2=["nu","nu","nu","sc"];
var row3=["nu","nc","su","nu"];
var row4=["su","nu","nu","nu"];
var board=[row1,row2,row3,row4];

function draw(){
    strokeWeight(5);
    var score=0;
    for (var i=0;i<board.length;i++){
        for (var j =0;j<board.length;j++){

            if (board[i][j]=="nu"||board[i][j]=="su"){
                fill(200);
            }
            else if (board[i][j]=="nc"){
            fill(0);
            }
            else if (board[i][j]=="sc"){
            fill(255,0,0);
            score++;
            }
            rect(j*100,i*100,100,100);
        }
    }
fill(100);
// rect(190,401,100,100);
fill(0);
}

    rect(0,0,100,100);
    rect(100,0,100,100);
    rect(200,0,100,100);
    rect(300,0,100,100);

    rect(0,100,100,100);
    rect(100,100,100,100);
    rect(200,100,100,100);
     rect(300,100,100,100);

     rect(0,200,100,100);
     rect(100,200,100,100);
    rect(200,200,100,100);
     rect(300,200,100,100);

     rect(0,300,100,100);
     rect(100,300,100,100);
    rect(200,300,100,100);
    rect(300,300,100,100);

     rect(0,400,100,100);
    rect(100,400,100,100);
     rect(200,400,100,100);
    rect(300,400,100,100);
 }
