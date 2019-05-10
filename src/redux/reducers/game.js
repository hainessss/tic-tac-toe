import flatten from 'lodash/flatten';
import checkForWinner from '../../utils/checkForWinner.js';

export const init = {
  players: ['', ''],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  currentPlayerIndex: 0,
  lastMoveCoords: [],
};

const symbols = ['X', 'O'];

const game = (state = init, action) => {
  switch (action.type) {
    case 'MOVE': {
      // Deep copy the board, duplicating each row.
      // https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a
      const newBoard = [...state.board.map(row => [...row])];
      const playerIndex = state.currentPlayerIndex;

      if (!newBoard[action.row][action.column]) {
        newBoard[action.row][action.column] = symbols[playerIndex];
      }

      return {
        ...state,
        board: newBoard,
        lastMoveCoords: [action.column, action.row],
        currentPlayerIndex: getOtherPlayer(playerIndex),
      };
    }
    case 'EDIT_PLAYER_NAME': {
      const player = action.playerNumber;
      const name   = action.playerName;

      const players = [...state.players];
      players[player] = name;

      return {
        ...state,
        players: players
      };
    }
    case 'RESET_GAME': {
      return init;
    }
    default: {
      return state;
    }
  }
};

/** helpers */

export function getOtherPlayer(playerIndex) {
  return (playerIndex + 1) % 2;
}

/** Selectors */

export function numRemainingMoves(game) {
  return flatten(game.board).filter(space => (space === null)).length;
}

export function checkForStalemate(game) {
 return (!numRemainingMoves(game) && !getWinner(game));
}

export function getWinner(game) {
  // only check the impact of the last move when looking for win, not the whole board state.
  const lastPlayerIndex = getOtherPlayer(game.currentPlayerIndex);
  const lastSymbol = symbols[lastPlayerIndex];
  const isWin = checkForWinner(game.board, lastSymbol, game.lastMoveCoords);

  return isWin ? game.players[lastPlayerIndex] : null;
}


export default game;
