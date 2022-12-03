import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import carsReducer from "./features/carsSlice";
import cartReducer, { getTotals } from './features/CartSlice';
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
    reducer:{
        cars: carsReducer,
        cart: cartReducer,
    }
});
store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
