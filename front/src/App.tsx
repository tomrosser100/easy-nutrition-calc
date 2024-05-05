import React, { useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Add from './dialog/Add'
import Confirm from './dialog/Confirm'
import Inform from './dialog/Inform'
import eventEmitter from './eventEmitter'
import type { ListElement } from './types'

export async function loader() {
  console.log('app loader fired')
  const response = await new Promise((resolve) => {
    eventEmitter.emit('getAll', (response: ListElement[]) => {
      resolve(response)
    })
  })
  console.log(response)
  return response
}

export default () => {
  const navigate = useNavigate()
  const data = useLoaderData() as ListElement[]

  const sum = (data: ListElement[]) => {
    // get all numbers
    let numbers = [] as number[]
    data.forEach(entry => numbers.push(Number(entry.num)))
    return numbers.reduce((accumulator, current) => accumulator + current, 0)
  }

  return (
    <div id='app'>
      <Outlet />
      <div className='nav-flex'>
        <div className='about'>{/*<Inform />*/}</div>
      </div>
      <div className='flex-container'>
        <div className='flex-item'>
          <div className='output-grid'>
            <div className='test-grid'>{sum(data)}</div>
          </div>
        </div>
        <div className='flex-item'>
          <div className='input-grid'>
            <div className='calibrate-grid'>
              <div className='sex'></div>
              <div className='age'></div>
              <div className='help'>{/*<Inform />*/}</div>
            </div>
            <div className='foods-grid'>
              <div className='top'>
                <div className='title'>Title</div>
                <div className='whitespace'></div>
                <div className='clear'>{/*<Confirm />*/}</div>
                <div className='add'>
                  <button onClick={() => navigate('add')}>add</button>
                </div>
              </div>
              <div className='list'>
                <ul>
                  {data.map((entry, i) => (
                    <li key={i}>
                      <div className='name'>{entry.name}</div>
                      <div className='whitespace'></div>
                      <div className='edit'></div>
                      <div className='delete'></div>
                    </li>
                  ))}
                  <li>
                    <div className='name'></div>
                    <div className='whitespace'></div>
                    <div className='edit'></div>
                    <div className='delete'>{/*<Confirm />*/}</div>
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
