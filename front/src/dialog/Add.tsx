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
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import eventEmitter from '../eventEmitter'
import type { ListElement } from '../types'
import EventEmitter from 'events'

const emitter = new EventEmitter()

export async function loader() {
  console.log('add loader fired')
  return null
}

export async function action({ request }: { request: any }) {
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

export default () => {
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
      <button ref={refs.setReference} {...getReferenceProps()}>
        Add
      </button>
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
                <input type='text' name='name' />
              </label>
              <label>
                Enter number:
                <input type='number' min='0' name='num' placeholder='0' />
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
