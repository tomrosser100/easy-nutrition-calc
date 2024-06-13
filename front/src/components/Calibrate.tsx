import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../styledComponents'
import SelectAgeRange from './SelectAgeRange'
import SelectSex from './SelectSex'
import { useNavigate } from 'react-router-dom'

const StyledCalibrate = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  min-width: 0px;
  min-height: 0px;
  grid-template-columns: 3fr 3fr 1fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid ${props => props.theme.borderColour};
  //padding: ${props => props.theme.minorSpacing}px;
`

const StyledHelp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: 5px;
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