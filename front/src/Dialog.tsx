import {
  FloatingFocusManager,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import React, { useId, useState } from 'react'

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
  })
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])

  const labelId = useId()
  const descriptionId = useId()

  return (
    <div>
      <button ref={refs.setReference} {...getReferenceProps()}>
        Reference Element
      </button>
      {isOpen && (
        <FloatingOverlay className='dialog-overlay' lockScroll>
          <FloatingFocusManager context={context}>
            <div
              className='dialog'
              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              {...getFloatingProps()}>
              <h2 id={labelId}>Heading element</h2>
              <p id={descriptionId}>Description element</p>
              <form>
                <label>
                  Enter your name:
                  <input type='text' />
                </label>
              </form>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </div>
  )
}
