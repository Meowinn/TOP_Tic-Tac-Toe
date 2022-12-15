const game_boxes = document.querySelectorAll('.game_boxes');

const board_object = () => {
    const board_array = [69]; 
    const board_row1 = [[],[],[],[],[],[],[],[],[3]];
    const announce = document.querySelector('.announce');
    const winner = document.createElement('div');
    const joiner = function(){
      for(i=0; i<gameBoard.board_row1[gameBoard.board_row1.length -1]; i++) {
        if(board_row1[i].join("") == 'XXX'){
            winner.classList.add('won');
            winner.textContent = `${p1.player1} wins the game!`
            announce.appendChild(winner);
            for(const game_box of game_boxes){
              game_box.style.pointerEvents = "none";
            }
          } else if(board_row1[i].join("") == 'OOO'){
              winner.classList.add('won');
              winner.textContent = `${p2.player2} wins the game!`
              announce.appendChild(winner);
              for(const game_box of game_boxes){
                game_box.style.pointerEvents = "none";
            }
            }
        }
    }
    return {board_array, board_row1, joiner}
}

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

const row_one = document.querySelectorAll('.row_one');
const row_two = document.querySelectorAll('.row_two');
const row_three = document.querySelectorAll('.row_three');
const row_four = document.querySelectorAll('.row_four');
const row_five= document.querySelectorAll('.row_five');
const row_six = document.querySelectorAll('.row_six');
const row_seven = document.querySelectorAll('.row_seven');
const row_eight = document.querySelectorAll('.row_eight');



const arrayRows = [[row_one],["test"]];

for(const row1 of row_one) {
    row1.addEventListener('click', function() {
        if(gameBoard.board_array[gameBoard.board_array.length-1]  == 'O') {
            row1.classList.add('changeColor2');
            row1.textContent = p2.marker;
            gameBoard.board_row1[0].push(p2.marker);
        }else {
            row1.classList.add('changeColor');
            row1.textContent = p1.marker;
            gameBoard.board_row1[0].push(p1.marker);
          
        }
        console.log(gameBoard.board_row1);
        gameBoard.joiner();
    })
   
}

for(const row2 of row_two) {
  row2.addEventListener('click', function() {
      if(gameBoard.board_array[gameBoard.board_array.length-1]  == 'O') {
          row2.classList.add('changeColor2');
          row2.textContent = p2.marker;
          gameBoard.board_row1[1].push(p2.marker);
      }else {
          row2.classList.add('changeColor');
          row2.textContent = p1.marker;
          gameBoard.board_row1[1].push(p1.marker);
        
      }
      gameBoard.joiner();
  })
 
}

for(const row3 of row_three) {
  row3.addEventListener('click', function() {
      if(gameBoard.board_array[gameBoard.board_array.length-1]  == 'O') {
          row3.classList.add('changeColor2');
          row3.textContent = p2.marker;
          gameBoard.board_row1[2].push(p2.marker);
      }else {
          row3.classList.add('changeColor');
          row3.textContent = p1.marker;
          gameBoard.board_row1[2].push(p1.marker);
      }
      gameBoard.joiner();
  })
 
}

for(const row4 of row_four) {
  row4.addEventListener('click', function() {
      if(gameBoard.board_array[gameBoard.board_array.length-1]  == 'O') {
          row4.classList.add('changeColor2');
          row4.textContent = p2.marker;
          gameBoard.board_row1[3].push(p2.marker);
      }else {
          row4.classList.add('changeColor');
          row4.textContent = p1.marker;
          gameBoard.board_row1[3].push(p1.marker);
      }
      gameBoard.joiner();
  })
 
}

const reset = document.getElementById('resetBtn');
reset.addEventListener('click', function(){
    location.reload();
})