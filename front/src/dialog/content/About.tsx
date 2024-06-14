import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { StyledButton } from '../../styledComponents'
import { loremIpsum } from '../../constants'
import { StyledDescription, StyledHeader } from './Clear'

export const StyledInfo = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 1fr;
`

export const StyledInfoHead = styled.div`
  display: grid;
  place-items: center;
  padding: ${props => props.theme.majorSpacing}px;
`

export const StyledInfoBody = styled.div`
  display: grid;
  place-items: center;
`

export const StyledInfoFoot = styled.div`
  display: grid;
  place-items: center;
  padding: ${props => props.theme.majorSpacing}px;
`

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.borderColour};
  border-radius: ${(props) => props.theme.borderRadius}px;
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
    <StyledAbout>
      <StyledHeader id={labelId}>
        <div>About the app</div>
      </StyledHeader>
      <StyledDescription id={descriptionId}>
        <div>Hello and welcome to the first iteration of easynutritioncalc.com. This app is in active development - watch this space!</div>
      </StyledDescription>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Return</StyledButton>
      </StyledInfoFoot>
    </StyledAbout>
  )
}
