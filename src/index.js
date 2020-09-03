import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CartProvider from './providers/cart/cart.provider.jsx';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
