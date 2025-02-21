// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playGame("Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playGame("Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playGame("Scissors ✂️");
});

// Function to get a random choice for the computer
function getComputerChoice() {
  // Create an array with the choices
  const choices = ["Rock 🪨", "Paper 📄", "Scissors ✂️"];
  // Get a random index from 0 to 2
  const randomIndex = Math.floor(Math.random() * 3);
  // Return the choice at the random index
  return choices[randomIndex];
}

// Function to play the game
function playGame(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();
  // Get the result div from the HTML
  const resultDiv = document.getElementById("result");
  
  // Determine the winner
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock 🪨" && computerChoice === "Scissors ✂️") ||
    (playerChoice === "Paper 📄" && computerChoice === "Rock 🪨") ||
    (playerChoice === "Scissors ✂️" && computerChoice === "Paper 📄")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  
  // Display the player's and computer's choices and the result
  resultDiv.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${result}`;
}