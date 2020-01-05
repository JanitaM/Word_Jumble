state = {
  currentWord: "",  //testing
  jumbledWord: "",
  usedWords: []  //don't repeat these used words
}

// Array of words
let words = ["yass", "woke", "salty", "slay", "shade", "snatched", "basic", "extra", "ghost", "receipts", "shook", "fit"]

// Variables
let submitBtn = document.getElementById("submit"),
  idkBtn = document.getElementById("idk"),
  jumbleDisplay = document.getElementById("jumble-display"),
  userDisplay = document.getElementById("jumble-display"),
  feedbackDisplay = document.getElementById("feedback");

// Functions
const jumble = () => {
  state.currentWord = words.shift().toLowerCase(); //take the first word off the array, convert it to lower case - I need to shuffle the array first


  jumbleDisplay.innerHTML = state.currentWord; //display shuffled version
}

// Clicking the "OK, IDK" button returns the answer which is in state.currentWord. It returns the answer to the hidden feedback div.
const idk = () => feedbackDisplay.innerHTML = `It was: ${state.currentWord}`;

submitBtn.addEventListener("click", jumble);
idkBtn.addEventListener("click", idk);
