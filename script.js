// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  console.log("You chose: Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  console.log("You chose: Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  console.log("You chose: Scissors ✂️");
});