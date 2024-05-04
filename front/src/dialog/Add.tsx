import React from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogClose,
} from '../ResuableDialog'

export default () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Add</DialogTrigger>
        <DialogContent className='Dialog'>
          <DialogHeading>Add New Food</DialogHeading>
          <DialogDescription>My dialog description</DialogDescription>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}

/*
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
        Add
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
*/
