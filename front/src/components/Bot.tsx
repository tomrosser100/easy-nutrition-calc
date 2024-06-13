import React from 'react'
import styled from 'styled-components'
import { appMaxWidth, appMinWidth } from '../constants'

const StyledBot = styled.div`
  margin: auto;
  min-width: ${appMinWidth}px;
  max-width: ${appMaxWidth}px;
  width: 100%;
  height: 60px;
  margin-top: ${(props) => props.theme.majorSpacing}px;
  border-radius: ${props => props.theme.borderRadius}px;
`

export default () => {
  return <StyledBot className='bot-flex'></StyledBot>
}
