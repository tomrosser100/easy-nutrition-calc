import React from 'react'
import { Form, useNavigate, redirect, useActionData } from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import type { ListElement } from '../../types'
import { emitter } from '../Dialog'

export async function addAction({ request }: { request: any }) {
  emitter.emit('buttonDisabled', true)
  const data = Object.fromEntries(await request.formData()) as ListElement
  console.log('add action fired')
  console.log(data)
  const response = (await new Promise((resolve) => {
    eventEmitter.emit('add', data, (response) => {
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
    <div className='add-edit-grid'>
      <div className='header'>
        <h2 id={labelId}>Heading element: ADD</h2>
        <p id={descriptionId}>Description element</p>
      </div>
      <Form method='post'>
        <div className='calibrate'>
          <label>
            Enter name:
            <input disabled={buttonDisabled} type='text' name='name' />
          </label>
          <label>
            How much you will eat:
            <input disabled={buttonDisabled} type='text' name='name' />
          </label>
          <label>
            Reference portion size:
            <input disabled={buttonDisabled} type='text' name='name' />
          </label>
        </div>
        <div className='nutrient-inputs'>
          <label>
            Enter fat:
            <input disabled={buttonDisabled} type='number' min='0' name='fat' />
          </label>
          <label>
            Enter carb:
            <input
              disabled={buttonDisabled}
              type='number'
              min='0'
              name='carb'
            />
          </label>
          <label>
            Enter fibre:
            <input
              disabled={buttonDisabled}
              type='number'
              min='0'
              name='fibre'
            />
          </label>
        </div>
        <div className='buttons'>
          <button disabled={buttonDisabled} type='submit'>
            Add
          </button>
          <button disabled={buttonDisabled} onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </Form>
      {error?.status && <p>Something went wrong...</p>}
    </div>
  )
}
