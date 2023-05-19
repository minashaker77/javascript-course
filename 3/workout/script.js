var sec = 0;
var timerInterval;
var minute = 3;

var onLoadCounter = function () {
    count = Number(Cookies.get('count'))
    document.getElementById('timer').innerHTML = minute+":"+sec;
}



var start = function () {
    timerInterval = setInterval(() => {
        if (minute === 3 && sec === 0) {
            minute--
            sec = 60
            sec--
        }else if(minute === 2 && sec===0 ){
            minute--
            sec=60
            sec--
        }else if (minute === 1 && sec===0){
            minute--
            sec=60
            sec--
        }else if(minute=== 0 && sec===0){
            pause()
        }
        sec--
        Cookies.set('count', count)
        Cookies.set('state', 'started')
        document.getElementById('timer').innerHTML = minute+":"+sec;
        document.getElementsByClassName('start')[0].disabled = true;
        document.getElementsByClassName('pause')[0].disabled = false;
        document.getElementsByClassName('reset')[0].disabled = false;
    }, 10);
}
var pause = function () {
    Cookies.set('state', 'paused')
    clearInterval(timerInterval)
    document.getElementsByClassName('start')[0].disabled = false;
    document.getElementsByClassName('pause')[0].disabled = true;

}
var reset = function () {
    pause()
    count = minute;
    Cookies.set('count', count)
    document.getElementById('timer').innerHTML = minute+":"+sec;
    document.getElementsByClassName('reset')[0].disabled = true;
}