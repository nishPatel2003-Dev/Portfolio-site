import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

const redirectPath = sessionStorage.redirect;
if (redirectPath) {
    delete sessionStorage.redirect;
    window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={'/Portfolio-site'}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
