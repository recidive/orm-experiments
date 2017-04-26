import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'

/*
 * A simple memory based adapter.
 */

// @TODO this eventually should be moved into its own project.
let storage = Map()

const memoryAdapter = ({ settings, schema }) => (op, type, payload) => {
  const newStorage = ensureSchema(type, storage)

  switch (op) {
    case 'add':
      const newId = uuid.v4()
      const newList = newStorage.get(type).push(fromJS({ ...payload, id: newId }))
      storage = newStorage.set(type, newList)
      return newList.find((obj) => { return obj.get('id') === newId }).toJS()
  }

}

const ensureSchema = (type, storage) => {
  return storage.set(type, List())
}

export default memoryAdapter
