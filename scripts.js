let nextPlayer='X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
let nextSign = document.getElementById('next-lbl');
nextSign.innerText = nextPlayer;
let i = 0;

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(gameboardPlace of document.getElementsByTagName("td")){
        let button = document.createElement("button");
        button.innerHTML = "[ ]";
        button.type = "button";
        document.getElementById(gameboardPlace.id).appendChild(button)
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event){
    let btn = event.target;
    btn.innerHTML = nextPlayer;
    if(nextPlayer=='X'){
        nextPlayer = 'O';
    }else if(nextPlayer=='O'){
        nextPlayer = 'X';
    }
    nextSign.innerText = nextPlayer;
    i++

    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    btn.disabled = true;
    // Check if the game is over
    if (isGameOver()){
        let gameOverLabel = document.getElementById('game-over-lbl');
        gameOverLabel.innerHTML = '<h1>Game Over!</h1>';
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver(){
    return(i==9);
    // This function returns true if all the buttons are disabled and false otherwise 
   
}