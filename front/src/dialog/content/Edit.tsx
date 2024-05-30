import React from 'react'
import { Form, redirect, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import type { ListElement } from '../../types'
import { emitter } from '../Dialog'

export async function loader({ params }: { params: { id?: string } }) {
  console.log('add loader fired')

  const response = await new Promise((resolve) => {
    if (!params.id) throw new Error()

    eventEmitter.emit('fillEdit', params.id, (response) => {
      resolve(response)
    })
  })
  console.log('loading', response)
  return response
}

export async function editAction({
  params,
  request,
}: {
  params: { id?: string }
  request: any
}) {
  emitter.emit('buttonDisabled', true)
  
  const data = {
    id: params.id,
    ...Object.fromEntries(await request.formData())
  } as ListElement

  const response = (await new Promise((resolve) => {
    if (!params.id) throw new Error()
    eventEmitter.emit('edit', data, (response) => {
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
  const listElement = useLoaderData() as ListElement
  const navigate = useNavigate()

  return (
    <div>
      <h2 id={labelId}>Heading element: EDIT</h2>
      <p id={descriptionId}>Description element</p>
      <Form method='post'>
        <label>
          Enter name:
          <input disabled={buttonDisabled} type='text' name='name' defaultValue={listElement?.name} />
        </label>
        <label>
          Enter fat:
          <input disabled={buttonDisabled} type='number' min='0' name='fat' defaultValue={listElement?.fat} />
        </label>
        <label>
          Enter carb:
          <input disabled={buttonDisabled} type='number' min='0' name='carb' defaultValue={listElement?.carb} />
        </label>
        <label>
          Enter fibre:
          <input disabled={buttonDisabled} type='number' min='0' name='fibre' defaultValue={listElement?.fibre} />
        </label>
        <button disabled={buttonDisabled} type='submit'>
          Save
        </button>
      </Form>
      <button disabled={buttonDisabled} onClick={() => navigate('/')}>Cancel</button>
        {error?.status && <p>Something went wrong...</p>}
    </div>
  )
}
