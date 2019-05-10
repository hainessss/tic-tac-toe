export const initState = [];

const history = (state = initState, action) => {
  switch (action.type) {
    case 'ARCHIVE_GAME': {
      return [...state, action.game];
    }
    default: {
      return state;
    }
  }
};

export default history;
