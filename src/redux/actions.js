export const move = (row, column) => ({
  type: 'MOVE', row, column
});

export const editPlayerName = (playerNumber, playerName) => ({
  type: 'EDIT_PLAYER_NAME', playerName, playerNumber
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
