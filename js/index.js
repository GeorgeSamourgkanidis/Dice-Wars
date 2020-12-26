var randomNumber1;
var randomNumber2;
randomNumber1 = Math.random() * 5 + 1 ;
randomNumber1 = Math.round(randomNumber1);
randomNumber2 = Math.random() * 5 + 1 ;
randomNumber2 = Math.round(randomNumber2);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
var won;
if(randomNumber1>randomNumber2){
  won=1;
  document.querySelector("h1").innerHTML = "Player 1 is the winner";
}
else if (randomNumber1===randomNumber2) {
  won=0
  document.querySelector("h1").innerHTML = "It's a draw";
}
else{
  won=2
  document.querySelector("h1").innerHTML = "Player 2 is the winner";
}
