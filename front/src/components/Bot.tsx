import React from 'react'
import styled from 'styled-components'
import { appMaxWidth, appMinWidth } from '../constants'

const StyledBot = styled.div`
  margin: auto;
  min-width: ${appMinWidth};
  max-width: ${appMaxWidth};
  width: 100%;
  height: 60px;
  background-color: rgb(0, 128, 0, 0.5);
`

export default () => {
  return <StyledBot className='bot-flex'></StyledBot>
}
