const display = document.getElementById('display');
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }

}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
}


function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    milliseconds=milliseconds.toString().padStart(2, '0');
    minutes=minutes.toString().padStart(2, '0');
    seconds=seconds.toString().padStart(2, '0');
    hours=hours.toString().padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}