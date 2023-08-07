import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './i18n/config';
import store from './app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { Loader } from './features/Loader/Loader';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();

const AppWithDelay = () => {
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComponentLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {isComponentLoaded ? <App /> : <Loader />}
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
};

root.render(<AppWithDelay />);
