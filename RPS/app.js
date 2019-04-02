let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userscore");
const computerScore_span = document.getElementById("compscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "(user)".fontsize(3).sub();
const smallCompWord = "(comp)".fontsize(3).sub();

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const comp = Math.floor(Math.random() *3);
  return choices[comp];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  if (letter === "p") return "Paper";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!`

}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} draws with ${convertToWord(userChoice)}${smallUserWord}. It's a draw!!`
}


function game(userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r")
  })
  paper_div.addEventListener("click", function() {
    game("p")
  })
  scissors_div.addEventListener("click", function() {
    game("s")
  })
}

main();
//
// if (comp === userChoice) {
//   console.log("draw");
// } else if (comp == 1 && userChoice == 2) {
//   console.log("User Wins. Paper beats rock")
// } else if (comp == 1 && userChoice == 3) {
//   console.log("User Wins. Scissors beats Paper")
// } else if (comp == 2 && userChoice == 1) {
//   console.log("User Wins. Scissors beats Paper")
