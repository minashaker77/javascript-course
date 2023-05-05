var minute = 2;
var sec = 01;
var timerInterval;

var onLoadCounter = function() {
    // minute = Number(Cookies.get('minute'))
    // sec = Number(Cookies.get('sec'))
    document.getElementById("timer").innerHTML = minute + ":" + sec;
    var previousState = Cookies.get('state')
    if(previousState === 'started'){
        start()
    }
}



var start = function(){
    timerInterval = setInterval(() => {
        sec--;
    if (sec == 00) {
        minute--;
        sec = 59;
        if (minute == 0) {
            minute = 0;
            sec = 59;
        } if (minute == 0 && sec == 00){
            reset()
            pause()
        }
    }
        // Cookies.set('minute',minute)
        // Cookies.set('sec',":" + sec)
        Cookies.set('state','started')
        document.getElementById('timer').innerHTML = minute + ":" + sec;
        document.getElementsByClassName('start')[0].disabled = true;
        document.getElementsByClassName('pause')[0].disabled = false;
        document.getElementsByClassName('reset')[0].disabled = false;

    }, 1000);
}
var pause = function(){
    Cookies.set('state','paused')
    clearInterval(timerInterval)
    document.getElementsByClassName('start')[0].disabled = false;
    document.getElementsByClassName('pause')[0].disabled = true;

}
var reset = function(){
    pause()
    var minute = 2;
    var sec = 01;
    Cookies.set('timer', minute + ":" + sec)
    // Cookies.set('state','reset')
    document.getElementById('timer').innerHTML = minute + ":" + sec;
    document.getElementsByClassName('reset')[0].disabled = true;
}