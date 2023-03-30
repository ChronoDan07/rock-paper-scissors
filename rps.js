
function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let rand = Math.floor(Math.random()*choices.length);
    let chosen = choices[rand];   
    return chosen;
}

function playSound(e){
    const audio = document.querySelector(`audio[data-audio="${e}"]`);
    if (!audio) return;
    // audio.currentTime = 0;
    audio.play();
}


let computerScore = 0;
let playerScore = 0;
let round = 0;
const computerChoice = document.getElementById("comp-choice");
const results = document.getElementById("result");
const rounds = document.getElementById("rnd");
const plscores = document.getElementById("plscore");
const cpscores = document.getElementById("cpscore");
const finals = document.getElementById("final");


//-------------------------------------------------
const elements = document.querySelectorAll('.Rock, .Paper, .Scissors');
let clickedItem;
elements.forEach(element => {
 element.addEventListener('click', function(){
    const clickedItem = this.classList.value;
    console.log(clickedItem);
    playGame(clickedItem);
 })   
});
//-------------------------------------------------
function resetGame(){
    computerChoice.textContent = "----";
    results.textContent = "----";
    finals.textContent = "______________";
    computerScore = 0;
    playerScore = 0;
    round = 0;
    rounds.textContent = "0";
    plscores.textContent = "0";
    cpscores.textContent = "0";
    document.getElementById("final").style.color = "darkgreen";
    document.getElementById("result").style.color = "darkgreen";
}

function checkWinner() {

    if (playerScore === 5 || computerScore === 5) {
        if (computerScore === 5) {
            finals.textContent = "You lose the game!";
            document.getElementById("final").style.color="red";
            playSound('biglose');
        }
        else if (playerScore === 5) {
            finals.textContent = "You win the game!";
            playSound('bigwin');
        }
        return true;
    }
    return false;
}


function playGame(playerSelection){


let computerSelection=getComputerChoice();

if (checkWinner()) {
    return;
}

        if (playerSelection === "Rock" && computerSelection === "Paper"){
            computerScore++;
            computerChoice.textContent = `The computer chose: ${computerSelection}`;
            results.textContent = `${computerSelection} beats ${playerSelection}, you lose!`;
            document.getElementById("result").style.color = "red";
            round++;
            rounds.textContent = round;
            // playSound('lose');
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            playerScore++;
            computerChoice.textContent =`The computer chose: ${computerSelection}`;
            results.textContent =`${playerSelection} beats ${computerSelection}, you win!`;
            document.getElementById("result").style.color="darkgreen";
            round++;
            rounds.textContent = round;
            // playSound('rwin');
        }

        else if (playerSelection === "Paper" && computerSelection === "Scissors"){
            computerScore++;
            computerChoice.textContent =`The computer chose: ${computerSelection}`;
            results.textContent =`${computerSelection} beats ${playerSelection}, you lose!`;
            document.getElementById("result").style.color="red";
            round++;
            rounds.textContent = round;
            // playSound('lose');
        }

        else if (playerSelection === "Paper" && computerSelection === "Rock"){
            playerScore++;
            computerChoice.textContent =`The computer chose: ${computerSelection}`;
            results.textContent =`${playerSelection} beats ${computerSelection}, you win!`;
            document.getElementById("result").style.color="darkgreen";
            round++;
            rounds.textContent = round;
            // playSound('pwin');
        }

        else if (playerSelection === "Scissors" && computerSelection === "Rock"){
            computerScore++;
            computerChoice.textContent =`The computer chose: ${computerSelection}`;
            results.textContent =`${computerSelection} beats ${playerSelection}, you lose!`;
            document.getElementById("result").style.color="red";
            round++;
            rounds.textContent = round;
            // playSound('lose');
        }

        else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            playerScore++;
            computerChoice.textContent =`The computer chose: ${computerSelection}`;
            results.textContent =`${playerSelection} beats ${computerSelection}, you win!`;
            document.getElementById("result").style.color="darkgreen";
            round++;
            rounds.textContent = round;
            // playSound('swin');
        }

        else if (playerSelection === computerSelection){
            computerChoice.textContent =`The computer chose: ${computerSelection}`;
            results.textContent = `It's a draw!`;
            document.getElementById("result").style.color="gray";
            round++;
            rounds.textContent = round;
            // playSound('draw');
        }
    plscores.textContent = playerScore;
    cpscores.textContent = computerScore;
    checkWinner();
}



