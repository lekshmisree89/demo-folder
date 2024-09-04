function playGame() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let userChoices = { R: 0, P: 0, S: 0 };
    
    const choices = ["R", "P", "S"];
    
    function getRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function getWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "tie";
        } else if (
            (userChoice === "R" && computerChoice === "S") ||
            (userChoice === "P" && computerChoice === "R") ||
            (userChoice === "S" && computerChoice === "P")
        ) {
            return "win";
        } else {
            return "lose";
        }
    }

    while (true) {
        let userChoice = prompt("Enter R for Rock, P for Paper, or S for Scissors:").toUpperCase();

        if (!choices.includes(userChoice)) {
            alert("Invalid choice! Please enter R, P, or S.");
            continue;
        }

        userChoices[userChoice] += 1;

        let computerChoice = getRandomChoice();
        let result = getWinner(userChoice, computerChoice);

        if (result === "win") {
            wins += 1;
            alert(`You win! Computer chose ${computerChoice}.`);
        } else if (result === "lose") {
            losses += 1;
            alert(`You lose! Computer chose ${computerChoice}.`);
        } else {
            ties += 1;
            alert(`It's a tie! Both chose ${computerChoice}.`);
        }

        let playAgain = confirm("Do you want to play again?");
        if (!playAgain) {
            break;
        }
    }

    alert(`
        Game Over!
        Wins: ${wins}
        Losses: ${losses}
        Ties: ${ties}
        Choices: 
          Rock: ${userChoices.R} times
          Paper: ${userChoices.P} times
          Scissors: ${userChoices.S} times
    `);
}
playGame();