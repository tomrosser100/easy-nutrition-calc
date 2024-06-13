import React, { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import eventEmitter from '../eventEmitter'
import type { Sex } from '../types'
import {
  StyledCentralised,
  StyledInput,
  StyledLabel,
  StyledRadio,
  theme,
} from '../styledComponents'
import styled from 'styled-components'

const StyledSex = styled(StyledCentralised)`
  background-color: rgb(0, 0, 255, 0.1);
  border-right: 0.5px solid ${props => props.theme.borderColour};
`
export default () => {
  const [radioDisabled, setRadioDisabled] = useState(false)
  const navigate = useNavigate()

  const handleChange = async (e: ChangeEvent<any>) => {
    setRadioDisabled(true)

    const sex = e.target.value as Sex
    if (sex !== 'male' && sex !== 'female') throw new Error()

    const response = (await new Promise((resolve) => {
      eventEmitter.emit('updateSex', sex, (response) => {
        resolve(response)
      })
    })) as { status: 'ok' | 'failed' }

    setRadioDisabled(false)

    return navigate('/')
  }

  return (
    <StyledSex>
      <StyledLabel htmlFor='male'>male</StyledLabel>
      <StyledRadio
        disabled={radioDisabled}
        type='radio'
        id='male'
        name='sex'
        value='male'
        onChange={handleChange}
      />
      <StyledLabel htmlFor='female'>female</StyledLabel>
      <StyledRadio
        disabled={radioDisabled}
        type='radio'
        id='female'
        name='sex'
        value='female'
        onChange={handleChange}
        defaultChecked
      />
    </StyledSex>
  )
}
