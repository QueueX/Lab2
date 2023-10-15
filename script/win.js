var cellCounter = 0;

function changeValueOfCells() {
    cellCounter--;
}

function resetCells() { 
    switch (difficult) {
        case '1': cellCounter = 71; return;
        case '2': cellCounter = 216; return;
        case '3': cellCounter = 381; return;
    }
}