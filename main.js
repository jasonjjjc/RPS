// Initialise a score object to keep track of
//  - gamesPlayed
//  - wins
//  - draws
//  - losses
let score = {
  gamesPlayed: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};




function isPlayerMoveValid(playerMove) {
  if (
    playerMove.toLowerCase() === "rock" ||
    playerMove.toLowerCase() === "paper" ||
    playerMove.toLowerCase() === "scissors"
  ) {
    return true;
  }
  return false;
}
let randomNumber = Math.random();

function getComputerMove() {
  // Get a random number between 0 and less than 1
  randomNumber = Math.random();
  // If randomNumber is between 0 and 0.33 return rock
  if (randomNumber >= 0 && randomNumber < 0.33) {
    return "rock";
  }

  // If randomNumber is between 0.33 and 0.66 return paper
  if (randomNumber >= 0.33 && randomNumber < 0.66) {
    return "paper";
  }

  // If randomNumber is between 0.66 and 1 return scissors
  if (randomNumber >= 0.66 && randomNumber < 1) {
    return "scissors";
  }
}

function getWinner(playerMove, computerMove) {
  // If both player and computer play the same move, return 0 for draw
  if (playerMove === computerMove) {
    
    return 0;
  } 

  if (playerMove === "rock") {
    if (computerMove === "paper") {
      // player rock loses to computer paper, return -1 for player loss
      return -1;
    } else if (computerMove === "scissors") {
      // player rock beats computer scissors, return 1 for player win
      return 1;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      // player paper beats computer rock, return 1 for player win
      return 1;
    } else if (computerMove === "scissors") {
      // player paper loses to computer scissors, return -1 for player loss
      return -1;
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      // player scissors loses to computer rock, return -1 for player loss
      return -1;
    } else if (computerMove === "paper") {
      // player scissors beats computer paper, return 1 for player win
      return 1;
    }
  }
}

function displayResult(result) {
score.gamesPlayed++;


let resultDisplayGamesPlayed= document.querySelector('#games-played');
let resultDisplayWins = document.querySelector('#wins');
let resultDisplayLosses = document.querySelector('#losses');
let resultDisplayDrew = document.querySelector('#drew');
let displayPlayerMove = document.querySelector('#your-move');
let displayComputerMove = document.querySelector('#computer-move');

resultDisplayGamesPlayed.textContent = ` Games played: ${score.gamesPlayed}`;
resultDisplayDrew.textContent = ` Draws: ${score.draws}`;
resultDisplayWins.textContent = ` Wins: ${score.wins}`;
resultDisplayLosses.textContent = ` Losses: ${score.losses}`;
displayPlayerMove.textContent = `Your move: ${playerMove}`;
displayComputerMove.textContent = `Computer move: ${computerMove}`


// let resultText = "";
if (result === 1) {
  score.wins++;
  // resultDisplayWins.textContent = ` Games played: ${score.wins}`;
  resultDisplayWins.textContent = ` Wins: ${score.wins}`;
  
  // resultText = "win!";
} else if (result === 0) {
  score.draws++;
  resultDisplayDrew.textContent = ` Draws: ${score.draws}`;
  
  // resultText = "drew.";
} else if (result === -1) {
  score.losses++
  resultDisplayLosses.textContent = ` Losses: ${score.losses}`;
    // resultDisplayLosses.textContent = ` Games played: ${score.losses}`;
    // resultText = "lose :(";
  }



  // alert(
    
  //   `${username}, you played ${playerMove} and computer played ${computerMove}. You ${resultText}`
  // );
}

// function updateScore(result) {
//   score.gamesPlayed = score.gamesPlayed + 1;
//   if (result === 1) {
//     score.wins = score.wins + 1;
//   } else if (result === 0) {
//     score.draws = score.draws + 1;
//   } else if (result === -1) {
//     score.losses = score.losses + 1;
//   }
// }

// function displayScore() {
//   alert(
//     `${username}, you have played ${score.gamesPlayed} game(s) so far. You are at ${score.wins} wins, ${score.losses} losses and ${score.draws} draws`
//   );
// }

// Before we start the game loop, get a player's username
// let username = prompt("What should we call you?");

// While (true) to loop forever
// while (true) {
//   // Get player move with prompt
//   let playerMove = prompt(`Your move ${username}. rock, paper or scissors?`);
  
//   // Validate playerMove
//   let isValidPlayerMove = isPlayerMoveValid(playerMove);
//   // If we do not have a valid player move, continue the loop
//   // which means to skip this iteration and go to the next one
//   // This is different to breaking the loop
//   if (!isValidPlayerMove) {
//     alert("Incorrect player move, please type either rock, paper or scissors");
//     continue;
//   }

//   // Get computer move from getComputerMove function
//   let computerMove = getComputerMove();

//   // Get the winner based on what playerMove and computerMove are
//   // result is either 1 (player win), 0 (draw) or -1 (player loss)
//   let result = getWinner(playerMove, computerMove);

//   // Display the result of this round to the user
//   displayResult(result, playerMove, computerMove);

//   // Call update score to update the score object declared at the top based
//   // based on the result of getWinner
//   updateScore(result);

//   // Display score details to player
//   displayScore();

//   // Ask if the player wants to keep playing
//   let keepPlaying = confirm(`Do you want to keep playing ${username}?`);
//   if (!keepPlaying) {
  //     // If false, break the while loop so we stop the game
  //     break;
  //   }
  // }
  
  let playerMove = '';
  let username = '';
  let userInput = document.querySelector('#user-input');
  let computerMove = getComputerMove();
  
  
function updateUsername (e) {
  username = e.target.value;
  console.log(e.target.value);
}

userInput.addEventListener('keyup', updateUsername);
userInput.addEventListener('keyup', updateWelcome);

let welcomeUser = document.querySelector('#welcome-username');

function updateWelcome () {
  welcomeUser.textContent = `Welcome, ${username}!`;
};


let userButtons = document.querySelectorAll('.buttons > button')

let rock = document.querySelector('#rock-button');
let paper = document.querySelector('#paper-button');
let scissors = document.querySelector('#scissors-button');

function updateUserMove (e) {
  playerMove = e.target.textContent.toLowerCase();
}

for (i=0; i<userButtons.length; i++) {
userButtons[i].addEventListener('click', function (e){
updateUserMove(e);
let computerMove = getComputerMove();
let result = getWinner(playerMove, computerMove);
console.log(playerMove);
console.log(computerMove);
console.log(result);
displayResult(result);


  });
}; 







