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
          <div className='output-grid'>
            <div className='test-grid'></div>
          </div>
        </div>
        <div className='flex-item'>
          <div className='input-grid'>
            <div className='calibrate-grid'>
              <div className='sex'></div>
              <div className='age'></div>
              <div className='help'></div>
            </div>
            <div className='foods-grid'>
              <div className='top'>
                <div className='title'>Title</div>
                <div className='whitespace'></div>
                <div className='clear'>Clear</div>
                <div className='add'>
                  <Dialog />
                </div>
              </div>
              <div className='list'>
                <ul>
                  <li>
                    <div className='name'></div>
                    <div className='whitespace'></div>
                    <div className='edit'></div>
                    <div className='delete'></div>
                  </li>
                  <li>
                    <div className='name'></div>
                    <div className='whitespace'></div>
                    <div className='edit'></div>
                    <div className='delete'></div>
                  </li>
                  <li>
                    <div className='name'></div>
                    <div className='whitespace'></div>
                    <div className='edit'></div>
                    <div className='delete'></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bot-flex'></div>
    </div>
  )
}

/*

*/
