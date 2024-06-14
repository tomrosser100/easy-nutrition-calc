import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../styledComponents'
import { appMaxWidth, appMinWidth } from '../constants'

const StyledNavLayout = styled.div`
  margin: auto;
  max-width: ${appMaxWidth}px;
  min-width: ${appMinWidth}px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${(props) => props.theme.majorSpacing}px;
  border-radius: ${(props) => props.theme.borderRadius}px;
  border: 1px solid ${props => props.theme.borderColour};

  background-color: ${props => props.theme.bg};
`

const StyledAppTitle = styled.div`
  place-self: center;
  padding: 10px;
`

const StyledAbout = styled.div`
    width: 80px;
    display: grid;
    place-items: center;
    padding: 10px;
`

export default () => {
  const navigate = useNavigate()

  return (
    <StyledNavLayout>
      <StyledAppTitle>Easy Nutrition Calc</StyledAppTitle>
      <StyledAbout>
        <StyledButton onClick={() => navigate('about')}>about</StyledButton>
      </StyledAbout>
    </StyledNavLayout>
  )
}
