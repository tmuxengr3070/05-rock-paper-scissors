// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// This function picks a random move for the computer
function getComputerChoice() {
  // Get a random number between 0 and 1
  const randomNumber = Math.random();

  // If the number is less than 0.33, return "Rock"
  if (randomNumber < 0.33) {
    return "Rock";
  }
  // If the number is less than 0.66, return "Paper"
  if (randomNumber < 0.66) {
    return "Paper";
  }
  // Otherwise, return "Scissors"
  return "Scissors";
}

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