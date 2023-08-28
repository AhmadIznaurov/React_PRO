import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import { App } from './App'
import { store } from './redux'



const root = ReactDOM.createRoot(document.getElementById('root'));




const root = ReactDOM.createRoot(document.getElementById('root')); // ReactDOM.createRoot - проблема исчезла.


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

        case 'delete/list/start':
            return {
                ...state,
                photos: state.photos.map(list => {
                    if(list.id === action.payload) {
                        return {
                            ...list,
                            deleting: true
                        }
                    }
                    return list
                })
            }

        case 'delete/list/fulfilled':
            return {
                ...state,
                photos: state.photos.filter((list) => list.id !== action.payload)

                photos: action.payload

            }


            case 'add/load/success':
                return  {
                    ...state,
                  photos: state.photos.map((list) => {
                      if (list && list.id === action.payload) {
                          return  {
                              ...list,
                            id: !list.id
                          }
                      }
                      return list;
                  })
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

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
      <Provider store={store}>
          <App />
      </Provider>

);

