import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouters from './routers/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
  <Provider store={store}>
    <AppRouters />
  </Provider>
  </React.StrictMode>
);