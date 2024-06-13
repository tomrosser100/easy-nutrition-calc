import React from 'react'
import styled from 'styled-components'
import type { ListElement } from '../../types'

const StyledHeader = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: grid;
  border-radius: ${props => props.theme.borderRadius}px;
  border: 1px solid ${props => props.theme.borderColour};
  padding: ${props => props.theme.minorSpacing}px;

`

const StyledTitle = styled.div`
  display: grid;
  place-items: center;
  background-color: rgb(0, 0, 255, 0.1);
`

export default ({
  labelId,
  listElement,
  descriptionId,
}: {
  labelId: string
  descriptionId: string
  listElement: ListElement
}) => {
  return (
    <StyledHeader>
      <StyledTitle id={labelId}>
        {listElement === undefined ? 'Add' : 'Edit'} Food
      </StyledTitle>
    </StyledHeader>
  )
}
