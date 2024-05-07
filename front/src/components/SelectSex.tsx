import React, { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import eventEmitter from '../eventEmitter'
import type { Sex } from '../types'

export default () => {
  const [radioDisabled, setRadioDisabled] = useState(false)
  const navigate = useNavigate()

  const handleChange = async (e: ChangeEvent<any>) => {
    setRadioDisabled(true)

    const sex = e.target.value as Sex
    if (sex !== 'male' && sex !== 'female') throw new Error()

    const response = await new Promise((resolve) => {
      eventEmitter.emit('updateSex', sex, (response) => {
        resolve(response)
      })
    }) as { status: 'ok' | 'failed' }

    setRadioDisabled(false)

    return navigate('/')
  }

  return (
    <div>
      <label htmlFor='male'>male</label>
      <input
        disabled={radioDisabled}
        type='radio'
        id='male'
        name='sex'
        value='male'
        onChange={handleChange}
      />
      <label htmlFor='female'>female</label>
      <input
        disabled={radioDisabled}
        type='radio'
        id='female'
        name='sex'
        value='female'
        onChange={handleChange}
        defaultChecked
      />
    </div>
  )
}
