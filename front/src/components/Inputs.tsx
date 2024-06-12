import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { StyledButton } from '../styledComponents'
import SelectAgeRange from './SelectAgeRange'
import SelectSex from './SelectSex'
import type { ListElement } from '../types'
import Calibrate from './Calibrate'
import Foods from './Foods'

const StyledInputs = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
  background-color: rgb(0, 0, 255, 0.1);
`

export default ({ list }: { list: ListElement[] }) => {
  const navigate = useNavigate()

  return (
    <StyledInputs>
      <Calibrate />
      <Foods list={list} />
    </StyledInputs>
  )
}