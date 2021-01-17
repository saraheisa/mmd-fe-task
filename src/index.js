import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchData, fetchCategory, fetchCart } from './actions';

const getCart = () => {
  try {
    const s = localStorage.getItem("cart");
    if (s === null) return [];
    return JSON.parse(s);
  } catch (e) {
    return [];
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchData());
store.dispatch(fetchCategory());
store.dispatch(fetchCart(getCart()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
