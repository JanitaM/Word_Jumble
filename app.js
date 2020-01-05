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
// Jumble function - shuffles the array and word
const jumble = () => {
  //shuffle the current words array

  // //take the first word off the array, convert it to lower case
  state.currentWord = words.shift().toLowerCase();

  // shuffle the letters around and save to state.jumbleWord

  jumbleDisplay.innerHTML = state.currentWord; //this will display shuffled version
}

// Start the game
const start = () => {
  startBtn.style.display = "none";  // Hide the start button
  // Show the submit and idk button
  submitBtn.style.display = "inline-block";
  idkBtn.style.display = "inline-block";
  jumble(); // Display the first word by calling the jumble function
}

// Submit function
const submit = () => {
  userDisplay.innerHTML = userDisplay.value;  //get user's answer
  state.userGuess = userDisplay.value.toLowerCase();  //convert to lowercase and save

  if (state.userGuess === state.currentWord) {  //if they match
    feedbackDisplay.innerHTML = `That's it!`;  //show this msg - need to figure out how to pause here then clear.. or I can say "That's it. Try another one." but ideally, I want to clear after 3 seconds
    jumble();  //then call the new word
    userDisplay.value = "";  //clear the display
    status.userGuess = "";  //clear the guess
  } else if (state.userGuess !== state.currentWord) {  //if they do not match
    feedbackDisplay.innerHTML = `Nope. Try again.`;  //show this msg
  }

  console.log(state.currentWord, state.userGuess)
}

// Clicking the "OK, IDK" button returns the answer which is in state.currentWord. It returns the answer to the hidden feedback div.
const idk = () => feedbackDisplay.innerHTML = `It was: ${state.currentWord}`;

// Event Listeners
startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", submit);
idkBtn.addEventListener("click", idk);
