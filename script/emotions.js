const NORMAL_EMOTION = "../images/normal.png";
const LOOSE_EMOTION = "../images/lose.png";
const WIN_EMOTION = "../images/win.png";

function changeEmotion(index) {
    const emotions = document.getElementById("emotions");

    switch(index) {
        case -1: emotions.src = LOOSE_EMOTION; break;
        case 0: emotions.src = NORMAL_EMOTION; break;
        case 1: emotions.src = WIN_EMOTION; break;
    }
}
