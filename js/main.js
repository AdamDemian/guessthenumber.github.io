const upperLimit = 100;
const lowerLimit = 0;
const answer = [Math.floor(Math.random() * 100)];

let submit = document.querySelector('.submitGuess')

let errorMessage = document.querySelector('.errorMessage');
let finalGuess = document.querySelector('.finalNumber');


submit.addEventListener('click', function () {
    let input = document.getElementById('guessNumber').value;

    if (parseInt(input)) {
        // Make sure the guess is converted into a number.
        input = +input;

        if (input == answer) {
            finalGuess.textContent = `You guessed right, the number was ${answer}`;
        }

        // If the guess is less than the range let the user know.
        else if (input < lowerLimit) {
            errorMessage.textContent = `Your guess should be greater than ` + lowerLimit + `.`;
        }
        // If the guess is greater than the range let the user know.
        else if (input > upperLimit) {
            errorMessage.textContent = `Your guess should be no greater than ` + upperLimit + `.`;
        }
        // If the guess is too high let the user know.
        else if (input > answer) {
            errorMessage.textContent = `Your guess is too high.`;
        }
        // If the guess is too low let the user know.
        else if (input < answer) {
            errorMessage.textContent = `Your guess is too low`;
        }
    }
    else {
        errorMessage.textContent = `Your guess must be a number`
    }
});


