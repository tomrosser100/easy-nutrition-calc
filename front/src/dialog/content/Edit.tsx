import React, { useEffect } from 'react'
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useParams,
} from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import type { ListElement } from '../../types'
import { emitter } from '../Dialog'
import { nanoid } from 'nanoid'
import { nutrients } from '../../constants'

export async function loader({ params }: { params: { id?: string } }) {
  console.log('edit loader fired, filling...')

  const response = await new Promise((resolve) => {
    if (!params.id) throw new Error()

    eventEmitter.emit('fillEdit', params.id, (response) => {
      resolve(response)
    })
  })
  console.log('loading', response)
  return response
}

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
    ...Object.fromEntries(await request.formData()),
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
  const idExists = (typeof useParams().id === 'string')

  const error = useActionData() as { status: 'failed' }
  const listElement = useLoaderData() as ListElement
  const navigate = useNavigate()

  useEffect(() => {

    console.log(idExists)

  }, [])

  return (
    <div className='add-edit-grid'>
      <div className='header'>
        <div className='title' id={labelId}>
          Heading element: {listElement === undefined ? 'Add' : 'Edit'}
        </div>
        <div className='description' id={descriptionId}>
          Description element
        </div>
      </div>
      <Form method='post'>
        {!idExists && (<input type='hidden' name='id' value={nanoid().slice(0, 7)} />)}
        <div className='calibrate'>
          <label className='name'>
            Enter name:
            <input
              disabled={buttonDisabled}
              type='text'
              name='name'
              defaultValue={listElement?.name}
            />
          </label>
          <label className='amount'>
            Amount:
            <input
              disabled={buttonDisabled}
              type='number'
              min='0'
              name='userAmount'
              defaultValue={listElement ? listElement?.userAmount : 0}
            />
          </label>
          <label className='reference'>
            Reference portion size:
            <input
              disabled={buttonDisabled}
              type='number'
              min='0'
              name='refPortion'
              defaultValue={listElement ? listElement?.refPortion : 0}
            />
          </label>
        </div>
        <div className='nutrient-inputs'>
          {nutrients.map((nutrient, i) => (
            <label>
              Enter {nutrient}
              <input
                disabled={buttonDisabled}
                type='number'
                min='0'
                name={nutrient}
                defaultValue={listElement ? listElement?.[nutrient] : 0}
                />
            </label>
          ))}
        </div>
        <div className='buttons'>
          <button disabled={buttonDisabled} type='submit'>
            {listElement === undefined ? 'Add' : 'Save'}
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
