import React from 'react'
import type { ListElement } from '../../types'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../../styledComponents'

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  //border-radius: ${props => props.theme.borderRadius}px;
  //border: 1px solid ${props => props.theme.borderColour};
  padding: ${props => props.theme.minorSpacing}px;

`

export default ({
  buttonDisabled,
  listElement,
}: {
  buttonDisabled: boolean
  listElement: ListElement
}) => {
  const navigate = useNavigate()

  return (
    <StyledButtons>
    <StyledButton disabled={buttonDisabled} type='submit'>
      {listElement === undefined ? 'Add' : 'Save'}
    </StyledButton>
    <StyledButton disabled={buttonDisabled} onClick={() => navigate('/')}>
      Cancel
    </StyledButton>
  </StyledButtons>
  )
}