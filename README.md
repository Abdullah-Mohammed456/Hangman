# Hangman

A browser-based Hangman game made with HTML, CSS, and vanilla JavaScript.

## How to play

1. Open the game and check the displayed word category.
2. Select letters from the alphabet.
3. Reveal the word before the hangman drawing is complete.

Words are selected from animal, country, food, object, movie, and series categories. Correct and incorrect guesses use local sound effects.

## Run

Open `index.html` in a modern web browser. The sound files are stored in the repository. Google Fonts and the win/loss dialog library are loaded from external CDNs, so those assets require an internet connection.

## Files

- `index.html` — game page
- `style.css` — game layout and drawing
- `script.js` — word selection and game logic
- `success-1-6297.mp3`, `fail-234710.mp3` — guess sound effects
