// scores
let humanScore = 0;
let computerScore = 0;


// dom elements
// existing
const mainElement = document.querySelector("main");
const playButtonsList = document.querySelectorAll(".buttons-box .btn");
const humanScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const resetButton = document.querySelector("main .reset");
// created and inserted
const computerChoiceElement = document.createElement("p");
mainElement.insertBefore(computerChoiceElement, resetButton);
const victoryElement = document.createElement("h2");
mainElement.insertBefore(victoryElement, resetButton);


// functions
// returns a random number from 0 to max - 1
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}
// get computer choice
function getComputerChoice()
{
    const choice = getRandomInt(3);
    switch (choice)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// convert move name to move code
function moveNameToMoveCode(choice)
{
    choice = choice.toLowerCase();

    // return choice
    switch (choice)
    {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

// find winner, update score
function playRound(humanChoice, computerChoice)
{
    const result = humanChoice - computerChoice;
    if (result === 0)
    {
        return;
    }
    if (result === -2 || result === 1)
    {
        humanScoreElement.textContent = ++humanScore;
        return;
    }
    computerScoreElement.textContent = ++computerScore;
}

// game lasts till some one reaches 5 points
function playGame(humanChoice)
{
    if (humanScore < 5 && computerScore < 5)
    {
        const computerChoice = getComputerChoice();
        // let user know the computer's choice
        computerChoiceElement.textContent = `Computer Chose ${computerChoice}`;

        // user input is move name, playRound() requires move code
        playRound(moveNameToMoveCode(humanChoice),
                  moveNameToMoveCode(computerChoice));
    }
    
    // game result
    if (humanScore === 5 || computerScore === 5)
    {
        if (humanScore > computerScore)
        {
            victoryElement.textContent = "Player Wins.";
        }
        else if (humanScore < computerScore)
        {
            victoryElement.textContent = "Computer Wins.";
        }
        else
        {
            victoryElement.textContent = "something is wrong, you shouldn't be seeing this message.";
        }
    }
}

// event selectors
// select buttons and pass value to playGame() on click
playButtonsList.forEach((button) => {
    button.addEventListener("click", (e) => {
        playGame(e.target.textContent);
    });
});

// reset
resetButton.addEventListener("click", () => {
    humanScore = 0;
    humanScoreElement.textContent = 0;
    computerScore = 0;
    computerScoreElement.textContent = 0;
    
    computerChoiceElement.textContent = "";
    victoryElement.textContent = "";
})
