import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react'
import React, { useEffect, useId, useState } from 'react'
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useParams,
  type Params,
} from 'react-router-dom'
import eventEmitter from '../eventEmitter'
import type { ListElement } from '../types'
import EventEmitter from 'events'
import type TypedEmitter from 'typed-emitter'

type Events = {
  buttonDisabled: (bool: boolean) => void
}
const emitter = new EventEmitter() as TypedEmitter<Events>

export async function loader({ params }: { params: { id?: string } }) {
  console.log('add loader fired')

  const response = await new Promise((resolve) => {
    if (!params.id) throw new Error()

    eventEmitter.emit('fill', params.id, (response) => {
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

export default () => {
  const listElement = useLoaderData() as ListElement | undefined
  const error = useActionData() as { status: 'failed' }
  const navigate = useNavigate()
  const [buttonDisabled, setbuttonDisabled] = useState(false)

  useEffect(() => {
    function buttonDisabled(boolean: boolean) {
      setbuttonDisabled(boolean)
    }

    emitter.on('buttonDisabled', buttonDisabled)

    return () => {
      emitter.off('buttonDisabled', buttonDisabled)
    }
  })

  const { refs, context } = useFloating({
    open: true,
  })

  const click = useClick(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, role])

  const labelId = useId()
  const descriptionId = useId()

  return (
    <div>
      <FloatingOverlay className='Dialog-overlay' lockScroll>
        <FloatingFocusManager context={context}>
          <div
            className='Dialog'
            ref={refs.setFloating}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            {...getFloatingProps()}>
            <h2 id={labelId}>Heading element</h2>
            <p id={descriptionId}>Description element</p>
            <Form method='post'>
              <label>
                Enter name:
                <input
                  type='text'
                  name='name'
                  defaultValue={listElement && listElement.name}
                />
              </label>
              <label>
                Enter number:
                <input
                  type='number'
                  min='0'
                  name='num'
                  defaultValue={listElement ? listElement.num : '0'}
                />
              </label>
              <button disabled={buttonDisabled} type='submit'>
                Close
              </button>
              {error?.status && <p>Something went wrong...</p>}
            </Form>
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </div>
  )
}

/*
export default () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Add</DialogTrigger>
        <DialogContent className='Dialog'>
          <div className='add-grid'>
            <DialogHeading className='title'>Add New Food</DialogHeading>
            <DialogDescription className='step1'>
              <div className='name'>
                <div className='label'>Pick a name</div>
                <div className='input'>
                  <input type='text'></input>
                </div>
              </div>
              <div className='amount'>
                <div className='label'>How much will you eat</div>
                <div className='input'>
                  <input type='text'></input>
                </div>
              </div>
            </DialogDescription>
            <DialogDescription className='step2'>
                <div className='per'>Nutrients per how many grams?</div>
                <div className='macro'>Energy</div>
                <div className='macro'>Fat</div>
                <div className='macro'>... of which saturates</div>
                <div className='macro'>Carbohydrate</div>
                <div className='macro'>... of which sugars</div>
                <div className='macro'>Fibre</div>
                <div className='macro'>Protein</div>
                <div className='macro'>Salt</div>
            </DialogDescription>
            <DialogDescription className='finish'>
              <DialogClose>Add</DialogClose>
              <DialogClose>Cancel</DialogClose>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
*/

/*

*/
