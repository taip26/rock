function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice;
    switch(rand) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            choice = "bruh???";
    }
    return choice
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let win = "You Win!";
    let lose = "You Lost!";
    if (player != "rock" && player != "paper" && player != "scissors") {
        return "Invalid input";
    }
    if (player == computerSelection) 
        return "It's a Tie!";
    if (player == "rock") {
        if (computerSelection == "paper")
            return lose;
        return win;
    }
    if (player == "paper") {
        if (computerSelection == "scissors")
            return lose;
        return win;
    }
    if (player == "scissors" || player == "scissor") {
        if (computerSelection == "rock")
            return lose;
        return win;
    }
}

function game() {
    let wins = 0;
    for (let i = 0; i < 5; i++) {
        let user = prompt("Please enter rock, paper, or scissors", "bruh");
        let result = playRound(user, getComputerChoice());
        alert(result)
        if (result == "You Win!")
            wins++;
    }
    document.write("You won "+wins+" game(s)");
}

game();