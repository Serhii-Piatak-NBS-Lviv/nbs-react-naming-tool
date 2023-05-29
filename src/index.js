import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './i18n/config';
import store from './app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();

// if (module.hot) {
//   module.hot.accept();
// }

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
