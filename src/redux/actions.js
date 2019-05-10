export const move = (row, column) => ({
  type: 'MOVE', row, column
});

export const addPlayer = playerName => ({
  type: 'ADD_PLAYER', playerName,
});

export const resetGame = () => ({
  type: 'RESET_GAME'
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL'
});

export const archiveGame = (game) => ({
  type: 'ARCHIVE_GAME',
  game
});

export const setModal = (modal) => ({
  type: 'SET_MODAL',
  modal
});
