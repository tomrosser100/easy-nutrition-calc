import React from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import { emitter } from '../Dialog'

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
    <div>
      <Form method='post'>
        <div className='confirm-grid'>
          <div className='header' id={labelId}>
            Are you sure you want to delete this entry?
          </div>
          <div className='buttons'>
            <button disabled={buttonDisabled} type='submit'>
              Delete
            </button>
            <button disabled={buttonDisabled} onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </div>
      </Form>
      {error?.status && <p>Something went wrong...</p>}
    </div>
  )
}
