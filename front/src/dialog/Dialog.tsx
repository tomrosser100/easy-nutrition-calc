import React from 'react'
import {
  useFloating,
  useClick,
  useRole,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react'
import EventEmitter from 'events'
import { useState, useEffect, useId, Component } from 'react'
import type TypedEventEmitter from 'typed-emitter'
import Clear from './content/Clear'
import Edit from './content/Edit'
import Delete from './content/Delete'
import About from './content/About'
import Info from './content/Info'
import More from './content/More'
import styled from 'styled-components'
import { appMaxWidth, appMinWidth } from '../constants'

type Events = {
  buttonDisabled: (bool: boolean) => void
}
export const emitter = new EventEmitter() as TypedEventEmitter<Events>

const StyledFloatingOverlay = styled(FloatingOverlay)`
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
`
const StyledDialog = styled.div`
  max-width: 500px;
  min-width: 335px;
  margin: 15px;
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  display: grid;
  place-items: stretch;
`

export default ({
  type,
}: {
  type: 'edit' | 'clear' | 'delete' | 'about' | 'info' | 'more'
}) => {
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
      <StyledFloatingOverlay lockScroll>
        <FloatingFocusManager context={context}>
          <StyledDialog
            className='Dialog'
            ref={refs.setFloating}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            {...getFloatingProps()}>
            {type === 'edit' && (
              <Edit
                labelId={labelId}
                descriptionId={descriptionId}
                buttonDisabled={buttonDisabled}
              />
            )}
            {type === 'clear' && (
              <Clear
                labelId={labelId}
                descriptionId={descriptionId}
                buttonDisabled={buttonDisabled}
              />
            )}
            {type === 'delete' && (
              <Delete
                labelId={labelId}
                descriptionId={descriptionId}
                buttonDisabled={buttonDisabled}
              />
            )}
            {type === 'about' && (
              <About labelId={labelId} descriptionId={descriptionId} />
            )}
            {type === 'info' && (
              <Info labelId={labelId} descriptionId={descriptionId} />
            )}
            {type === 'more' && (
              <More labelId={labelId} descriptionId={descriptionId} />
            )}
          </StyledDialog>
        </FloatingFocusManager>
      </StyledFloatingOverlay>
    </div>
  )
}
