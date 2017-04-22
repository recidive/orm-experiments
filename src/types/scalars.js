export const string = {
  name: 'string',
  parse: value => String(value),
  serialize: value => String(value)
}

export const number = {
  name: 'number',
  parse: value => Number(value),
  serialize: value => Number(value)
}

export const boolean = {
  name: 'boolean',
  parse: value => Boolean(value),
  serialize: value => Boolean(value)
}
