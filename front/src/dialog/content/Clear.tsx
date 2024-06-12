import React from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import { emitter } from '../Dialog'
import styled from 'styled-components'
import { StyledButtons } from './EditButtons'
import { StyledButton } from '../../styledComponents'

export async function clearAction({ request }: { request: any }) {
  emitter.emit('buttonDisabled', true)
  const response = (await new Promise((resolve) => {
    eventEmitter.emit('clear', (response) => {
      resolve(response)
    })
  })) as { status: 'ok' | 'failed' }
  if (response.status === 'failed') {
    emitter.emit('buttonDisabled', false)
    return response
  }
  return redirect('/')
}

export const StyledClear = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  background-color: rgb(0, 0, 255, 0.1);
`


export default ({
  labelId,
  descriptionId,
  buttonDisabled,
}: {
  labelId: string
  descriptionId: string
  buttonDisabled: boolean
}) => {
  const error = useActionData() as { status: 'failed' }
  const navigate = useNavigate()

  return (
    <Form method='post'>
        <StyledClear>
          <div id={labelId}>
            Clear All
          </div>
          <div id={descriptionId}>
            Careful! Are you sure you want to clear all and start again?
          </div>
          <StyledButtons>
            <StyledButton disabled={buttonDisabled} type='submit'>
              Clear
            </StyledButton>
            <StyledButton disabled={buttonDisabled} onClick={() => navigate('/')}>
              Cancel
            </StyledButton>
          </StyledButtons>
        </StyledClear>
      {error?.status && <p>Something went wrong...</p>}
    </Form>
  )
}
