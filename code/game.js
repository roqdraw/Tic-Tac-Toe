// Game is Tic Tac Toe

// 1st screen: Splash Page
// Main Title
// Select if there'll be one or two players.
// If One player: Player 1 vs Computer Player (One click needed).
// If 2 players: Player 1 vs Player 2 (Two clicks needed).

// 2nd screen: Game Board
// the 9x9 square grid appears.

// Do a coin flip to see who goes first.

var squares = document.querySelectorAll('.space');
var playerOneScore = document.querySelector('.scoreNumber');
var playerTwoScore = document.querySelector('.scoreNumber2');
var winner = document.querySelector('.winner');
var reset = document.querySelector('.new-game');
var winner2 = document.querySelector('.winner2');
var reset2 = document.querySelector('.new-game2');
var resetBoard = document.querySelector('.reset-board');
var resetScore = document.querySelector('.reset-score');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');

// Players' decisions go in here.
var playerOneSquares = [];
var playerTwoSquares = [];
var hasWon = false;

// If player's array includes these numbers: they win.
var winningCombination = [[1,4,7], [2,5,8], [3,6,9], [1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7]]

// Alternates turns between Player One and Player Two.
var player = 1;

var gameLoop = function() {
    // debugger
    if (hasWon === true) {
        return
    } else if(player === 1) {
        addSquareAndCheck();
        playerOneSquares.push(Number(this.id));
        ifItIsAWinner();
        ifDraw();
        player = 2;
    } else {
        addSquareAndCheck();
        playerTwoSquares.push(Number(this.id));
        ifItIsAWinner();
        ifDraw();
        player = 1;
    }
};

// Go through every square inside the grid.
// Like a For Loop.
squares.forEach(function(markIt) {
    markIt.addEventListener('click', gameLoop);
});

//Check if numbers stored makes player a winner.
var ifItIsAWinner = function() {
    // debugger
    if (player === 1) {
        if (compareCombo(playerOneSquares) === true) {
            playerOneWins();
        } else {
            console.log('player two\'s turn.');
            return
        };
    } else if (player === 2) {
        if (compareCombo(playerTwoSquares) === true) {
        playerTwoWins();
        } else {
        console.log('player one\'s turn.');
        return
        };
    } else {
        console.log('Next!');
        return
    }
};

// Function occurs when it is a Draw.
var ifDraw = function() {
    if(hasWon === true){
        return
    } else {
        if(playerOneSquares.length + playerTwoSquares.length === 9) {
                player1.classList.add('hidden');
                player2.classList.add('hidden');
                reset.classList.remove('hidden');
                reset2.classList.remove('hidden');
                hasWon = true;
        }
    };
};

// Compares the value that gets stored in the player's array with winningCombo.
var compareCombo = function(player) {
    // Loops through the winningCombo array.
    for(i = 0; i < winningCombination.length; i++) {
        // Keeps a counter.
        var counter = 0;
        // Loops through the arrays inside the array.
        for(j = 0; j < winningCombination[i].length; j++) {
            // if playerArray includes the array location and its number:
            if(player.includes(winningCombination[i][j])) {
                // Add it to the counter and console log the accumulation.
                counter++
                console.log(counter)
            }
        // If counter is greater or equal to 3, return true.
        } if (counter >=3) {
            return true
        };
    };
};

var playerOneWins = function() {
    player1.classList.add('hidden');
    winner.classList.remove('hidden');
    // reset.classList.remove('hidden');
    playerOneScore.textContent++;
    hasWon = true;
};

var playerTwoWins = function() {
    player2.classList.add('hidden');
    winner2.classList.remove('hidden');
    // reset2.classList.remove('hidden');
    playerTwoScore.textContent++;
    hasWon = true;
};

var addSquareAndCheck = function() {
    if(player === 1) {
        if (event.target.classList.contains('x')) {
            console.log('You already chose that!');
            return
        } else if (event.target.classList.contains('o')) {
            console.log('Your opponent chose that!');
            return
        } else {
            event.target.classList.add('x');
            return
        }
    } else if (player === 2) {
        if (event.target.classList.contains('x')) {
            console.log('Your opponent chose that!');
            return
        } else if (event.target.classList.contains('o')) {
            console.log('You already chose that!');
            return
        } else {
            event.target.classList.add('o');
            return
        }
    }
};

var resetGame = function() {
    playerOneSquares = [];
    playerTwoSquares = [];
    winner.classList.add('hidden');
    winner2.classList.add('hidden');
    reset.classList.add('hidden');
    reset2.classList.add('hidden');
    player1.classList.remove('hidden');
    player2.classList.remove('hidden');
    hasWon = false;
    player = 1;
    for(i=0; i < squares.length; i++){
        if(squares[i].classList.contains('x')){
            squares[i].classList.remove('x');
        } else if (squares[i].classList.contains('o')){
            squares[i].classList.remove('o');
        }
    }
};

var resetGameScores = function() {
    playerOneSquares = [];
    playerTwoSquares = [];
    winner.classList.add('hidden');
    winner2.classList.add('hidden');
    reset.classList.add('hidden');
    reset2.classList.add('hidden');
    player1.classList.remove('hidden');
    player2.classList.remove('hidden');
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    hasWon = false;
    player = 1;
    for(i=0; i < squares.length; i++){
        if(squares[i].classList.contains('x')){
            squares[i].classList.remove('x');
        } else if (squares[i].classList.contains('o')){
            squares[i].classList.remove('o');
        }
    }
};

// reset.addEventListener('click', resetGame);
// reset2.addEventListener('click', resetGame);
resetBoard.addEventListener('click', resetGame);
resetScore.addEventListener('click', resetGameScores);