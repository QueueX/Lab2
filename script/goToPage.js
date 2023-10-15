function backToPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');

    switch(value) {
        case '1': window.location.href = 'start.html?value=1'; return;
        case '2': window.location.href = 'start.html?value=2'; return;
        case '3': window.location.href = 'start.html?value=3'; return;
        case '0': window.location.href = '../index.html'; return;
        default: 
        alert("Ошибка перехода на страницу! Перевожу на главную страницу...");
        window.location.href = '../index.html'; return;
    }
}

function startGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');

    switch(value) {
        case '1': window.location.href = 'game.html?value=1'; return;
        case '2': window.location.href = 'game.html?value=2'; return;
        case '3': window.location.href = 'game.html?value=3'; return;
        case '0': window.location.href = '../index.html'; return;
        default: 
        alert("Ошибка перехода на страницу! Перевожу на главную страницу...");
        window.location.href = '../index.html'; return;
    }
}