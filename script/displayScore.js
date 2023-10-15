const urlParams = new URLSearchParams(window.location.search);
const difficult = urlParams.get('value');

let tableName;
switch (difficult) {
        case '1': tableName = 'easy'; break;
        case '2': tableName = 'meduim'; break;
        case '3': tableName = 'hard'; break;
}

const scores = JSON.parse(localStorage.getItem(tableName)) || [];

if (scores.length === 0) {
    for (let i = 0; i < 5; i++) {
        scores.push({ nickname: '---', time: 999 });
    }
    localStorage.setItem(tableName, JSON.stringify(scores));
}

console.log(JSON.parse(localStorage.getItem(tableName)) || [])

function displayScores() {
    const scores = JSON.parse(localStorage.getItem(tableName)) || [];
    console.log(scores);
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        const li = document.createElement('li');
        if (score.time === 999) {
            li.textContent = `${i + 1}. ${score.nickname} - 000s`;
            leaderboard.appendChild(li);
        } else {
            li.textContent = `${i + 1}. ${score.nickname} - ${score.time.toString().padStart(3, '0')}s`;
            leaderboard.appendChild(li);
        }
    }
}

document.addEventListener('DOMContentLoaded', displayScores);