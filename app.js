state = {
  currentWord: "",
  jumbledWord: "",
  usedWords: []  //don't repeat these used words
}

// Array of words
let words = ["yass", "woke", "salty", "slay", "shade", "snatched", "basic", "extra", "ghost", "receipts", "shook", "fit"];

// Variables
let
  startBtn = document.getElementById("start"),
  submitBtn = document.getElementById("submit"),
  idkBtn = document.getElementById("idk"),
  jumbleDisplay = document.getElementById("jumble-display"),
  userDisplay = document.getElementById("jumble-display"),
  feedbackDisplay = document.getElementById("feedback");

// Functions
// Start the game
const start = () => {
  // Hide the start button
  startBtn.style.display = "none";
  // Show the submit and idk button
  submitBtn.style.display = "inline-block";
  idkBtn.style.display = "inline-block";
  // Display the first word - but right now, i need to click on submitBtn to get the first word

}

// Clicking the "submit" 
const jumble = () => {
  //shuffle the current words array

  // //take the first word off the array, convert it to lower case
  state.currentWord = words.shift().toLowerCase();

  // shuffle the letters around and save to state.jumbleWord

  // display it
  jumbleDisplay.innerHTML = state.currentWord; //display shuffled version
}

// Clicking the "OK, IDK" button returns the answer which is in state.currentWord. It returns the answer to the hidden feedback div.
const idk = () => feedbackDisplay.innerHTML = `It was: ${state.currentWord}`;


startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", jumble);
idkBtn.addEventListener("click", idk);
