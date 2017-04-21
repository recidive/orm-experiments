class BaseScalarType {
  constructor() {
    if (typeof this.name !== 'string') {
      throw new Error(`A scalar type needs a name.`);
    }
  }
}

class StringType extends BaseScalarType {

  // name: 'string'

  parse(value) {
    return String(value)
  }

  serialize(value) {
    return String(value)
  }

}

export default {
  StringType: new StringType()
}
