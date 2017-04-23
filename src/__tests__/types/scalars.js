import { string, number, boolean } from '../../types/scalars'

test('string parsing', () => {
  expect(string.parse('123')).toEqual('123')
  expect(string.parse(123)).toEqual('123')
  expect(string.parse(false)).toEqual('false')
})

test('string serializing', () => {
  expect(string.serialize('123')).toEqual('123')
  expect(string.serialize(123)).toEqual('123')
  expect(string.serialize(false)).toEqual('false')
})

test('number parsing', () => {
  expect(number.parse(123)).toEqual(123)
  expect(number.parse('123')).toEqual(123)
  expect(number.parse(true)).toEqual(1)
})

test('number serializing', () => {
  expect(number.serialize(123)).toEqual(123)
  expect(number.serialize('123')).toEqual(123)
  expect(number.serialize(true)).toEqual(1)
})

test('boolean parsing', () => {
  expect(boolean.parse(false)).toEqual(false)
  expect(boolean.parse(123)).toEqual(true)
  expect(boolean.parse('123')).toEqual(true)
  expect(boolean.parse('')).toEqual(false)
  expect(boolean.parse(0)).toEqual(false)
})

test('boolean serializing', () => {
  expect(boolean.serialize(false)).toEqual(false)
  expect(boolean.serialize(123)).toEqual(true)
  expect(boolean.serialize('123')).toEqual(true)
  expect(boolean.serialize('')).toEqual(false)
  expect(boolean.serialize(0)).toEqual(false)
})
