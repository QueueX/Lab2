function saveScore(nickname, timeInSeconds, difficult) {
    let tableName;
    switch (difficult) {
        case '1': tableName = 'easy'; break;
        case '2': tableName = 'meduim'; break;
        case '3': tableName = 'hard'; break;
    } 
    
    const scores = JSON.parse(localStorage.getItem(tableName)) || [];
    console.log(scores)
    const score = {
        nickname: nickname,
        time: timeInSeconds,
    };
    scores.push(score);
    console.log(scores)
    scores.sort((a, b) => a.time - b.time);
    console.log(scores)
    if (scores.length > 5) {
        scores.pop();
    }
    localStorage.setItem(tableName, JSON.stringify(scores));
}

function clearLocalStorage() {
    localStorage.clear();
    console.log('LocalStorage has been cleared!');
}

function endGame() {
    let tableName;
    switch (difficult) {
        case '1': tableName = 'easy'; break;
        case '2': tableName = 'meduim'; break;
        case '3': tableName = 'hard'; break;
    }    

    const scores = JSON.parse(localStorage.getItem(tableName)) || [];

    if (scores.length < 5 || getSeconds() < scores[scores.length - 1].time || scores[scores.length - 1].time === null) {
        window.location.href = 'saveRecord.html?time=' + getSeconds().toString() + '&difficult=' + difficult;
    }
}
