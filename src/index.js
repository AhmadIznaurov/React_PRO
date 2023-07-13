import React from 'react';
import ReactDOM from 'react-dom/client'; // Добавлено client к react-dom и теперь 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux";





const root = ReactDOM.createRoot(document.getElementById('root')); // ReactDOM.createRoot - проблема исчезла.
root.render(
      <Provider store={store}>
          <App />
      </Provider>

);

