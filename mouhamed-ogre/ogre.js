var HP = 100;
var gold = 0;
var numDefeated = 0;

function updateStats() {
    $("#stats").text("HP: " + HP + "// gold: "+ gold + "// ogres slain: "+ numDefeated);
}
function Attack() {
    if (HP > 0){
        if(math.random() *100 > gold) {
            $("#sogres").prepend(
                "<p>you won!+ 10 gold.</p>"
            )
        }

    }
}

function setup() {
//title
    $("body").append("<h1>welcom to ogre fighter v.1.o</h1>");    

//state section
    $("body").append(
    "<div><h3>STATS</h3><p id='stats'></p></div>"
);
//attack button
    $("body").append(
    "<button onclick='attack()'>Attack the ogre!></button>"
    );
    $("body").append(
        "<div id='ogre'></div>"
    );
    updateStats();
}
$(document).ready(setup);


