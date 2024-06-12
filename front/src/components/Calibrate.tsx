import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../styledComponents'
import SelectAgeRange from './SelectAgeRange'
import SelectSex from './SelectSex'
import { useNavigate } from 'react-router-dom'

const StyledCalibrate = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  height: 100%;
  width: 100%;
  display: grid;
  min-width: 0px;
  min-height: 0px;
  grid-template-columns: 3fr 3fr 1fr;
  grid-template-rows: 1fr;
`

const StyledHelp = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`

export default () => {
  const navigate = useNavigate()

  return (
    <StyledCalibrate>
      <SelectSex />
      <SelectAgeRange />
      <StyledHelp>
        <StyledButton onClick={() => navigate('info')}>?</StyledButton>
      </StyledHelp>
    </StyledCalibrate>
  )
}