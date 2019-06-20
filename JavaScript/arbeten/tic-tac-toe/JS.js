let board;
const playerOne = 'O';
const playerTwo = 'X';
let scoreO = 0;
let scoreX = 0;
let winner = undefined;
let currentPlayer;
let totalMoves = 9;
let box = $('.box')

startGame();

function startGame(){
  currentPlayer = playerTwo;
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for(let i = 0; i < box.length; i++) {
    box[i].innerText = '';
    box[i].addEventListener('click', onClick, false);
  }
}
function onClick(event){
  let clickedBox = event.target;
  let boxId = event.target.id;
  let player = currentPlayer;
  board[Math.floor(boxId/3)][boxId%3] = player;

  if(winner === 'X' || winner === 'O'){
    return;
  } else if(player === playerOne && clickedBox.textContent === ''){
      currentPlayer = playerTwo
      $(event.target).text(player);
      totalMoves = totalMoves -1;
    } else if(player === playerTwo && clickedBox.textContent === '') {
        currentPlayer = playerOne
        $(event.target).text(player);
        totalMoves = totalMoves -1;
      } else { }
  winningCondX();
  winningCondO();
  itsATie();
}

function winnerIsX(chosenBox){
  $('.endgame').css('display', 'block');
  $(chosenBox).css('background', 'rgba(76, 124, 252, 0.5)');
  $('.text').text('Winner is X')
  winner = 'X';
  scoreX++;
  return winner;
}

function winnerIsO(chosenBox){
  $('.endgame').css('display', 'block');
  $(chosenBox).css('background', 'rgba(76, 124, 252, 0.5)');
  $('.text').text('Winner is O')
  winner = 'O';
  scoreO++;
  return winner;
}

function tie(){
  $('.endgame').css('display', 'block');
  $('.text').text('It\'s a tie');
}

function winningCondX() {
  if(board[0][0] === playerTwo && board[0][1] === playerTwo && board[0][2] === playerTwo){
    winnerIsX('#0, #1, #2');
  } else if (board[1][0] === playerTwo && board[1][1] === playerTwo && board[1][2] === playerTwo){
    winnerIsX('#3, #4, #5');
  } else if (board[2][0] === playerTwo && board[2][1] === playerTwo && board[2][2] === playerTwo) {
    winnerIsX('#6, #7, #8');
  } else if (board[0][0] === playerTwo && board[1][1] === playerTwo && board[2][2] === playerTwo) {
    winnerIsX('#0, #4, #8');
  } else if (board[2][0] === playerTwo && board[1][1] === playerTwo && board[0][2] === playerTwo) {
    winnerIsX('#6, #4, #2');
  } else if (board[0][1] === playerTwo && board[1][1] === playerTwo && board[2][1] === playerTwo) {
    winnerIsX('#1, #4, #7');
  } else if (board[0][0] === playerTwo && board[1][0] === playerTwo && board[2][0] === playerTwo) {
    winnerIsX('#0, #3, #6');
  } else if (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo) {
    winnerIsX('#2, #5, #8');
  }
}

function winningCondO() {
  if(board[0][0]  === playerOne && board[0][1] === playerOne && board[0][2] === playerOne){
    winnerIsO('#0, #1, #2');
  } else if(board[1][0]  === playerOne && board[1][1]  === playerOne && board[1][2] === playerOne){
    winnerIsO('#3, #4, #5');
  } else if (board[2][0]  === playerOne && board[2][1]  === playerOne && board[2][2] === playerOne) {
    winnerIsO('#6, #7, #8');
  } else if (board[0][0]  === playerOne && board[1][1]  === playerOne && board[2][2] === playerOne) {
    winnerIsO('#0, #4, #8');
  } else if (board[2][0]  === playerOne && board[1][1]  === playerOne && board[0][2] === playerOne) {
    winnerIsO('#6, #4, #2');
  } else if (board[0][1]  === playerOne && board[1][1]  === playerOne && board[2][1] === playerOne) {
    winnerIsO('#1, #4, #7');
  } else if (board[0][0]  === playerOne && board[1][0]  === playerOne && board[2][0] === playerOne) {
    winnerIsO('#0, #3, #6');
  } else if (board[0][2]  === playerOne && board[1][2]  === playerOne && board[2][2] === playerOne) {
    winnerIsO('#2, #5, #8');
  }
}

function itsATie(){
  if(totalMoves === 0 && winner === undefined){
    tie();
  }
}

function resetGame(){
  $('p').text('Score' + ' O: '+ scoreO + ' X: ' + scoreX);
  $('.box').removeAttr('style');
  $('.endgame').css('display', 'none');
  startGame();
  winner = undefined;
  totalMoves = 9;
}

function newGame(){
  $('p').text(' ');
  scoreO = 0;
  scoreX = 0;
  $('.box').removeAttr('style');
  $('.endgame').css('display', 'none');
  startGame();
  totalMoves = 9;
  winner = undefined;
}
