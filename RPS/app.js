let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userscore");
const computerScore_span = document.getElementById("compscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const comp = Math.floor(Math.random() *3);
  return choices[comp];
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
}

function lose() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;

}

function draw() {
  console.log("draw");
}


function game(userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "rp":
    case "sr":
    case "ps":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
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
