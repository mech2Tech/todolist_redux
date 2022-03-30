import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const todoList = [
  { id: 0, title: 'Wash Cloths', done: false },
  { id: 1, title: 'Do Laundry', done: true }
]
const reducer = 
  (store = { items: todoList, newItem: '' }, action) => 
    {
      return store;
    }
const store = createStore(reducer)

ReactDOM.render(
  <StrictMode>
    <Provider store = {store}> <App /> </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

