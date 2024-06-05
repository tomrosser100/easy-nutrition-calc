import React from 'react'
import App, { loader as appLoader } from './App'
import ErrorPage from './ErrorPage'
import Dialog from './dialog/Dialog'
import { loader as editLoader, editAction, addAction } from './dialog/content/Edit'
import { loader as moreLoader } from './dialog/content/More'
import { clearAction } from './dialog/content/Clear'
import { deleteAction } from './dialog/content/Delete'

export default [
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'add',
        element: <Dialog type='edit' />,
        action: addAction,
      },
      {
        path: 'edit/:id',
        element: <Dialog type='edit' />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: 'more/:nutrient',
        element: <Dialog type='more' />,
        loader: moreLoader,
      },
      {
        path: 'clear',
        element: <Dialog type='clear' />,
        action: clearAction,
      },
      {
        path: 'delete/:id',
        element: <Dialog type='delete' />,
        action: deleteAction,
      },
      {
        path: 'about',
        element: <Dialog type='about' />,
      },
      {
        path: 'info',
        element: <Dialog type='info' />
      }
    ],
  },
]
