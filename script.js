let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("time");

function stopWatch (){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
}

stopWatch();
console.log(seconds, minutes, hours);