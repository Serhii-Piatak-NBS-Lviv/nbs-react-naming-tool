import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './i18n/config';
import store from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

if (module.hot) {
  module.hot.accept();
}

root.render(
  <React.StrictMode>
    <div className='global-navigation'></div>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
