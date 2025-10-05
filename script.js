let Letters = "abcdefghijklmnopqrstuvwxyz0123456789";
let LettersContainer = Array.from(Letters);
let alphabet = document.querySelector(".alphabet");
// console.log(LettersContainer);
LettersContainer.forEach((letter) => {
  let SPAN = document.createElement("span");
  SPAN.innerHTML = letter;
  SPAN.className = "letter-box";
  alphabet.appendChild(SPAN);
});

const words = {
  animals: [
    "cat",
    "dog",
    "lion",
    "tiger",
    "elephant",
    "giraffe",
    "monkey",
    "zebra",
    "kangaroo",
    "dolphin",
  ],
  countries: [
    "egypt",
    "france",
    "brazil",
    "germany",
    "canada",
    "japan",
    "spain",
    "italy",
    "england",
    "mexico",
  ],
  food: [
    "pizza",
    "burger",
    "pasta",
    "sandwich",
    "cheese",
    "chocolate",
    "banana",
    "strawberry",
    "carrot",
    "chicken",
  ],
  objects: [
    "phone",
    "laptop",
    "computer",
    "keyboard",
    "mouse",
    "chair",
    "table",
    "window",
    "bottle",
    "camera",
  ],
  movies: [
    "avatar",
    "matrix",
    "titanic",
    "inception",
    "gladiator",
    "joker",
    "frozen",
    "aladdin",
    "spiderman",
    "batman",
  ],
  series: ["Squid game", "Alice In Borderland", "The 100"],
};

let keys = Object.keys(words);
let randomKey = keys[Math.floor(Math.random() * keys.length)];
document.getElementById("word-source").innerHTML =
  randomKey.charAt(0).toUpperCase() + randomKey.slice(1);

let randomValue =
  words[randomKey][Math.floor(Math.random() * words[randomKey].length)];

//   console.log(randomValue);

let WordsArr = Array.from(randomValue);
// console.log(WordsArr);
let wordContainer = document.querySelector(".words-container");
WordsArr.forEach((letter, index) => {
  let span = document.createElement("span");
  span.id = `number-${index}`;
  if (letter === " ") {
    span.className = "empty-letter";
  }
  wordContainer.appendChild(span);
});

let wrongAnswers = 1;
let CorrectAnswers = 2;
let theLength = randomValue.replaceAll(" ", "").length;

document.getElementById(`number-${0}`).innerHTML = randomValue[0].toUpperCase();

alphabet.addEventListener("click", (e) => {
  if (wrongAnswers >= 9 || CorrectAnswers >= theLength) {
    endGame();
    alphabet.classList.add("finished");
  }
  console.log(CorrectAnswers, theLength);
  if (
    e.target.classList.contains("letter-box") &&
    !e.target.classList.contains("clicked")
  ) {
    let Correct = false;

    for (let i = 1; i < randomValue.length; i++) {
      if (e.target.innerHTML.toLowerCase() == randomValue[i].toLowerCase()) {
        document.getElementById(`number-${i}`).innerHTML =
          randomValue[i].toUpperCase();
        Correct = true;
        CorrectAnswers++;
      }
    }

    if (Correct) {
      let success = document.getElementById("success");
      success.currentTime = 0;
      success.play();
      e.target.classList.add("success");
    } else {
      let failed = document.getElementById("fail");
      failed.currentTime = 0;
      failed.play();
      e.target.classList.add("failed");
      let draw = document.querySelector(".draw");
      draw.classList.add(`error-${wrongAnswers}`);
      wrongAnswers++;
    }

    e.target.classList.add("clicked");
  }
});

function endGame() {
  if (CorrectAnswers == theLength) {
    Swal.fire({
      title: "You Got it!",
      icon: "success",
      footer: '<a href="index.html">Play Again?</a>',
      draggable: true,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Sorry You Lost The Answer is ${randomValue}!`,
      footer: '<a href="index.html">Play Again?</a>',
    });
  }
}
/* the problem in the last element if we got all elements true and the last is wrong
   you wil also win and also the opposite
   if you got the 7 tries wrong and you got the last try correct
   you will lose also
 */
