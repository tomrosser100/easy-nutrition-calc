import React from 'react'
import App from './App'
import ErrorPage from './ErrorPage'

export default [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'add',
        element: <div id='popup'>Popup</div>
      }
    ],
  }
]