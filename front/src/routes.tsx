import React from 'react'
import App from './App'
import ErrorPage from './ErrorPage'
import Dialog from './dialog/Add'

export default [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'add',
        element: <Dialog />,
      },
    ],
  },
]
