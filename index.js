var randomNumber1 = Math.floor(Math.random() * 5) + 1;
var randomNumber2 = Math.floor(Math.random() * 5) + 1;


var a = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
document.querySelector(".img1").setAttribute("src", a[randomNumber1]);
document.querySelector(".img2").setAttribute("src", a[randomNumber2]);

//var randomImage1 = "/images/dice" + randomNumber1 + ".png";
//var randomImage2 = "/images/dice" + randomNumber2 + ".png";
//document.querySelector(".img1").setAttribute("src", randomImage1);
//document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 == randomNumber2) {

    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";

}