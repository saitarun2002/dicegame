var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceimage = "images/" +  "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceimage);

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomimagesource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 winnn bhaiiii";
}else if(randomNumber2> randomNumber1){
  document.querySelector("h1").innerHTML = "player 2 winn bhaiii";
}
else{
  document.querySelector("h1").innerHTML = " its a draw bhai";
}
