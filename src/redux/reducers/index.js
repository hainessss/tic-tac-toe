import { combineReducers } from 'redux';
import game, * as gameSelectors from './game';
import history from './history';
import modal from './modal';


export function checkForStalemate(store) {
  return gameSelectors.checkForStalemate(store.game);
}

export function getWinner(store) {
  return gameSelectors.getWinner(store.game);
}

export default combineReducers({ game, history, modal });
