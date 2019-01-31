
// var Player = function(name, win, lose, draw){
//   Player.name = name;
//   Player.win = win;
//   Player.lose = lose;
//   Player.draw = draw;
// }



initFunc();

function initFunc(){
var win_lose_draw = [0,0,0];
var name = prompt("Please enter player name");
do {
  var resume = true;
  var choice = prompt(name + " please choose (r)ock, (p)aper or (s)cissors");
  switch (choice) {
    case "r":
    win_lose_draw = gameRound(0, win_lose_draw);
    break;
    case "p":
    win_lose_draw = gameRound(1, win_lose_draw);
    break;
    case "s":
    win_lose_draw = gameRound(2, win_lose_draw);
    break;
    default:
    win_lose_draw = alert("Enter a valid option")
  }

  if(win_lose_draw[0] == 5 || win_lose_draw[1] == 5){
    if (win_lose_draw[1] == 5) {
      alert("You won " + name);
    }else {
      alert("You lost " + name);
    }
    resume = false;
  }
alert("Your current score is Wins:"+ win_lose_draw[0] + " Losses: "+ win_lose_draw[1] +" Draws: " + win_lose_draw[2]);
} while (resume == true);
}

//game logic
function gameRound(decision, win_lose_draw){
  var attack = ["rock","paper","scissors"];
  var cpu_choice = Math.floor(Math.random() * 3);
  var player = attack[decision];
  var cpu = attack[cpu_choice];

  if(player == "rock"){
    if (cpu == "scissors") {
      win_lose_draw[0]++;
      winRound();
      return win_lose_draw;
    }
    if (cpu == "paper") {
      win_lose_draw[1]++;
      loseRound();
      return win_lose_draw;
    }
    if (cpu == "rock") {
      win_lose_draw[2]++;
      drawRound();
      return win_lose_draw;
    }
  }

  if(player == "paper"){
    if (cpu == "scissors") {
      win_lose_draw[1]++;
      loseRound();
      return win_lose_draw;
    }
    if (cpu == "paper") {
      win_lose_draw[2]++;
      drawRound();
      return win_lose_draw;
    }
    if (cpu == "rock") {
      win_lose_draw[0]++;
      winRound();
      return win_lose_draw;
    }
  }

  if(player == "scissors"){
    if (cpu == "scissors") {
      win_lose_draw[2]++;
      drawRound();
      return win_lose_draw;
    }
    if (cpu == "paper") {
      win_lose_draw[0]++;
      winRound();
      return win_lose_draw;
    }
    if (cpu == "rock") {
      win_lose_draw[2]++;
      loseRound();
      return win_lose_draw;
    }
  }


}

function winRound(){
  alert("You won the round");
}

function loseRound(){
  alert("You lost the round");
}

function drawRound(){
  alert("You drew the round");
}
