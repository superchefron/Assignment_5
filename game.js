var cards = [];
var memory_val = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var t = document.getElementById("mem_time");
var time = t.options[t.selectedIndex].value;

var p = document.getElementById("table_size");
var size = p.options[p.selectedIndex].value;

Array.prototype.memory_tile_shuffle = function (){
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random()*(i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

function play() {
    tiles_flipped = 0;
    var output ='<table>';
    if (size === "Level_1"){ // different levels
        //clearInterval(interval);
        //startTimer(120);
        for (var i=1;i<=9;i++){
            cards.push("image00"+i);
        }
    }
    else if (size === "Level_2") {
        //clearInterval(interval);
        //startTimer(150);
        for (var i=1;i<=16;i++){
            if(i<10)
                cards.push("image00"+i);
            else
                cards.push("image0"+i);
        }
    }
    else {
        document.getElementById("Level_2").style.display = 'none';
        document.getElementById("Level_1").style.display = 'none';
        document.getElementById("Level_3").style.display = 'block';
        clearInterval(interval);
        startTimer(180);
    }
    cards.memory_tile_shuffle();
    var k =1;
    for (var i=0;i<Math.sqrt(cards.length);i++){
        output += "<tr>";
        for (var j=1;j<=Math.sqrt(cards.length);j++) {
            output += '<td><img src="image00'+k+'" onclick="flip_card(this,\''+cards[k]+'\')"></td>';
        }
        output += "</tr>"
    }
    document.getElementById("board").innerHTML = output;
}

var seconds = 0, minute = 0;
var times = document.getElementById("timer");
var interval;
function startTimer(timeout) {
    interval = setInterval( function(){
        times.innerHTML = minute + " minute(s) " + seconds + " second(s)";
        seconds++;
        if (minute==60){
            minute = 0;
        }
        if (seconds==60){
            seconds = 00;
            minute++;
        }

    }
    ,timeout)
}

function plot_info() {
    document.getElementById("info").innerHTML= "Your goal is to match each of the 8 pictures with its copy, Click the two matching images to reveal them.\n" +
        "Please wait for images to disappear, and then make the next attempt.";
}
function flip_card(,val) {
}