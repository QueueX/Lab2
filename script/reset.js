function reset() {
    nullTimer();
    resetMines();
    resetCells();
    changeEmotion(0);
    hasWon = false;
    hasLost = false;
    reGenerate();
}

document.addEventListener('DOMContentLoaded', reset);
