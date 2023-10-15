function readIdAndSetCoordinates(id) {    
    var x = parseInt(id.substr(2, 2), 10);
    var y = parseInt(id.substr(0, 2), 10);

    return { x, y };
}

function howMuchMines(id) {
    var { x, y } = readIdAndSetCoordinates(id);
    var counter = 0;

    for (checkY = y - 1; checkY <= y + 1; checkY++) {
        for (checkX = x - 1; checkX <= x + 1; checkX++) {
            if (!(x === checkX && y === checkY)) {
                var checkId = `${checkY.toString().padStart(2, '0')}${checkX.toString().padStart(2, '0')}`;
                var checkCell = document.getElementById(checkId);
                if (checkCell && checkCell.classList.contains('mined')) {
                    counter++
                } 
            }
        }
    }

    if (counter === 0) {
        for (var checkY = y - 1; checkY <= y + 1; checkY++) {
            for (var checkX = x - 1; checkX <= x + 1; checkX++) {
                var checkId = `${checkY.toString().padStart(2, '0')}${checkX.toString().padStart(2, '0')}`;
                if (checkId !== id) {
                    clickCell(checkId);
                }
            }
        }
    }

    return counter;
}

var hasWon = false;
var hasLost = false;

function handleWon() {
    const audioElement = new Audio('../sounds/win.mp3');
    audioElement.play();
    changeEmotion(1);
    stopTimer();
    hasWon = true;

    const cells = document.querySelectorAll('.cell.mined:not(.flagged)');
    cells.forEach(cell => {
        const span = document.createElement('div');
        pushedStyles(span, difficult);
        span.classList.add('pushed');
        span.style.backgroundImage = "url('../images/mine.webp')";
        cell.parentNode.replaceChild(span, cell);
    });    

    console.log(getSeconds().toString());
    endGame();
}

function handleLoss(button) {
    hasLost = true;

    const loseSound = new Audio('../sounds/lose.mp3');
    loseSound.play();
    changeEmotion(-1);
    const notMined = document.querySelectorAll('.cell.flagged:not(.mined)');
    notMined.forEach(notMinedCell => {
        notMinedCell.style.backgroundImage = "url('../images/NotFlag.webp')";
    });
    const span = document.createElement('div');
    span.style.backgroundImage = "url('../images/mine.webp')";
    span.style.backgroundColor = "red";
    span.classList.add("pushed");
    pushedStyles(span, difficult);
    button.parentNode.replaceChild(span, button);
    const mined = document.querySelectorAll('.cell.mined:not(.flagged)');
    mined.forEach(minedCell => {
        const span = document.createElement('div');
        pushedStyles(span, difficult);
        span.classList.add('pushed');
        span.style.backgroundImage = "url('../images/mine.webp')";
        minedCell.parentNode.replaceChild(span, minedCell);
    });    
    stopTimer();
}

function clickCell(id) {
    if (hasWon || hasLost) {
        return;
    }
    const button = document.getElementById(id);
    if (button && button.classList.contains('cell') && !button.classList.contains('flagged')) {
        if (button.classList.contains('mined')) {
            handleLoss(button);
        } else {
            changeValueOfCells();
            const span = document.createElement('div');
            span.classList.add('pushed');
            pushedStyles(span, difficult);
            span.id = id;
            button.parentNode.replaceChild(span, button);
            var minesCount = howMuchMines(id);
            if (minesCount !== 0) {
                var textNode = document.createTextNode(minesCount);
                span.appendChild(textNode);
                switch (minesCount) {
                    case 1: span.style.color = 'rgb(0, 0, 255)'; break;
                    case 2: span.style.color = 'rgb(0, 100, 0)'; break;
                    case 3: span.style.color = 'rgb(180, 0, 0)'; break;
                    case 4: span.style.color = 'rgb(128, 0, 128)'; break;
                    case 5: span.style.color = 'rgb(0, 0, 140)'; break;
                    case 6: span.style.color = 'rgb(140, 0, 0)'; break;
                    case 7: span.style.color = 'rgb(80, 0, 0)'; break;
                    case 8: span.style.color = 'rgb(0, 0, 0)'; break;
                };
            }
        }
    }
    if (cellCounter === 0 && !hasWon) {
        handleWon();
    }
}

function flagCell(id) {
    const cell = document.getElementById(id);
    
    if (cell.classList.contains('flagged')) {
        cell.classList.remove('flagged');
        changeValueAtCounter(1);
    } else {
        cell.classList.add('flagged')
        changeValueAtCounter(-1);
    }
}

var checkedCells = [];

function sprint(id) {
    if (hasWon || hasLost) {
        return;
    }
    var element = document.getElementById(id);
    var value = parseInt(element.textContent, 10);

    var { x, y } = readIdAndSetCoordinates(id);
    var counter = 0;

    for (checkY = y - 1; checkY <= y + 1; checkY++) {
        for (checkX = x - 1; checkX <= x + 1; checkX++) {
            if (!(x === checkX && y === checkY)) {
                var checkId = `${checkY.toString().padStart(2, '0')}${checkX.toString().padStart(2, '0')}`;
                var checkCell = document.getElementById(checkId);
                if (checkCell && checkCell.classList.contains('flagged')) {
                    counter++
                }
            }
        }
    }

    if (counter === value) {
        for (var checkY = y - 1; checkY <= y + 1; checkY++) {
            for (var checkX = x - 1; checkX <= x + 1; checkX++) {
                var checkId = `${checkY.toString().padStart(2, '0')}${checkX.toString().padStart(2, '0')}`;
                if (document.getElementById(checkId)) {
                    if (checkId !== id && !document.getElementById(id).classList.contains('flagged')) {
                        clickCell(checkId);
                    } 
                    if (checkId !== id && !checkedCells.includes(checkId) && document.getElementById(checkId).classList.contains('pushed')) {
                        checkedCells.push(checkId);
                        sprint(checkId);
                    }

                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.pool').addEventListener('mousedown', function (e) {
        const button = e.target;
        if (button.classList.contains('cell') && !(hasWon || hasLost)) {
            const id = button.id;
            if (e.button === 0) {
                timeStart();
                createMines(id);
                clickCell(id);
            } else if (e.button === 2) {
                timeStart();
                flagCell(id);
            }
        } else if (button.classList.contains('pushed')) {
            const id = button.id;
            if (e.button === 0) {
                sprint(id);
                checkedCells = [];
            }
        }
    });
})
