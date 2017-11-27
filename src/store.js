import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';

export default (initialState) => {
  return createStore(rootReducer, initialState);
}
