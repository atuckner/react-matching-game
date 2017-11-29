import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store';

import generateCards from './utils/generateCards';

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
