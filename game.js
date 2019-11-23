function play() {
    var t = document.getElementById("mem_time");
    var time = t.options[t.selectedIndex].value;

    var p = document.getElementById("table_size");
    var size = p.options[p.selectedIndex].value;

    if (size === "Level_1"){
        document.getElementById("Level_1").style.display = 'block';
        document.getElementById("Level_2").style.display = 'none'
    }
    else if (size === "Level_2") {
        document.getElementById("Level_2").style.display = 'block';
        document.getElementById("Level_1").style.display = 'none'
    }
    else {
    }
}


function revealTime() {

}

function plot_info() {
    document.getElementById("info").innerHTML="Your goal is to match each of the 8 pictures with its copy, Click the two matching images to reveal them.\n" +
        "Please wait for images to disappear, and then make the next attempt.";
}

