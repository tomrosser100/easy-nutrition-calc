import EventEmitter from 'events'
import type TypedEmitter from 'typed-emitter'
import type { ListElement } from './types'
import store from './store'

type Events = {
  add: (
    data: ListElement,
    callback: (response: { status: 'ok' | 'failed' }) => void
  ) => void
  edit: (
    data: ListElement,
    callback: (response: { status: 'ok' | 'failed' }) => void
  ) => void
  getAll: (callback: (response: ListElement[]) => void) => void
  fill: (
    id: string, 
    callback: (response: ListElement) => void) => void
}

const eventEmitter = new EventEmitter() as TypedEmitter<Events>

eventEmitter.on('add', async (data, callback) => {
  const response = await store.add(data)
  callback(response)
})

eventEmitter.on('edit', async (data, callback) => {
  const response = await store.edit(data)
  callback(response)
})

eventEmitter.on('getAll', async (callback) => {
  const response = await store.getAll()
  callback(response)
})

export default eventEmitter
