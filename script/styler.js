function gameStyle() {

    gameWindowStyles();
    poolStyles();

}

function gameWindowStyles() {
    const element = document.getElementById("gameWindow");

    switch (difficult) {
        case '1': {
            element.style.width = "750px";
            break;
        }
        case '2':{
            element.style.width = "800px";
            break;
        }
        case '3': {
            element.style.width = "1450px";
            break;
        }
    }
}

function poolStyles() {
    const element = document.getElementById("pool");

    switch (difficult) {
        case '1': {
            element.style.width = "630px";
            element.style.height = "630px"
            element.style.gridTemplateColumns = "repeat(9, 70px)"
            element.style.gridTemplateRows = "repeat(9, 70px)"
            break;
        }
        case '2':{
            element.style.width = "720px";
            element.style.height = "720px"
            element.style.gridTemplateColumns = "repeat(16, 45px)"
            element.style.gridTemplateRows = "repeat(16, 45px)"
            break;
        }
        case '3': {
            element.style.width = "1350px";
            element.style.height = "720px"
            element.style.gridTemplateColumns = "repeat(30, 45px)"
            element.style.gridTemplateRows = "repeat(16, 45px)"
            break;
        }
    }
}

function buttonStyles(element) {
    switch (difficult) {
        case '1': {
            element.style.height = "70px";
            element.style.width = "70px";
            element.style.borderWidth = "5px";
            element.style.borderRadius = "15px";
            break;
        }
        case '2': {
            element.style.height = "45px";
            element.style.width = "45px";
            element.style.borderWidth = "4px";
            element.style.borderRadius = "9px";
            break;
        }
        case '3': {
            element.style.height = "45px";
            element.style.width = "45px";
            element.style.borderWidth = "4px";
            element.style.borderRadius = "9px";
            break;
        }
    }
}

function pushedStyles(element) {
    switch (difficult) {
        case '1': {
            element.style.height = "60px";
            element.style.width = "60px";
            element.style.borderWidth = "5px";
            element.style.borderRadius = "15px";
            element.style.fontSize = "60px"
            break;
        }
        case '2': {
            element.style.height = "35px";
            element.style.width = "35px";
            element.style.borderWidth = "4px";
            element.style.borderRadius = "10px";
            element.style.fontSize = "35px"
            break;
        }
        case '3': {
            element.style.height = "35px";
            element.style.width = "35px";
            element.style.borderWidth = "4px";
            element.style.borderRadius = "10px";
            element.style.fontSize = "35px"
            break;
        }
    }
}

document.addEventListener('DOMContentLoaded', gameStyle);