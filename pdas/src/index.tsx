import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

const el = document.getElementById('root') as Element;
const root = ReactDom.createRoot(el);

root.render(<App />);
