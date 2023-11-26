function getComputerChoice ()    {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw'
    }
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You won!'
    }
    else {
        return 'Computer won!'
    }
}


function playGame (userChoice) {
    const computerChoice = getComputerChoice()
    console.log('Your choice: ' + userChoice)
    console.log('Computer choice: ' + computerChoice)

    const result = determineWinner(userChoice, computerChoice)
    console.log(result)
}

playGame('rock')