const startX = document.getElementById('play-x');
const startO = document.getElementById('play-o');
const gameBox = document.getElementById('game-box');
const cells = document.getElementsByClassName('cell');

let player = ""

startX.addEventListener('click', function(){
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = ""
    }
    player = "X"
    startGame('x');
});
startO.addEventListener('click', function(){
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = ""
    }
    player = "O"
    startGame('o');
});


//press one of the play buttons
//highlight the pressed button
//pressing the buttons during live play resets it as the pressed button
function startGame(test) {
    gameBox.classList.remove('hidden')
    console.log(test);
}


//code runs when a cell is clicked
//puts a letter on the cell
//function chooseCell(){

//}


//checks the win condition
//function winCondition{

//}