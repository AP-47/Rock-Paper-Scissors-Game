var element = ['rock','paper','scissors'];
var randomElement1 = element[Math.floor(Math.random() * element.length)];
var randomImageSrc1 = "images/" + randomElement1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

var randomElement2 = element[Math.floor(Math.random() * element.length)];
var randomImageSrc2 = "images/" + randomElement2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


checkWinner(randomElement1, randomElement2);



function checkWinner(randomElement1, randomElement2){
  if (randomElement1 === randomElement2){
    return document.querySelector("h2").innerHTML = "TIE";
  }

  if (randomElement1 === 'rock'){
      if(randomElement2 === 'paper'){
        return document.querySelector("h2").innerHTML = "Player 2 Wins";
      } else {
        return document.querySelector("h2").innerHTML = "Player 1 Wins";
      }
  }

  if (randomElement1 === 'paper'){
      if (randomElement2 === 'scissors'){
        return document.querySelector("h2").innerHTML = "Player 2 Wins";
      } else {
        return document.querySelector("h2").innerHTML = "Player 1 Wins";
      }
  }

  if (randomElement1 === 'scissors'){
      if (randomElement2 === 'rock'){
        return document.querySelector("h2").innerHTML = "Player 2 Wins";
      } else {
        return document.querySelector("h2").innerHTML = "Player 1 Wins";
      }
  }
}

