let nextPlayer = 'X';
let winner = null;
let totalMoves = 9;

// Toggles between X and O when an input is clicked and sets styling
$('table').on('click', function(event) {
  let clicked = event.target;
  if (winner) {
    return;
  } else if ($(clicked).val() === 'X' || $(clicked).val() === 'O') {
  } else if (nextPlayer === 'X') {
    $(clicked).attr('value', nextPlayer);
    $(clicked).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $(clicked).css('text-shadow', '1px 1px 1px #000000d4');
    $(clicked).css('color', '#000');
    $(event.target).val(nextPlayer);
    nextPlayer = 'O';
    totalMoves = totalMoves - 1;
  } else {
    $(clicked).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $(clicked).css('text-shadow', '1px 1px 1px #000000d4');
    $(clicked).css('color', '#fff');
    $(event.target).val(nextPlayer);
    nextPlayer = 'X';
    totalMoves = totalMoves - 1;
  }
  isWinnerX();
  isWinnerO();
  isWinnerNobody();
});
// Restart function that resets game
$('button').on('click', function(event) {
  winner = null;
  $('input').val('');
  nextPlayer = 'X';
  $('input').removeAttr('style');
  $('.restart').css('margin-top', '25px');
  $('.winner img').remove();
  $('div p').text('');
  totalMoves = 9;
});
// Function that sets styling on winning buttons/prints out that X won
function xWon(withButtons) {
    let img = $('<img src="winnerX.gif">');
    $('.winner').append(img);
    $('.restart').css('margin-top', '0px');
    $('.playarea').removeClass('in-progress');
    $(withButtons).css('background', 'rgba(222, 111, 180, 0.71)');
    winner = 'X';
}
// Function that sets styling on winning buttons/prints out that O won
function oWon(withButtons) {
    let img = $('<img src="winnerO.gif">');
    $('.winner').append(img);
    $('.restart').css('margin-top', '0px');
    $('.playarea').removeClass('in-progress');
    $(withButtons).css('background', 'rgba(124, 175, 208, 0.73)');
    winner = 'O';
}
// Function that writes out the text 'It\'s a straw' if nobody won
function nobodyWon() {
  $('p').text('It\'s a straw!');
  $('.restart').css('margin-top', '0px');
}
// Function that checks all winning options for player X
function isWinnerX() {
  if ($('#button1').val() === 'X' && $('#button2').val() === 'X' && $('#button3').val() === 'X') {
    xWon('#button1, #button2, #button3');
  } else if ($('#button4').val() === 'X'&& $('#button5').val() === 'X' && $('#button6').val() === 'X') {
    xWon('#button4, #button5, #button6');
  } else if ($('#button7').val() === 'X' && $('#button8').val() === 'X' && $('#button9').val() === 'X') {
    xWon('#button7, #button8, #button9');
  } else if ($('#button1').val() === 'X' && $('#button5').val() === 'X' && $('#button9').val() === 'X') {
    xWon('#button1, #button5, #button9');
  } else if ($('#button3').val() === 'X' && $('#button5').val() === 'X' && $('#button7').val() === 'X') {
    xWon('#button3, #button5, #button7');
  } else if ($('#button2').val() === 'X' && $('#button5').val() === 'X' && $('#button8').val() === 'X') {
    xWon('#button2, #button5, #button8');
  } else if ($('#button1').val() === 'X' && $('#button4').val() === 'X' && $('#button7').val() === 'X') {
    xWon('#button1, #button4, #button7');
  } else if ($('#button3').val() === 'X' && $('#button6').val() === 'X' && $('#button9').val() === 'X') {
    xWon('#button3, #button6, #button9');
  }
}
// Function that checks all winning options for player O
function isWinnerO() {
  if ($('#button1').val() === 'O' && $('#button2').val() === 'O' && $('#button3').val() === 'O') {
    oWon('#button1, #button2, #button3');
  } else if ($('#button4').val() === 'O' && $('#button5').val() === 'O' && $('#button6').val() === 'O') {
    oWon('#button4, #button5, #button6');
  } else if ($('#button7').val() === 'O' && $('#button8').val() === 'O' && $('#button9').val() === 'O') {
    oWon('#button7, #button8, #button9');
  } else if ($('#button1').val() === 'O' && $('#button5').val() === 'O' && $('#button9').val() === 'O') {
    oWon('#button1, #button5, #button9');
  } else if ($('#button3').val() === 'O' && $('#button5').val() === 'O' && $('#button7').val() === 'O') {
    oWon('#button3, #button5, #button7');
  } else if ($('#button2').val() === 'O' && $('#button5').val() === 'O' && $('#button8').val() === 'O') {
    oWon('#button2, #button5, #button8');
  } else if ($('#button1').val() === 'O' && $('#button4').val() === 'O' && $('#button7').val() === 'O') {
    oWon('#button1, #button4, #button7');
  } else if ($('#button3').val() === 'O' && $('#button6').val() === 'O' && $('#button9').val() === 'O') {
    oWon('#button3, #button6, #button9');
  }
}
// If either one wins the nobodyWon() function will run
function isWinnerNobody() {
  if (totalMoves === 0 && winner === null) {
    nobodyWon();
  }
}
