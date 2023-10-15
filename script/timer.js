let timerInterval;
let seconds = 1;

function getSeconds() {
    return seconds;
}

function timeStart() {
    if (!timerInterval) {
        document.getElementById('time').value = '000';
        seconds = 0;
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    seconds++;
    const timeString = padZeroes(seconds);
    document.getElementById('time').value = timeString;
}

function padZeroes(num) {
    const str = num.toString();
    return str.padStart(3, '0');
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function nullTimer() {
    stopTimer();
    document.getElementById('time').value = '000';
}
