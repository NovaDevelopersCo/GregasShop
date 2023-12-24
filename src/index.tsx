import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { store } from './redux/store';

const rootElem = document.getElementById('root');

 if (rootElem) { 
  const root = (ReactDOM as any).createRoot(rootElem);
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Toaster 
        toastOptions={{ 
          duration: 1400,
        }}/>
        <App />
      </BrowserRouter>
    </Provider>
    // </React.StrictMode>
  );
  
 }