
var timerInterval;
var timer = 300;

var onLoadCounter = function () {
    document.getElementById('timer').innerHTML =convertSeconds(timer);
}

function convertSeconds(timer) {
    var min = Math.floor(timer / 60);
    var sec = timer - min * 60;
    if (min < 10) {
        min = "0"+min;
    }
    if (sec < 10) {
        sec = "0"+sec;
    }
    return min + ":" + sec;
}

var start = function () {
    document.getElementsByClassName('start')[0].disabled = true;
    document.getElementsByClassName('pause')[0].disabled = false;
    document.getElementsByClassName('reset')[0].disabled = false;
    timerInterval = setInterval(function () {
        document.getElementById("timer").innerHTML = convertSeconds(timer);
        timer--
        if(timer < 0) pause()
        
    }, 200);

}
var pause = function () {
    clearInterval(timerInterval)
    document.getElementsByClassName('start')[0].disabled = false;
    document.getElementsByClassName('pause')[0].disabled = true;

}
var reset = function () {
    pause()
    timer = 300
    convertSeconds(timer)
    document.getElementById('timer').innerHTML = convertSeconds(timer);
    document.getElementsByClassName('reset')[0].disabled = true;
}