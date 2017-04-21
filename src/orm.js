// Memory storage adapter.
class memoryAdapter {
  // db: {}

  name() {
    return 'memory'
  }

  setup(settings) {
    this.db = {}
  }

  add(id) {

  }

  get(id) {

  }

  delete(id) {

  }

  list() {

  }
}

// Libraries.
const argumentsReducer = (keys, obj) =>
  keys.reduce((prev, curr) =>
    ({ ...prev,  [curr]: obj[curr] }), {})

const setupAdapters = adapters => settings => settings.map(({ id, url }) => {
  const info = parseURL(url)
  adapters(info)
})

const orm = compose(
  setupAdapters([memoryAdapter])(settings),
  startConnections(schema)
)

// Example complex types.
const UserType = {
  user: StringType,
  name: StringType
}

const PostType = {
  id: StringType,
  title: StringType,
  author: UserType,
  tags: [StringType]
}

const schema = {
  UserType,
  PostType
}

// Example schema.
// const schema = {
//   user: {
//     id: String,
//     name: String
//   },
//
//   post: {
//     id: String,
//     title: String,
//     author: ['user']
//     tags: [String]
//   }
// }

// Example settings.
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

// Test.
const db = orm(settings)
const user123Posts = db.list('post', {
  author: {
    id: 123
  }
})
