const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "STEEN";
        break;
      case 2:
        computer = "PAPIER";
        break;
      case 3:
        computer = "SCHAAR";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "GELIJK!";
    }
    else if(computer == "STEEN"){
      return (player == "PAPIER") ? "JIJ WINT!" : "JIJ VERLIEST!"
    }
    else if(computer == "PAPIER"){
      return (player == "SCHAAR") ? "JIJ WINT!" : "JIJ VERLIEST!"
    }
    else if(computer == "SCHAAR"){
      return (player == "STEEN") ? "JIJ WINT!" : "JIJ VERLIEST!"
    }
}