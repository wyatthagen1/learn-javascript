// ------------ Get Doc Elements -----------------------------
const gameTiles = document.querySelectorAll('.tile');
const gameStatusText = document.getElementById('errorPanel');
const gameInstructionText = document.getElementById('messagePanel');
gameTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        playMove(game,tile.id,gameInstructionText.getAttribute('data-player'))
        })
});

//-------------------------------------------------------------


const game = (function(){
    const gameBoard = [
        "[]","[]","[]",
        "[]","[]","[]",
        "[]","[]","[]"
    ];
    const playerOne = createPlayer('Player One','X');
    const playerTwo = createPlayer('Player Two', 'O');

    const isOccupied = (tile) => {
        if (tile === 'X' || tile === 'O'){ // COME BACK LATER WHEN TILE OBJ CHANGES
            return true; 
        }else{
            return false;
        }
    }

    const gameCheck = (index, gameBoard, player) => {
        index = Number(index)
        const sideLength = Math.sqrt(gameBoard.length)
        let modIndex = (index+1) % sideLength;
        if(modIndex === 0){
            modIndex = sideLength; // do this to avoid issues where mod = 0
        } 
        let i = index,j= modIndex,vertCount = 1,diagCount = 1,horizCount = 1;
  
        // vertical check (same modulo)
        // v direction 
        while((i + 1 + sideLength) <= gameBoard.length){
            if(gameBoard[i+sideLength] === player.symbol){
                vertCount++;
            }
            i = i + sideLength;   
        }

        i = index; // reset i  
        // ^ direction
        while((i - sideLength) >= 0){
            if(gameBoard[i-sideLength] === player.symbol){
                vertCount++;
            }
            i = i - sideLength;
        }


        // horizontal check 
        // > direction 
        while(j+1 <= sideLength){
            if(gameBoard[index + 1 - modIndex + j] === player.symbol){
                horizCount++;
            }
            j++;
        }

        j = modIndex;
        // < direction 
        while(j-1 > 0){
            if(gameBoard[index - modIndex + j - 1]=== player.symbol){
                horizCount++;
            }
            j--;
        }

    
        // diag check (wont work for board larger than 9 squares, i give up) index === 0 || index === sideLength-1 || index === 4 || index === gameBoard.length - 1 || index === gameBoard.length - 1 || index === gameBoard.length - sideLength
        if(index === 0 || index === sideLength-1 || index === 4 || index === gameBoard.length - 1 || index === gameBoard.length - sideLength){
            //  diagonal \ 
            if(gameBoard[0]===player.symbol && gameBoard[4]===player.symbol && gameBoard[gameBoard.length-1]===player.symbol){
                diagCount = sideLength;
            }
            // diagonal /
            if(gameBoard[sideLength-1]=== player.symbol && gameBoard[4]===player.symbol && gameBoard[gameBoard.length - sideLength] === player.symbol){
                diagCount = sideLength;
            }
        } 
        return (diagCount === sideLength || vertCount === sideLength || horizCount === sideLength);

    }

    return {gameBoard, playerOne, playerTwo, gameCheck, isOccupied}
})();

function createPlayer(name, symbol){
    return {name, symbol};
}


function playMove(game,index,playerNum){
    const activePlayer = game[playerNum];

    if(game.isOccupied(game.gameBoard[index])){
        updateDisplay(index,false,activePlayer.name)
        // play another move --> go back to play another 
        return false;
    }else{
        game.gameBoard[index] = activePlayer.symbol; // update tile 
        const gameOver = game.gameCheck(index,game.gameBoard,activePlayer);
        
        if(activePlayer.name === 'Player One'){
            nextPlayer = game.playerTwo.name;
        }else{
            nextPlayer = game.playerOne.name;
        }

        if (gameOver){

            updateDisplay(index,true,nextPlayer)
            displayGameOver();

            for(let i=0 ;i < game.gameBoard.length; i++){ // reset game board 
                game.gameBoard[i] ='[]'
            }
            
            resetGameDisplay();


        }else{
            // do stuff to update the tile display
                updateDisplay(index,true,nextPlayer);


        }

    }

}

function displayGameOver(){
    // display game over text maybe in a modal with a button that says OK
    gameStatusText.style.display = 'block'
    gameStatusText.textContent = 'Game Over!'

}

function resetGameDisplay(){ // FINISH LATER
    gameTiles.forEach(tile => {
        tile.style.backgroundColor = '#ffffff';
        tile.textContent = '';
        tile.disabled = false
    });
}

function updateDisplay(index,succesState,nextPlayer){// FINISH LATER 

    if(succesState){
        const tile = document.querySelector(`#\\3${index}`);
        gameStatusText.style.display ='none'


        tile.disabled = true 
        if (nextPlayer === 'Player One'){  // make the square unclickable and marked with the player's symbol
            tile.style.backgroundColor = '#2980b9'
            tile.textContent = 'O'
            gameInstructionText.textContent = 'Player 1 its your turn'
            gameInstructionText.setAttribute('data-player','playerOne');

        }
        else{
            tile.style.backgroundColor = '#ffb1b1'
            tile.textContent = 'X'
            gameInstructionText.textContent = 'Player 2 its your turn'
            gameInstructionText.setAttribute('data-player','playerTwo');
        }
        
        
        
    }else{
        // display error message that the square is already occupied

    }
}


