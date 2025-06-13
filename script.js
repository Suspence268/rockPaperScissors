let userScore = 0;
let computerScore = 0;

const buttonContainer= document.querySelector('#buttonContainer');
const resultsText = document.querySelector('#results');
const scoreText = document.querySelector("#score");
updateScore();

function getComputerChoice(){
    let rNum =  Math.floor(Math.random()*3);
    switch(rNum){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

buttonContainer.addEventListener('click', (e) => {
    switch(e.target.id){
        case 'rock': playRound("rock");
            break;
        case 'paper': playRound("paper");
            break;
        case 'scissors': playRound("scissors");
            break;
        default: console.log("invalid");
    }

    if(userScore === 5){
        const winText = document.createTextNode("You won the whole game!");
        const br = document.createElement("br");
        resultsText.appendChild(br);
        resultsText.appendChild(winText)
        reset();
    } else if(computerScore === 5){
        const winText = document.createTextNode("Computer won the whole game!");
        const br = document.createElement("br");
        resultsText.appendChild(br);
        resultsText.appendChild(winText)
        reset();
    }
});

function reset(){
    userScore = 0;
    computerScore = 0;
}

function updateScore(){
    scoreText.textContent = `User: ${userScore} - Computer: ${computerScore}`;
}

function updateResults(str){
    resultsText.textContent = str;
}

function playRound(userChoice){
    let computerChoice = getComputerChoice();

    if(userChoice === "rock"){
        if(computerChoice === "scissors"){
            updateResults("Computer chose scissors, you win!");
            userScore++;
        }else if(computerChoice === "paper"){
            updateResults("Computer chose paper, you lose!");
            computerScore++;
        }else{
            updateResults("Computer chose rock, tie!");
        }
    }else if(userChoice === "paper"){
        if(computerChoice === "rock"){
            updateResults("Computer chose rock, you win!");
            userScore++;
        }else if(computerChoice === "scissors"){
            updateResults("Computer chose scissors, you lose!");
            computerScore++;
        }else{
            updateResults("Computer chose paper, tie!");
        }
    }else if(userChoice === "scissors"){
        if(computerChoice === "paper"){
            updateResults("Computer chose paper, you win!");
            userScore++;
        }else if(computerChoice === "rock"){
            updateResults("Computer chose rock, you lose!");
            computerScore++;
        }else{
            updateResults("Computer chose scissors, tie!");
        }
    }
    updateScore();
}