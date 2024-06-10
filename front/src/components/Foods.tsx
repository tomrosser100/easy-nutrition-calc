import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { ListElement } from '../types'
import styled from 'styled-components'

const StyledFoods = styled.div`
  grid-area: 'foods';
  background-color: rgb(0, 0, 255, 0.1);
  height: 100%;
  width: 100%;
  place-self: center;
  display: grid;
  min-width: 0px;
  min-height: 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas: 'top' 'list';
`

export default ({ list }: { list: ListElement[] }) => {
  const navigate = useNavigate()

  return (
    <StyledFoods>
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
          {/*                  <li>
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
                  </li>*/}
        </ul>
      </div>
    </StyledFoods>
  )
}
