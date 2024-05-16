const displayBox = document.getElementById('display-box');
let input = '';
let result = 0;

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent;
            handleButtonPress(buttonText);
        });
    });
});

function handleButtonPress(buttonText) {
    switch (buttonText) {
        case '=':
            calculateResult();
            break;
        case 'Reset':
            resetCalculator();
            break;
        case 'DEL':
            deleteLastInput();
            break;
        default:
            input += buttonText;
            displayBox.textContent = input;
    }
}

function calculateResult() {
    if (input.includes('=')) return;
    try {
        result = eval(input);
        result = roundResult(result);
        displayBox.textContent = result;
        input = result;
    } catch (e) {
        displayBox.textContent = 'Error';
    }
}

function roundResult(result) {
    return Math.round(result * 1000) / 1000;
}

function resetCalculator() {
    input = '';
    result = 0;
    displayBox.textContent = '0';
}

function deleteLastInput() {
    input = input.slice(0, -1);
    displayBox.textContent = input;
}