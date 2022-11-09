import { Provider } from 'react-redux';
import { store } from './store';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/normalize.css';
import './styles/root.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
