import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer';
import gameReducer from './game_reducer'

const rootReducer = combineReducers({
  cards: cardsReducer,
  game: gameReducer
});

export default rootReducer;
