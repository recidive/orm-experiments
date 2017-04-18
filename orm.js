const schema = {
  user: {
    id: String,
    name: String
  },

  post: {
    id: String,
    title: String,
    author: ['user']
    tags: [String]
  }
}

class memoryAdapter {
  name() {
    return 'memory'
  }

  setup(settings) {

  }

  get(id) {

  }

  list() {

  }
}

const argumentsReducer = (keys, obj) =>
  keys.reduce((prev, curr) =>
    ({ ...prev,  [curr]: obj[curr]}), {})

const setupAdapters = adapters => settings => settings.map(({ id, url }) => {
  const info = parseURL(url)
  adapters(info)
})

const settings = [
  {
    id: 'memoryDB',
    url: 'memory:///db1',
    default: true,
  },
  {
    id: 'memoryDBTwo',
    url: 'memory:///db2',
  }
]

const orm = compose(
  setupAdapters([memoryAdapter])(settings),
  startConnections(schema)
)

const db = orm(settings)

const user123Posts = db.list('post', {
  author: {
    id: 123
  }
})
