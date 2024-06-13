import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, StyledHeader } from '../styledComponents'

const StyledHead = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-rows: 1fr;
  //border-bottom: 1px solid ${props => props.theme.borderColour};
  //padding: ${props => props.theme.minorSpacing}px;
`

const StyledTitle = styled.div`
  display: grid;
  justify-items: left;
  align-items: center;
  padding-left: 5px;
`

const StyledClear = styled.div`
  display: grid;
  place-items: center;
  padding: 5px;
`

const StyledAdd = styled.div`
  display: grid;
  place-items: center;
  padding: 5px;
`



export default () => {
  const navigate = useNavigate()

  return (
    <StyledHead>
      <StyledTitle>
        <StyledHeader>Your Food</StyledHeader>
      </StyledTitle>
      <StyledClear>
        <StyledButton onClick={() => navigate('clear')}>clear</StyledButton>
      </StyledClear>
      <StyledAdd>
        <StyledButton onClick={() => navigate('add')}>add</StyledButton>
      </StyledAdd>
    </StyledHead>
  )
}
