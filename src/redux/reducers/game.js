export const init = {
  players: [],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  currentPlayerIndex: 0
};

const symbols = ['X', 'O'];

const game = (state = init, action) => {
  switch (action.type) {
    case 'MOVE': {
      // Deep copy the board, duplicating each row.
      // https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a
      const newBoard = [...state.board.map(row => [...row])];
      const playerIndex = state.currentPlayerIndex;
      newBoard[action.row][action.column] = symbols[playerIndex];

      return {
        ...state,
        board: newBoard,
        currentPlayerIndex: (playerIndex + 1) % 2
      };
    }
    case 'ADD_PLAYER': {
      return {
        ...state,
        players: [...state.players, action.playerName]
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

export default game;
