const display = document.getElementById("display");
let didCalc = false;

function appendToDisplay(input) {
    const operators = ['*', '/', '+', '-'];
    const lastChar = display.value.charAt(display.value.length - 1);

    if(operators.includes(input) && (operators.includes(lastChar))) {
        display.value = display.value.slice(0, -1);
        display.value += input;
    } else if(didCalc && !operators.includes(lastChar) && !operators.includes(input)) {
        display.value = '';
        display.value += input;
    } else display.value += input;
    didCalc = false;
}

function clearDisplay() {
    display.value = '';
    if(didCalc) didCalc = false;
}

function clearCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {display.value = eval(display.value);}
    catch(error) {
        display.value = 'Error';
    }
    finally {
        didCalc = true;
    }
}