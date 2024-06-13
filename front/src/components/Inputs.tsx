import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import type { ListElement } from '../types'
import Calibrate from './Calibrate'
import Foods from './Foods'

const StyledInputs = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
`

export default ({ list }: { list: ListElement[] }) => {
  return (
    <StyledInputs>
      <Calibrate />
      <Foods list={list} />
    </StyledInputs>
  )
}
