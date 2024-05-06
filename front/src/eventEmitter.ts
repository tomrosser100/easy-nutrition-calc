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
  clear: (callback: (response: { status: 'ok' | 'failed' }) => void) => void
  delete: (id: string, callback: (response: { status: 'ok' | 'failed' }) => void) => void
  getAll: (callback: (response: ListElement[]) => void) => void
  fill: (id: string, callback: (response: ListElement) => void) => void
}

const eventEmitter = new EventEmitter() as TypedEmitter<Events>

eventEmitter.on('clear', async (callback) => {
  const response = await store.clear()
  callback(response)
})

eventEmitter.on('add', async (data, callback) => {
  const response = await store.add(data)
  callback(response)
})

eventEmitter.on('edit', async (data, callback) => {
  const response = await store.edit(data)
  callback(response)
})

eventEmitter.on('delete', async (id, callback) => {
  const response = await store.delete(id)
  callback(response)
})

eventEmitter.on('getAll', async (callback) => {
  const response = await store.getAll()
  callback(response)
})

export default eventEmitter
