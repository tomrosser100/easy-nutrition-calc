import React from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import { emitter } from '../Dialog'
import { StyledClear, StyledDescription, StyledHeader } from './Clear'
import { StyledButtons } from './EditButtons'
import { StyledButton } from '../../styledComponents'

export async function deleteAction({ params }: { params: { id?: string } }) {
  emitter.emit('buttonDisabled', true)

  const response = (await new Promise((resolve) => {
    if (!params.id) throw new Error()
    eventEmitter.emit('delete', params.id, (response) => {
      resolve(response)
    })
  })) as { status: 'ok' | 'failed' }

  if (response.status === 'failed') {
    emitter.emit('buttonDisabled', false)
    return response
  }

  return redirect('/')
}

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
        <StyledHeader id={labelId}><div>Delete</div></StyledHeader>
        <StyledDescription id={descriptionId}>
          <div>Are you sure you want to delete this entry?</div>
        </StyledDescription>
        <StyledButtons className='buttons'>
          <StyledButton disabled={buttonDisabled} type='submit'>
            Delete
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
