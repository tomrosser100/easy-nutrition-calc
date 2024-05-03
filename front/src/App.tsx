import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Dialog from './Dialog'

export default () => {
  return (
    <div id='app'>
      <div className='nav-flex'>
        <div className='about'>about</div>
      </div>
      <div className='flex-container'>
        <div className='flex-item'>
          <div className='output-grid'></div>
        </div>
        <div className='flex-item'>
          <div className='input-grid'>
            <div className='calibrate-grid'>
              <div className='sex'></div>
              <div className='age'></div>
              <div className='help'></div>
            </div>

            <div className='foods-grid'></div>
          </div>
        </div>
      </div>
      <div className='bot-flex'>
        <Dialog />
      </div>
    </div>
  )
}

/*

*/
