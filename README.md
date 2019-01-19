# TIC TAC THROWDOWN
### By Daniel Marroquin

---

PLAY IT HERE: https://roqdraw.github.io/Tic-Tac-Toe/

A programmed Tic Tac Toe Game with aesthetics that fit into my own sensibilities.

Originally going to be a game with a tiki-influenced style (TIKI Tac Toe).
Instead of using images from the web, I decided to use some of my own artwork.
I adjusted the visual style as appropriately as I could to make it work with the images.

---

### Part One: Drafting
I broke down the project using this set of pseudocode:

#### Part One
1. Game is Tic Tac Toe
2. 1st Screen: Splash Page
2a. Select if One or Two players.
2b. If One Player: P1 vs CPU (One click needed each turn).
2c. If Two Players: P1 vs P2 (Two clicks needed each turn).
3. 2nd Screen: Game Board
3a. The 3 x 3 square grid appears.
3b. Do a coin flip to see who goes first.
4. Collect all DOM interactive nodes.
5. Store player's decisions in arrays.
6. Store all winning combinations in an array of arrays.
7. Start the Game.
8. Player 1 goes first

### Part Two
1. Alternate between P1 & P2/CPU
2. Each player goes into a 'game loop'.
3. At the end of each turn, they switch players.
#### Game Loop
1. Player turn
2. Check which square has been chosen:
    2.a. Empty = Fill In
    3.b. Filled in = Try Again.
3. Check if its a winner or not.
4. Check if its a draw or not.
5. Switch player turn.

### Part Three
1. Declare winner if 3 boxes are vertically, horizontally or diaginally aligned.
2. Have a play again button when its done.

#### In hindsight.
PLAN BETTER.

---

### Unsolved Problems
1. Accidental Turn Punishment
When a player clicks on a square that has already been chosen, it punishes the current player by skipping their turn.
Going to try and rectify that in the future.
My first clue is that even 

### Future Edits
1. Animation
Add Colour Animation when a player's turn is active.

2. Confidence
More confidence in structuring my CSS architecture.
Trying out new techniques and finding solutions if I get stuck using the debugger and console in the browser.

3. Better Structure
Better HTML Structure which in turn influences the CSS.