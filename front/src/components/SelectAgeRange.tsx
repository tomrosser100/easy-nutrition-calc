import React, { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import eventEmitter from '../eventEmitter'
import type { AgeRange } from '../types'
import { StyledLabel, StyledSelect } from '../styledComponents'

export default () => {
  const [selectDisabled, setSelectDisabled] = useState(false)
  const navigate = useNavigate()

  const handleChange = async (e: ChangeEvent<any>) => {
    setSelectDisabled(true)

    const ageRange = e.target.value as AgeRange

    const response = await new Promise((resolve) => {
      eventEmitter.emit('updateAgeRange', ageRange, (response) => {
        resolve(response)
      })
    }) as { status: 'ok' | 'failed' }

    setSelectDisabled(false)

    return navigate('/')
  }

  return (
    <div className='inner'>
      <StyledLabel htmlFor='ageRange'>age range</StyledLabel>
      <StyledSelect disabled={selectDisabled} name='ageRange' id='ageRange' defaultValue='19' onChange={handleChange}>
        <option value='7'>7-10</option>
        <option value='11'>11-14</option>
        <option value='15'>15-18</option>
        <option value='19'>19-64</option>
        <option value='65'>65-74</option>
        <option value='75'>75+</option>
      </StyledSelect>
    </div>
  )
}
