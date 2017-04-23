export const STRING = 'string'
export const NUMBER = 'number'
export const BOOLEAN = 'boolean'

export const string = {
  name: STRING,
  parse: value => String(value),
  serialize: value => String(value)
}

export const number = {
  name: NUMBER,
  parse: value => Number(value),
  serialize: value => Number(value)
}

export const boolean = {
  name: BOOLEAN,
  parse: value => Boolean(value),
  serialize: value => Boolean(value)
}
