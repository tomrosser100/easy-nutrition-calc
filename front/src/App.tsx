import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default () => {

  return (
    <div id='app'>
      <div id='output'>Output</div>
      <Outlet />
      <div id='input'>Input</div>
    </div>
  )
}
