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
import styled from 'styled-components'
import EditHeader from './EditHeader'
import EditCalibrate from './EditCalibrate'
import EditNutrientInputs from './EditNutrientInputs'
import EditButtons from './EditButtons'

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

const StyledEdit = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 10fr 1fr;
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
  const listElement = useLoaderData() as ListElement
  const navigate = useNavigate()

  useEffect(() => {}, [])

  return (
    <Form method='post'>
      <StyledEdit>
        <EditHeader
          labelId={labelId}
          descriptionId={descriptionId}
          listElement={listElement}
        />
        <EditCalibrate
          buttonDisabled={buttonDisabled}
          listElement={listElement}
        />
        <EditNutrientInputs
          buttonDisabled={buttonDisabled}
          listElement={listElement}
        />
        <EditButtons
          buttonDisabled={buttonDisabled}
          listElement={listElement}
        />
        {error?.status && <p>Something went wrong...</p>}
      </StyledEdit>
    </Form>
  )
}
