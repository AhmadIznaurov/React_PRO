import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";



const initilState = {
    photos: [],
    loading: false
}


const reducer = (state = initilState, action) => {
    switch (action.type) {

        case 'load/list/start':
            return {
                ...state,
                loading: true
            }

        case 'load/list/fulfilled':
            return {
               ...state,
                photos: action.payload,
                loading: false
            }

        case 'delete/list/fulfilled':
            return {
                ...state,
                photos: state.photos.filter((list) => list.id !== action.payload)
            }


        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <App />
      </Provider>

);

// It was not real fun when the www.render send the strange error