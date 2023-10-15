const difficult = getDifficult();

function getDifficult() {
    // Извлекаем значение из параметров URL
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');

    return value;
}
