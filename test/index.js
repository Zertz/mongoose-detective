const assert = require('assert')

describe('getModelAtPath', () => {
  const models = require('../test/models')().models
  const detective = require('../src')

  it('returns undefined when path does not exist', () => {
    let modelName = detective.getModelAtPath(models.Invoice, 'foo.bar')

    assert.equal(modelName, undefined)
  })

  it('returns undefined when path is not a ref', () => {
    let modelName = detective.getModelAtPath(models.Invoice, '_id')

    assert.equal(modelName, undefined)
  })

  it('returns the referenced model name', () => {
    let modelName = detective.getModelAtPath(models.Invoice, 'customer')

    assert.equal(modelName, 'Customer')
  })

  it('returns the referenced model name when ref is an array', () => {
    let modelName = detective.getModelAtPath(models.Invoice, 'products')

    assert.equal(modelName, 'Product')
  })

  it('returns the referenced model name at a deep path', () => {
    let modelName = detective.getModelAtPath(models.Customer, 'very.deep.ref')

    assert.equal(modelName, 'Reference')
  })
})
