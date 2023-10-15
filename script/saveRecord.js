function howManySeconds() {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('time');

    const element = document.getElementById('time');
    element.innerHTML = value + ' секунд!'
}

function playWinnerSound() {
    const audioElement = new Audio('../sounds/newRecord.mp3');
    audioElement.play();
}

function send() {
    const urlParams = new URLSearchParams(window.location.search);
    const time = parseInt(urlParams.get('time'));
    const difficult = urlParams.get('difficult')

    var nickname = document.getElementById('nickname').value;
    console.log(nickname, time, difficult)

    saveScore(nickname, time, difficult);
    
    window.location.href = 'start.html?value=' + difficult;
}

document.addEventListener('DOMContentLoaded', howManySeconds);
document.addEventListener('DOMContentLoaded', playWinnerSound);
