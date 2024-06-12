import React from 'react'
import type { ListElement } from '../../types'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../../styledComponents'

export const StyledButtons = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: flex;
  justify-content: space-evenly;
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