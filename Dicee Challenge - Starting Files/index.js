
var random1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + random1 + ".png";

var randomImag1 = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImag1);
//for dice 2 
var random2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
document.addEventListener('DOMContentLoaded', function () {
    addConfetti(); // Automatically add confetti on page load
  });
  