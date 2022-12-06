// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
var die1Image = new Image();
var die2Image = new Image();

numRolls = prompt("How many rounds would you like to play?")

function rollDice() {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  dieSum = die1 + die2;

  // set the dice images based on the roll
  die1Image = document.querySelectorAll("img")[0];
  die1Name = "./imagesLab5/dice" + die1 + ".png";
  die1Image.setAttribute("src", die1Name);

  die2Image = document.querySelectorAll("img")[1];
  die2Name = "./imagesLab5/dice" + die2 + ".png";
  die2Image.setAttribute("src", die2Name);
}

function whoWon() {
  // in h3 report how much money was won or lost and the balance
  // Report the outcome:
  banner = die1 + " + " + die2 + " is: " + dieSum;
  document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
  alert("Your total balance is " + balance + ", Refresh to play again.")
  document.getElementById("balance").innerHTML = "Earnings: " + "$" + balance;
  document.querySelector(".mybtn").innerHTML = "Let's play again!";
}
function letsPlay() {
  balance = 0;
  for (i = 0; i < parseInt(numRolls); i++) {
    rollDice();
    if (dieSum <= 5) {
      outcome = "You lose, please pay me 5 dollars.";
      balance -= 5;
    } else if (dieSum >= 9) {
      outcome = "You win, I pay you 5 dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }
  }
  whoWon();
}
