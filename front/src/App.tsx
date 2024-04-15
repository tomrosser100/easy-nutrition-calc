import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Dialog from './Dialog'

export default () => {

  return (
    <div id='app'>
      <div id='output'>
        <div id='output_1'>
          <div id='output_1a'></div>
        </div>
        </div>
      <div id='input'>
        <div id='input_1'>
          <div id='input_1a'>
            <div id='input_1a_1'></div>
            <div id='input_1a_2'>
              {/*<button id='add' type="submit">ADD</button>*/}
              <Dialog />
            </div>
          </div>
          <div id='input_1b'></div>
        </div>
      </div>
    </div>
  )
}
