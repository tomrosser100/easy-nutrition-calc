import React from 'react'
import App from './App'
import './styles.css'
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app') as Element);

root.render(<App />);