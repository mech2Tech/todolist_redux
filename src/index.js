import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = 
  (store = [{ id: 0, title: 'Wash Clothes', done: false }], action) => {
    switch (action.type) {
      case 'HANDLE_CHANGE':
        return [...store,
          {
            id: store.length +1,
            title: action.title,
            done: false
        }]
      case 'ADD_ITEM':
        return[...store]
      default:
        return store;
    }
  }
const store = createStore(reducer)

ReactDOM.render(
  <StrictMode>
    <Provider store = {store}> 
      <App /> 
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

