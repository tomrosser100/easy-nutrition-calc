import React, { useEffect } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import eventEmitter from './eventEmitter'
import type { AgeRange, ListElement, Sex, StoreData } from './types'
import SelectAgeRange from './components/SelectAgeRange'
import SelectSex from './components/SelectSex'

export async function loader() {
  console.log('app loader fired')
  const response = (await new Promise((resolve) => {
    eventEmitter.emit('retrieve', (response: StoreData) => {
      resolve(response)
    })
  })) as StoreData

  return response
}

const sum = (data: ListElement[], sex: Sex, ageRange: AgeRange) => {
  let numbers = [] as number[]
  console.log(data)
  data.forEach((entry) => numbers.push(Number(entry.num)))
  let value = numbers.reduce((accumulator, current) => accumulator + current, 0)

  if (ageRange === '7') value = value + 1
  if (ageRange === '11') value = value + 2
  if (ageRange === '15') value = value + 3
  if (ageRange === '19') value = value + 4
  if (ageRange === '65') value = value + 5
  if (ageRange === '75') value = value + 6

  if (sex === 'male') value = value * 100
  if (sex === 'female') value = value * 1000

  return value
}

export default () => {
  const navigate = useNavigate()
  const data = useLoaderData() as StoreData
  const displayData = [
    {
      nutrient: 'Carbohydrate',
      advice: {
        operator: 'not more than',
        grams: 30,
      },
      user: {
        grams: 16,
        contributors: [
          { name: 'mushroom', grams: 0.7 },
          { name: 'spoonfork', grams: 0.5 },
        ],
      },
    },
  ]

  useEffect(() => {
    function fill(id: string, callback: (response: ListElement) => void) {
      return callback(getListElementById(id))
    }

    eventEmitter.on('fill', fill)

    return () => {
      eventEmitter.off('fill', fill)
    }
  })

  const getListElementById = (id: string) => {
    let target = {}
    data.list.forEach((entry) => {
      if (entry.id === id) {
        return (target = entry)
      }
    })
    return target as ListElement
  }

  return (
    <div id='app'>
      <Outlet />
      <div className='nav-flex'>
        <div className='about'>
          <button onClick={() => navigate('about')}>about</button>
        </div>
      </div>
      <div className='flex-container'>
        <div className='flex-item'>
          <div className='output-grid'>
            <div className='table-grid'>
              <ul>
                <li>
                  <div className='nutrient'>nutrient</div>
                  <div className='advice'>advice</div>
                  <div className='you'>you</div>
                </li>
                {displayData.map((entry, i) => (
                  <li>
                    <div className='nutrient'>{entry.nutrient}</div>
                    <div className='advice'>
                      {entry.advice.operator}
                      {entry.advice.grams}
                    </div>
                    <div className='you'>
                      {entry.user.grams}
                      <button onClick={() => navigate(entry.nutrient.toLowerCase())}>More</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex-item'>
          <div className='input-grid'>
            <div className='calibrate-grid'>
              <div className='sex'>
                <SelectSex />
              </div>
              <div className='age'>
                <SelectAgeRange />
              </div>
              <div className='help'>
                <button onClick={() => navigate('info')}>?</button>
              </div>
            </div>
            <div className='foods-grid'>
              <div className='top'>
                <div className='title'>Title</div>
                <div className='whitespace'></div>
                <div className='clear'>
                  <button onClick={() => navigate('clear')}>clear</button>
                </div>
                <div className='add'>
                  <button onClick={() => navigate('add')}>add</button>
                </div>
              </div>
              <div className='list'>
                <ul>
                  {data.list.map((entry, i) => (
                    <li key={i}>
                      <div className='name'>{entry.name}</div>
                      <div className='whitespace'></div>
                      <div className='edit'>
                        <button onClick={() => navigate(`edit/` + entry.id)}>
                          edit
                        </button>
                      </div>
                      <div className='delete'>
                        <button onClick={() => navigate('delete/' + entry.id)}>
                          del
                        </button>
                      </div>
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
