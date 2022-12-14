const game_boxes = document.querySelectorAll('.game_boxes');

const board_object = () => {
    const board_array = [69]; 
    const board_row1 = [];
    const announce = document.querySelector('.announce');
    const winner = document.createElement('div');
    const joiner = function(){
        if(board_row1.join("") == 'XXX'){
            winner.classList.add('won');
            winner.textContent = `${p1.player1} wins the game fucker!`
            announce.appendChild(winner);
            for(const game_box of game_boxes){
                game_box.style.pointerEvents = "none";
            }
        } 
        else if (board_row1.join("") == 'OOO'){
            winner.classList.add('won');
            winner.textContent = `${p2.player2} wins the game you dick!`
            announce.appendChild(winner);
            for(const game_box of game_boxes){
                game_box.style.pointerEvents = "none";
            }
        }
        
    }
    return {board_array, board_row1, joiner}
}
//if statement when x is the last input?
const gameBoard = board_object();


const playerOne = (player1, marker) => {
    return{player1, marker}
}

const playerTwo = (player2, marker) => {
    return{player2, marker}
}

const p1 = playerOne('Tim', 'X');
const p2 = playerTwo('Bella', 'O');



for(const game_box of game_boxes){
    game_box.addEventListener('click', function(){
    if(gameBoard.board_array[gameBoard.board_array.length-1] == 'X') {
            game_box.classList.add('changeColor2');
            game_box.textContent = p2.marker;
            gameBoard.board_array.push(p2.marker);
            game_box.style.pointerEvents = "none";
        }else{
            game_box.classList.add('changeColor');
            game_box.textContent = p1.marker;
            gameBoard.board_array.push(p1.marker);
            game_box.style.pointerEvents = "none";
        }
        console.log(gameBoard.board_array);
    })
}

const row_one = document.getElementsByClassName('row_one');

for(const row1 of row_one) {
    row1.addEventListener('click', function() {
        if(gameBoard.board_array[gameBoard.board_array.length-1]  == 'O') {
            row1.classList.add('changeColor2');
            row1.textContent = p2.marker;
            gameBoard.board_row1.push(p2.marker);
            //row1.style.pointerEvents = "none";
        }else {
            row1.classList.add('changeColor');
            row1.textContent = p1.marker;
            gameBoard.board_row1.push(p1.marker);
            //row1.style.pointerEvents = "none";
        }
        console.log(gameBoard.board_row1);
        gameBoard.joiner();
    })
   
}










const testing = document.getElementById('testing');
testing.addEventListener('click', function(){
    gameBoard.board_array.push("Test");
    console.log(gameBoard.board_array);
})

const reset = document.getElementById('resetBtn');
reset.addEventListener('click', function(){
    location.reload();
})







