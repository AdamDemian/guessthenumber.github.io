const upperLimit = 100;
const lowerLimit = 0;
const message = 'Guess a number between 0 and 100';
const answer = Math.round(Math.random() * 100);

let guessSubmit = document.querySelector('.submitGuess')
let guess = document.getElementById('guessNumber');
let checkGuess = Number(guess.value);

let errorMessage = document.querySelector('.errorMessage');
let finalGuess = document.querySelector('.finalNumber');

// Keep prompting the user for a guess until the game ends.
while (true) {


    guess = guess;

    // If the guess is a number...
    if (Number.isInteger(guess)) {
        // Make sure the guess is converted into a number.
        guess = +guess;

        // If the guess is less than the range let the user know.
        if (guess < lowerLimit) {
            errorMessage.textContent = 'Your guess should be greater than ' + lowerLimit + '.';
        }
        // If the guess is greater than the range let the user know.
        else if (guess > upperLimit) {
            errorMessage.textContent = 'Your guess should be no greater than ' + upperLimit + '.';
        }
        // If the guess is too high let the user know.
        else if (guess > answer) {
            errorMessage.textContent = 'Your guess is too high.';
        }
        // If the guess is too low let the user know.
        else if (guess < answer) {
            errorMessage.textContent = 'Your guess is too low';
        }
        // If none of the other cases were true that means the answer must have
        // been guessed so let the user know and break out of the loop.
        else {
            finalGuess.textContent = 'Great job, you got it!';
            break;
        }
    }
    // If the guess is not a number, let the user know.
    else {
        errorMessage.textContent = 'You must enter a number as a guess.';
    }

}
