import React from 'react'
import styled from 'styled-components'
import type { ListElement } from '../../types'

const StyledHeader = styled.div`
  display: grid;
  border-radius: ${props => props.theme.borderRadius}px;
  border: 1px solid ${props => props.theme.borderColour};
  padding: ${props => props.theme.minorSpacing}px;

`

const StyledTitle = styled.div`
  display: grid;
  place-items: center;
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
