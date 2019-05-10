export const initState = {};

const modal = (state = initState, action) => {
  switch (action.type) {
    case 'SET_MODAL': {
      return action.modal;
    }
    default: {
      return state;
    }
  }
};

export default modal;
