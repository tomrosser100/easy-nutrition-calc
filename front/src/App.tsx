import React, { useEffect } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import eventEmitter from './eventEmitter'
import type {
  AgeRange,
  ListElement,
  Nutrient,
  OrderedContribution,
  Sex,
  StoreData,
} from './types'
import SelectAgeRange from './components/SelectAgeRange'
import SelectSex from './components/SelectSex'

export async function loader() {
  console.log('app loader fired')
  const response = (await new Promise((resolve) => {
    eventEmitter.emit('retrieve', (response: StoreData) => {
      resolve(response)
    })
  })) as StoreData
  console.log(response)
  return response
}

export default () => {
  const navigate = useNavigate()
  const { sex, ageRange, list, userReport } = useLoaderData() as StoreData

  useEffect(() => {
    function fillEdit(id: string, callback: (response: ListElement) => void) {
      return callback(getListElementById(id))
    }

    function fillMore(
      nutrient: Nutrient,
      callback: (response: OrderedContribution) => void
    ) {
      return callback(userReport[nutrient].orderedContributors as OrderedContribution)
    }

    eventEmitter.on('fillEdit', fillEdit)
    eventEmitter.on('fillMore', fillMore)

    return () => {
      eventEmitter.off('fillEdit', fillEdit)
      eventEmitter.off('fillMore', fillMore)
    }
  })

  const getListElementById = (id: string) => {
    let target = {}
    list.forEach((entry) => {
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
                {Object.keys(userReport).map((nutrient, i) => (
                  <li key={i}>
                    <div className='nutrient'>{nutrient}</div>
                    <div className='advice'>
                      {userReport[nutrient].advice.operator}
                      {userReport[nutrient].advice.grams}
                    </div>
                    <div className='you'>
                      {userReport[nutrient].total}
                      <button onClick={() => navigate('more/' + nutrient)}>
                        More
                      </button>
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
                  {list.map((entry, i) => (
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
