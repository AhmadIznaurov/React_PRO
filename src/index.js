import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";



const initialState = {
    photos: [],
    loading: false,
    items: [],

}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'load/list/start':
            return {

                ...state,

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

                photos: action.payload

            }

        case 'DELETE_ITEMS':
            return {
                ...state,
                items: action.payload
            }

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

