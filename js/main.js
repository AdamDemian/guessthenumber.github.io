const upperLimit = 100;
const lowerLimit = 0;
const answer = Math.floor(Math.random() * 100);

const submit = document.querySelector('.submitGuess');
const reset = document.querySelector('.reset');

let message = document.querySelector('.errorMessage');
// Reload function.
function reload() {
    window.location.reload();
}
// Function to make reload button works.
reset.addEventListener('click', function () {
    reload();
    message.textContent = `Your number was changed`;
})
// Function to make submit button works.
submit.addEventListener('click', function () {
    // This gets the value of the input.
    let input = document.getElementById('guessNumber').value;

    if (parseInt(input)) {
        // Make sure the guess is converted into a number.
        input = +input;
        // If input is equal to answer you win the game.
        if (input == answer) {
            message.textContent = `You guessed right, the number was ${answer}`;
        }

        // If the guess is less than the range let the user know.
        else if (input < lowerLimit) {
            message.textContent = `Your guess should be greater than ` + lowerLimit + `.`;
        }
        // If the guess is greater than the range let the user know.
        else if (input > upperLimit) {
            message.textContent = `Your guess should be no greater than ` + upperLimit + `.`;
        }
        // If the guess is too high let the user know.
        else if (input > answer) {
            message.textContent = `Your guess is too high.`;
        }
        // If the guess is too low let the user know.
        else if (input < answer) {
            message.textContent = `Your guess is too low`;
        }
    }
    // If input isn't a number let the user know.
    else {
        message.textContent = `Your guess must be a number`
    }
});


