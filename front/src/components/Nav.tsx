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
  background-color: rgb(0, 128, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${(props) => props.theme.majorSpacing}px;
  border-radius: ${(props) => props.theme.borderRadius}px;
`

const StyledAbout = styled.div`
    width: 125px;
    background-color: rgb(0, 0, 255, 0.1);
    display: grid;
    place-items: center;
`

export default () => {
  const navigate = useNavigate()

  return (
    <StyledNavLayout>
      <StyledAbout>
        <StyledButton onClick={() => navigate('about')}>about</StyledButton>
      </StyledAbout>
    </StyledNavLayout>
  )
}
