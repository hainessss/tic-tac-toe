import isNumber from 'lodash/isNumber';

export default function checkForWin(board, player, [x, y]) {
  if (!isNumber(x) || !isNumber(y)) return false;
  
  var isWin = false;
  
  var spaces = [...getVerticalSpaces(board, x), ...getHorizontalSpaces(board, y), ...getDiagonalSpaces(board)];
  var count = 0;
  var numConsecutive = 0;

  for (var index = 0; index < spaces.length; index++) {
    count++;

    if (count === 3) {
      count = 0;
    }

    const space = spaces[index];

    if (space === player) {
      numConsecutive++;
    } else {
      numConsecutive = 0;
    }

    if (numConsecutive === 3) {
      isWin = true;
      break;
    }
  }

  return isWin;
}

function getDiagonalSpaces(board) {
  var flattenedBoard = board.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);

  return [0,4,8,2,4,6].map((index) => flattenedBoard[index]);
}

function getVerticalSpaces(board, x) {
  return board.map(row => row[x]);
}

function getHorizontalSpaces(board, y) {
  return board[y];
}