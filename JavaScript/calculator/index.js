const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value === 'Infinity' || display.value === '-Infinity') {
            throw new Error('Division by zero');
        }
    } catch (error) {
        display.value = 'Error';
    }
}
