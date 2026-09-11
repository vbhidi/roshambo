let humanScore = 0;
let computerScore = 0;

// returns a random number from 0 to max - 1
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// get computer choice
function getComputerChoice()
{
    let rand_num = getRandomInt(3);
    return rand_num;
}

// get human choice
function getHumanChoice(round)
{
    // prompt user
    let user_prompt = "round: " + round +
                      "\nhuman: " + humanScore + " computer: " + computerScore +
                      "\n\nChoose(rock/paper/scissors)";
    let humanChoice = prompt(user_prompt);
    humanChoice = humanChoice.toLowerCase();

    // return choice
    if (humanChoice === "rock")
    {
        return 0;
    }
    else if (humanChoice === "paper")
    {
        return 1;
    }
    else if (humanChoice === "scissors")
    {
        return 2;
    }
    else
    {
        alert("wrong input!");
        return getHumanChoice();
    }
}

// find winner, update score
function playRound(humanChoice, computerChoice)
{
    let result = humanChoice - computerChoice;
    if (result === 0)
    {
        return;
    }
    if (result === -2 || result === 1)
    {
        humanScore++;
        return;
    }
    computerScore++;
}

// game will last 5 rounds
function playGame()
{
    let round = 0;
    let computerPrevChoice = 0;
    
    // game loop
    while (round < 5)
    {
        let humanChoice = getHumanChoice(round);
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        computerPrevChoice = computerChoice;
        
        alert("Computer chose code " + computerPrevChoice);

        round++;
    }
    
    // game result
    if (humanScore > computerScore)
    {
        alert("You Won.");
    }
    else if (humanScore < computerScore)
    {
        alert("Computer Won.");
    }
    else
    {
        alert("Tie");
    }
}

playGame();
