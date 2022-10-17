const startX = document.getElementById('play-x');
const startO = document.getElementById('play-o');
const gameBox = document.getElementById('game-box');
const cells = document.getElementsByClassName('cell');

let player = "";
let computer = "";

startX.addEventListener('click', function(){
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
    startO.classList.remove('selected');
    startX.classList.add('selected');
    player = "X";
    computer = "O";
    startGame('x');
});
startO.addEventListener('click', function(){
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
    startX.classList.remove('selected');
    startO.classList.add('selected');
    computer = "X";
    player = "O";
    startGame('o');
});

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(){

        chooseCell(this)

    })
}


//press one of the play buttons
//highlight the pressed button
//pressing the buttons during live play resets it as the pressed button
function startGame(test) {
    gameBox.classList.remove('hidden');
    console.log(test);
}


//code runs when a cell is clicked
//puts a letter on the cell
function chooseCell(key){
    if (key.textContent != ""){
        return
    }
    key.textContent = player
    key.classList.remove('free')
    computerMove()

}

//AI is just randomly choosing available cells
function computerMove(){
    let freeCells = document.getElementsByClassName('free');
    let move = freeCells[Math.floor(Math.random() * freeCells.length)]
    console.log(move)
    move.textContent = computer
    move.classList.remove('free')


}


//checks the win condition
// function winCondition{

// }