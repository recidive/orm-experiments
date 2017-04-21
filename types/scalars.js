// String scalar type.
class BaseScalarType {
  name: null

  constructor() {
    // @TODO: this kind of checks could be replaced by flow?
    if (typeof this.name !== 'string') {
      throw new Error(`A scalar type needs a name.`);
    }
  }
}

class StringType extends BaseScalarType {

  name: 'string'

  parse(value) {
    return String(value)
  }

  serialize(value) {
    return String(value)
  }

}
