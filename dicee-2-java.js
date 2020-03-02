// JavaScript Document
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dicee" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dicee" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage);

if (randomNumber1 > randomNumber2) {
   document.querySelectorAll("h1")[0].innerHTML = ("Player 1 WINS!!!");
} else if (randomNumber2 > randomNumber1) {
   document.querySelectorAll("h1")[0].innerHTML = ("Player 2 WINS!!!");
} else if (randomNumber2 === randomNumber1){
  document.querySelectorAll("h1")[0].innerHTML = ("Draw Ž");
};
