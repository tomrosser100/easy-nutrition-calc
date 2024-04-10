import React from 'react'
import { Outlet } from 'react-router-dom'

export default () => {
  return (
    <div>
      <div id='output'>Output</div>
      <Outlet />
      <div id='input'>Input</div>
    </div>
  )
}
