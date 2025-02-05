let timerTime = document.getElementById("timerTime");
let stopBtn = document.getElementById("stopBtn");
let lapBtn = document.getElementById("lapBtn");
let startBtn = document.getElementById("startBtn");
let laps = document.getElementById("laps");

let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let startTime;
let interval;


let currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
timerTime.innerText = currentTime;

function startTimer() {
    startTime = Date.now() - milliseconds; // Учитаем прошедшее время с начала

    interval = setInterval(function() {
        let elapsedTime = Date.now() - startTime; // Прошедшее время от старта

        // Обновляем миллисекунды, секунды, минуты, часы
        milliseconds = elapsedTime % 1000;
        seconds = Math.floor((elapsedTime / 1000) % 60);
        minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

        currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
        timerTime.innerText = currentTime;

    }, 1);
}

function stopTimer() {
    clearInterval(interval);
    timerTime.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

startBtn.addEventListener("click", function() {
    startBtn.disabled = true;
    lapBtn.disabled = false;
    startBtn.style.background = "#2e7d32";
    startTimer();
});

stopBtn.addEventListener("click", function() {
    startBtn.disabled = false;
    lapBtn.disabled = true;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    startBtn.style.background = "#4CAF50";
    laps.innerHTML = '';
    stopTimer();
});

lapBtn.disabled = true;

lapBtn.addEventListener("click", function() {
    let lapValue = currentTime;
    laps.innerHTML += lapValue + '<br>';
});
