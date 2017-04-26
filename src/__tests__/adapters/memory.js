import memoryAdapter from '../../adapters/memory'
import { string } from '../../types/scalars'

test('should successfully connect', () => {
  const settings = {
    namespace: 'sandbox'
  }
  const schema = {
    post: {
      title: string,
      body: string
    }
  }
  const connection = memoryAdapter({ settings, schema })
  expect(typeof connection).toEqual('function')
})

test('should add a new post', () => {
  const settings = {
    namespace: 'sandbox'
  }
  const schema = {
    post: {
      title: string,
      body: string
    }
  }
  const connection = memoryAdapter({ settings, schema })
  const post = connection('add', 'post', {
    title: 'A post',
    body: 'Post body'
  })
  expect(post.title).toEqual('A post')
  expect(post.id).toHaveLength(36)
})
