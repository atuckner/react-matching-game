import { createStore } from 'redux';
import gameReducer from './reducers/game_reducer';

export default (initialState) => {
  return createStore(gameReducer, initialState);
}
