
function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let rand = Math.floor(Math.random()*choices.length);
    let chosen = choices[rand];   
    return chosen;
}

function insensitive(){
    const sen = document.getElementById("shape").value;
    const ssen = sen.toLowerCase();
    const insen = ssen[0].toUpperCase() + ssen.substring(1);
    return insen;
}
let computerScore=0;
let playerScore=0;
let round = 0;

function resetGame(){
    document.getElementById("comp-choice").innerHTML = "----";
    document.getElementById("result").innerHTML ="----";
    document.getElementById("final").innerHTML = "______________";
    computerScore=0;
    playerScore=0;
    round=0;
    document.getElementById("rnd").innerHTML ="0";
    document.getElementById("plscore").innerHTML ="0";
    document.getElementById("cpscore").innerHTML ="0";
    document.getElementById("final").style.color="darkgreen";
    document.getElementById("result").style.color="darkgreen";

}

function playRound(){
let playerSelection=insensitive();
let computerSelection=getComputerChoice();

        if (playerSelection=="Rock" && computerSelection=="Paper"){
            computerScore++;
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML =`${computerSelection} beats ${playerSelection}, you lose!`;
            document.getElementById("result").style.color="red";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }
        else if (playerSelection=="Rock" && computerSelection=="Scissors"){
            playerScore++;
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML =`${playerSelection} beats ${computerSelection}, you win!`;
            document.getElementById("result").style.color="darkgreen";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }

        else if (playerSelection=="Paper" && computerSelection=="Scissors"){
            computerScore++;
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML =`${computerSelection} beats ${playerSelection}, you lose!`;
            document.getElementById("result").style.color="red";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }

        else if (playerSelection=="Paper" && computerSelection=="Rock"){
            playerScore++;
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML =`${playerSelection} beats ${computerSelection}, you win!`;
            document.getElementById("result").style.color="darkgreen";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }

        else if (playerSelection=="Scissors" && computerSelection=="Rock"){
            computerScore++;
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML =`${computerSelection} beats ${playerSelection}, you lose!`;
            document.getElementById("result").style.color="red";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }

        else if (playerSelection=="Scissors" && computerSelection=="Paper"){
            playerScore++;
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML =`${playerSelection} beats ${computerSelection}, you win!`;
            document.getElementById("result").style.color="darkgreen";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }

        else if (playerSelection === computerSelection){
            document.getElementById("comp-choice").innerHTML =`The computer chose: ${computerSelection}`;
            document.getElementById("result").innerHTML = `It's a draw!`;
            document.getElementById("result").style.color="gray";
            round++;
            document.getElementById("rnd").innerHTML = round;
        }
    document.getElementById("plscore").innerHTML = playerScore;
    document.getElementById("cpscore").innerHTML = computerScore;

    if (playerScore == 5 || computerScore == 5) {
            if (computerScore == 5) {
                document.getElementById("final").innerHTML = "You lose the game!";
                document.getElementById("final").style.color="red";
            }
            else if (playerScore == 5) {
                document.getElementById("final").innerHTML = "You win the game!";
            }
    }
}



