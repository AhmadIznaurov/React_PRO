import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";



const initilState = []


const reducer = (state = initilState, action) => {
    switch (action.type) {
        case 'load/list/fulfilled':
            return action.payload


        default:
            return state;
    }
};





const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <App />
      </Provider>

);

