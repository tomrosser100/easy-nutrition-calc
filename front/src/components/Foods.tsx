import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { ListElement } from '../types'
import styled from 'styled-components'
import Head from './Head'
import List from './List'

const StyledFoods = styled.div`
  height: 100%;
  width: 100%;
  place-self: center;
  display: grid;
  min-width: 0px;
  min-height: 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 7fr;
`

export default ({ list }: { list: ListElement[] }) => {
  return (
    <StyledFoods>
      <Head />
      <List list={list} />
    </StyledFoods>
  )
}
