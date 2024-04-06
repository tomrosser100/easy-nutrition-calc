import React from 'react'
import { createRoot } from 'react-dom/client';

console.log('react has run')

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world REACT</h1>);