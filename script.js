// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get the result area from the HTML
const resultDiv = document.getElementById("result");

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

// This function runs when a player clicks a button
function playRound(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Show both choices using a template literal
  resultDiv.textContent = `You chose: ${playerChoice}. Computer chose: ${computerChoice}.`;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playRound("Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playRound("Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors ✂️");
});