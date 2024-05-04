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
