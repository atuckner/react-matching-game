import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store';

import shuffleArray from './utils/shuffle';

function generateCards() {
  let cards = ['sun-o', 'tree', 'leaf', 'key', 'globe', 'flash', 'anchor', 'camera-retro'].reduce((result, current) => {
    return result.concat([{icon: current, selected: false, matched: false}, {icon: current, selected: false, matched: false}]);
  }, []);

  return shuffleArray(cards)
}

const initialState = {
  cards: generateCards(),
  game: {guesses: 0, matches: 0}
};

const AppStore = Store(initialState);

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
