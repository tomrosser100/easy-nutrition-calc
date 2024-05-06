import React from 'react'
import App, { loader as appLoader } from './App'
import ErrorPage from './ErrorPage'
import Dialog from './dialog/Add'
import Add, { loader as editLoader, addAction, editAction } from './dialog/Add'

export default [
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'add',
        element: <Add />,
        action: addAction
      },
      {
        path: 'edit/:id',
        element: <Add />,
        loader: editLoader,
        action: editAction
      }
    ],
  },
]
