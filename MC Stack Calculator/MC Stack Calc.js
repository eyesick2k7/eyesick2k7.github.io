// Function to calculate the number of stacks and blocks
function howManyStacks(int) {
    let num = parseInt(int, 10);
    let fullStacks = Math.floor(num / 64);
    let leftOver = num % 64;

    let result = `${fullStacks} Stack${fullStacks !== 1 ? 's' : ''}`;
    if (leftOver != 0) result += ` & ${leftOver} Block${leftOver !== 1 ? 's' : ''}`;
    
    return result;
}

// Function to update the output section with the new result
function updateOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML = `<p>${message}</p>`;
}

// Function to handle user input
function handleUserInput(event) {
    const inputField = document.getElementById('userInput');
    const userInput = inputField.value.trim();

    if (event.key === 'Enter') {
        if (isNaN(userInput) || userInput === '') {
            updateOutput('Please enter a valid number.');
        } else {
            updateOutput(howManyStacks(userInput));
        }

        inputField.value = '';  // Clear the input field after submission
    }
}

// Attach the event listener to handle Enter key press
const inputField = document.getElementById('userInput');
inputField.addEventListener('keypress', handleUserInput);