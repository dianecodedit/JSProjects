const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("userscore");
const computerScore_span = document.getElementById("compuscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userChoice

function game(userChoice) {
  console.log("hello " + userChoice)
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
// let comp = Math.floor(Math.random() *3) + 1;
//
// if (comp === userChoice) {
//   console.log("draw");
// } else if (comp == 1 && userChoice == 2) {
//   console.log("User Wins. Paper beats rock")
// } else if (comp == 1 && userChoice == 3) {
//   console.log("User Wins. Scissors beats Paper")
// } else if (comp == 2 && userChoice == 1) {
//   console.log("User Wins. Scissors beats Paper")
