import { combineReducers } from 'redux';
import game from './game';
import history from './history';
import modal from './modal';

export default combineReducers({ game, history, modal });
