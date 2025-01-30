let timerTime = document.getElementById("timerTime");
let stopBtn = document.getElementById("stopBtn");
let lapBtn = document.getElementById("lapBtn");
let startBtn = document.getElementById("startBtn");
let comingSoon = document.getElementById("comingSoon");



let milliseconds = 0,seconds = 0,minutes = 0,hours = 0;


let currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
timerTime.innerHTML = currentTime;
let interval;

function startTimer(){
    interval = setInterval(function() {
        milliseconds++
        currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`
        timerTime.innerText = currentTime;
        if(milliseconds === 1000){
            milliseconds = 0;
            seconds++
        }
        if(seconds === 60){
            seconds = 0;
            minutes++
        }
        if(minutes === 60){
            minutes = 0;
            hours++
        }
    }, 1)
}
function stopTimer(){
    clearInterval(interval)
    timerTime.innerText = currentTime;
}

startBtn.addEventListener("click", function() {
    startBtn.disabled = true;
    startBtn.style.background = "#2e7d32";
    startTimer()

});

stopBtn.addEventListener("click", function() {
    startBtn.disabled = false;
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0;
    currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    startBtn.style.background = "#4CAF50";
    stopTimer()
})

lapBtn.addEventListener("click", function() {
    comingSoon.style.display = "flex";
    setTimeout(function() {
        comingSoon.style.display = "none";
    }, 1500);
})
