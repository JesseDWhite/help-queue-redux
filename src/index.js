import React from 'react';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reactDom from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/ticket-list-reducer';

const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState()));

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);

reportWebVitals();
