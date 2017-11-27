import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store';

const AppStore = Store();

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
