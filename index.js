function thrownDice1 () {


  var randomNumber1 = Math.random();
      randomNumber1 = (randomNumber1 * 6) +1;
      randomNumber1 = Math.floor(randomNumber1);
      console.log(randomNumber1);




  if(randomNumber1 === 1) {
    document.querySelector("img").setAttribute("src",  "./dice1.png");
  }
  else if (randomNumber1 === 2) {
    document.querySelector("img").setAttribute("src",  "./dice2.png");
  }
  else if (randomNumber1 === 3) {
    document.querySelector("img").setAttribute("src",  "./dice3.png");
  }
  else if (randomNumber1 === 4) {
    document.querySelector("img").setAttribute("src",  "./dice4.png");
  }
  else if (randomNumber1 === 5) {
    document.querySelector("img").setAttribute("src",  "./dice5.png");
  }
  else {
    document.querySelector("img").setAttribute("src",  "./dice6.png");
  }
  return randomNumber1;
}



thrownDice1();




function thrownDice2 () {


  var randomNumber2 = Math.random();
      randomNumber2 = (randomNumber2 * 6) +1;
      randomNumber2 = Math.floor(randomNumber2);
      console.log(randomNumber2);




  if(randomNumber2 === 1) {
    document.querySelectorAll("img")[1].setAttribute("src",  "./dice1.png");
  }
  else if (randomNumber2 === 2) {
    document.querySelectorAll("img")[1].setAttribute("src",  "./dice2.png");
  }
  else if (randomNumber2 === 3) {
    document.querySelectorAll("img")[1].setAttribute("src",  "./dice3.png");
  }
  else if (randomNumber2 === 4) {
    document.querySelectorAll("img")[1].setAttribute("src",  "./dice4.png");
  }
  else if (randomNumber2 === 5) {
    document.querySelectorAll("img")[1].setAttribute("src",  "./dice5.png");
  }
  else {
    document.querySelectorAll("img")[1].setAttribute("src",  "./dice6.png");
  }
  return randomNumber2;
}



thrownDice2();


function winner()  {

  var dice1 = thrownDice1();
  var dice2 = thrownDice2();

  if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = " Player 2 wins";
  }
  else if (dice1 > dice2)  {
      document.querySelector("h1").innerHTML = " Player 1 wins!";
  }
  else {
      document.querySelector("h1").innerHTML = " Draw ";
  }

}

winner();
