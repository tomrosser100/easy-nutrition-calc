import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { StyledButton } from '../../styledComponents'
import { loremIpsum } from '../../constants'

export const StyledInfo = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  background-color: rgb(0, 0, 255, 0.1);
`

export const StyledInfoHead = styled.div`
  display: grid;
  place-items: center;
`

export const StyledInfoBody = styled.div`
  display: grid;
  place-items: center;
`

export const StyledInfoFoot = styled.div`
  display: grid;
  place-items: center;
`

export default ({
  labelId,
  descriptionId,
}: {
  labelId: string
  descriptionId: string
}) => {
  const navigate = useNavigate()

  return (
    <StyledInfo>
      <StyledInfoHead id={labelId}>
        <div>Heading element: About my app</div>
      </StyledInfoHead>
      <StyledInfoBody id={descriptionId}>
        <div>Hi and welcome to my app {loremIpsum}</div>
      </StyledInfoBody>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Return</StyledButton>
      </StyledInfoFoot>
    </StyledInfo>
  )
}
