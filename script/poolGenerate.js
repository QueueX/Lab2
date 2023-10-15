function generate(x, y, difficult) {
    const poolContainer = document.querySelector('.pool');
    if (!poolContainer) {
        console.error('Контейнер .pool не найден.');
        return;
    }

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            const button = document.createElement('button');
            button.classList.add('cell');
            const id = `${i.toString().padStart(2, '0')}${j.toString().padStart(2, '0')}`;
            button.id = id;
            button.onclick = function () {
                clickCell(id);
            };

            buttonStyles(button, difficult);

            poolContainer.appendChild(button);
        }
    }
}

function removeAllButtons() {
    const poolContainer = document.querySelector('.pool');

    if (poolContainer) {
        while (poolContainer.firstChild) {
            poolContainer.removeChild(poolContainer.firstChild);
        }
    }
}

function reGenerate() {
    removeAllButtons();
    poolGenerate();
}

function poolGenerate() {

    switch (difficult) {
        case '1': generate(9, 9, difficult); return;
        case '2': generate(16, 16, difficult); return;
        case '3': generate(16, 30, difficult); return;
        default: alert("Ошибка генерации! Перевожу на главную страницу...");
        window.location.href = '../index.html'; return;
    }
}
