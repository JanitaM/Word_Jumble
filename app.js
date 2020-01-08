state = {
  currentWord: "",
  jumbledWord: "",
  usedWords: [],  //don't repeat these used words
  userGuess: ""
}

// Array of words
let words = ["yass", "woke", "salty", "slay", "shade", "snatched", "basic", "extra", "ghost", "receipts", "shook", "fit"];

// Variables
let
  startBtn = document.getElementById("start"),
  submitBtn = document.getElementById("submit"),
  idkBtn = document.getElementById("idk"),
  jumbleDisplay = document.getElementById("jumble-display"),
  userDisplay = document.getElementById("user-display"),
  feedbackDisplay = document.getElementById("feedback");

// Functions
// Jumble function - removes a random word from the array, calls the shuffles function, and displays the shuffled word
const jumble = () => {
  let index = Math.floor(Math.random() * words.length);  //pick a random index
  state.usedWords = words.splice(index, 1); //remove word at random index (splice returns an array)
  state.currentWord = state.usedWords.shift();  //remove the first word in the array
  state.jumbledWord = shuffelWord(state.currentWord);  //call the shuffle function
  jumbleDisplay.innerHTML = state.jumbledWord; //change this to display shuffled version which is in state.jumbledWord

  if (words.length === 0) {  //if there are no words left
    jumbleDisplay.innerHTML = "";  //clear the display
    feedbackDisplay.innerHTML = `Game over!`;  //show this msg
    submitBtn.style.display = "none";
    idkBtn.style.display = "none";
  }
}

// Shuffle the letters
const shuffelWord = (word) => {
  let temp = "";  //empty variable to save the shuffled word
  word = word.split('');  //save the letters in an array
  while (word.length > 0) {
    //not sure what "<<"" does but randomly save the letters in the temp variable
    temp += word.splice(word.length * Math.random() << 0, 1);
  }
  return temp;  //returns temp to the jumble function and saves it to state.jumbledWord
}

// Start the game
const start = () => {
  startBtn.style.display = "none";  //hide the start button
  // show the submit and idk button
  submitBtn.style.display = "inline-block";
  idkBtn.style.display = "inline-block";
  jumble(); //shuffled the word and display it
}

// Submit function
const submit = () => {
  userDisplay.innerHTML = userDisplay.value;  //get user's answer
  state.userGuess = userDisplay.value.toLowerCase();  //convert to lowercase and save
  if (state.userGuess === state.currentWord) {  //if they match
    feedbackDisplay.innerHTML = `That's it! Try this one`;  //show this msg

    //set a timer on how long the feedback displays
    setTimeout(function () {
      feedbackDisplay.innerHTML = ""; //remove the feedback msg
      jumble();  //show new word
    }, 1500);

    userDisplay.value = "";  //clear the display
    status.userGuess = "";  //clear the guess
  } else if (state.userGuess !== state.currentWord) {  //if they do not match
    feedbackDisplay.innerHTML = `Nope. Try again.`;  //show this msg
    userDisplay.value = "";  //clear the display
    //leave feedbak up
  }
}

// Clicking the "OK, IDK" button returns the answer which is in state.currentWord. It returns the answer to the hidden feedback div.
const idk = () => {
  feedbackDisplay.innerHTML = `It was: ${state.currentWord}.`
  setTimeout(function () {
    feedbackDisplay.innerHTML = ""; //remove the feedback msg
    jumble();  //show new word
  }, 1500);
}

// Event Listeners
startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", submit);
idkBtn.addEventListener("click", idk);



/*
function shuffelWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}
*/

/*
const shuffelWord = () => {
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}


*/