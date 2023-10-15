var minesCounter = 0;
const minedCells = new Set();

function changeValueAtCounter(index) {
    const minesCounterElement = document.getElementById("mines");
    switch (index) {
        case 1: minesCounter++; break;
        case -1: minesCounter--; break;
    }
    minesCounterElement.value = minesCounter.toString().padStart(3, '0');
}

function createMines(id) {
    if (minedCells.size === 0) {
        var x, y, mines, mineId;
        const notMinedCells = new Set();

        var coordinates = readIdAndSetCoordinates(id);
        notX = coordinates.x;
        notY = coordinates.y;

        for (let i = notX - 1; i <= notX + 1; i++) {
            for (let j = notY - 1; j <= notY + 1; j++) {
                notId = `${j.toString().padStart(2, '0')}${i.toString().padStart(2, '0')}`;
                notMinedCells.add(notId);
            }   
        }

        switch (difficult) {
            case '1': x = y = 9, mines = 10; break;
            case '2': x = y = 16, mines = 40; break;
            case '3': x = 30, y = 16, mines = 99; break;
        }

        while (minedCells.size < mines) {
            const randomX = Math.floor(Math.random() * x) + 1;
            const randomY = Math.floor(Math.random() * y) + 1;
            mineId = `${randomY.toString().padStart(2, '0')}${randomX.toString().padStart(2, '0')}`;
            if (!notMinedCells.has(mineId) && !minedCells.has(mineId)) {    
                minedCells.add(mineId);
            }
        }

        minedCells.forEach(cellId => {
            let button = document.getElementById(cellId);
            button.classList.add("mined");
        });
    }
}

function resetMines() {
    minedCells.clear();
    const minesCounterElement = document.getElementById("mines");
    switch (difficult) {
        case '1': minesCounter = 10; break;
        case '2': minesCounter = 40; break;
        case '3': minesCounter = 99; break;
    }
    minesCounterElement.value = minesCounter.toString().padStart(3, '0');
}
