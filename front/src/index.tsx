import React from 'react'
import './styles.css'
import './dialog-styles.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes)

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app') as Element);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);