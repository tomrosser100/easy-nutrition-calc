import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../styledComponents'

const StyledNavLayout = styled.div`
  margin: auto;
  max-width: 1000px;
  min-width: 350px;
  height: 60px;
  background-color: rgb(0, 128, 0, 0.5);
  display: flex;
  justify-content: flex-end;
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
