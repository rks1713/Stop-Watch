let startTime, timerInterval;
let running = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset-btn');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const millisecondsSpan = document.getElementById('milliseconds');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        startTime = Date.now() - (startTime || 0);
        timerInterval = setInterval(updateTimer, 10);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    startTime = 0;
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00';
    millisecondsSpan.textContent = '00';
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor((elapsed / 60000) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);
    const milliseconds = Math.floor((elapsed % 1000) / 10);

    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
    millisecondsSpan.textContent = String(milliseconds).padStart(2, '0');
}
