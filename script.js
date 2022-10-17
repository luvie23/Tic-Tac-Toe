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
    winCondition()
    computerMove()
    console.log(cells[1])

}

//AI is just randomly choosing available cells
function computerMove(){
    let freeCells = document.getElementsByClassName('free');
    let move = freeCells[Math.floor(Math.random() * freeCells.length)]

    move.textContent = computer
    move.classList.remove('free')


}

const winOptions = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]

]
//checks the win condition
function winCondition(){
    for (option in winOptions){
        for (num in winOptions[option]){
            console.log(winOptions[option][num])
        }

    }
}

function winCondition(){
    if (cells[0].textContent == cells[1].textContent && cells[0].textContent == cells[2].textContent && cells[0].textContent != ""){
        if (cells[0].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[3].textContent == cells[4].textContent && cells[3].textContent == cells[5].textContent && cells[3].textContent != "") {
        if (cells[3].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[6].textContent == cells[7].textContent && cells[6].textContent == cells[8].textContent && cells[6].textContent != "") {
        if (cells[6].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[0].textContent == cells[3].textContent && cells[0].textContent == cells[6].textContent && cells[0].textContent != "") {
        if (cells[0].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[1].textContent == cells[4].textContent && cells[1].textContent == cells[7].textContent && cells[1].textContent != "") {
        if (cells[1].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[2].textContent == cells[5].textContent && cells[2].textContent == cells[8].textContent && cells[2].textContent != "") {
        if (cells[2].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[0].textContent == cells[4].textContent && cells[0].textContent == cells[8].textContent && cells[0].textContent != "") {
        if (cells[0].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else if (cells[2].textContent == cells[4].textContent && cells[2].textContent == cells[6].textContent && cells[2].textContent != ""){
        if (cells[2].textContent == player){
            console.log('Player WINS!')
        } else {
            console.log('Computer Wins!')
        }
    } else {
        console.log('not yet')
    }
}