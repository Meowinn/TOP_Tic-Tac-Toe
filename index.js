const board_object = () => {
    const board_array = [69]; 
    return {board_array}
}
//look at notes for player javascript objects example
const playerOne = (player1, marker) => {
    return{player1, marker}
}

const playerTwo = (player2, marker) => {
    return{player2, marker}
}

const p1 = playerOne('Tim', 'X');
const p2 = playerTwo('Bella', 'O');

const gameBoard = board_object();



const game_boxes = document.getElementsByClassName('game_boxes');
const reset = document.getElementById('resetBtn');

reset.addEventListener('click', function(){
    location.reload();
})

for(const game_box of game_boxes){
    game_box.addEventListener('click', function(){
        game_box.classList.add('changeColor');
    })
}


