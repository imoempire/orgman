import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Org from './Org';
import reportWebVitals from './reportWebVitals';
import store from './store/Store'
import './App.css';
import './Todo.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Org />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
