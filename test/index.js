'use strict'

const assert = require('assert')

describe('mongoose-detective', () => {
  const models = require('../test/models')().models
  const detective = require('../src')

  it('returns undefined when path does not exist', () => {
    const modelName = detective(models.Invoice, 'foo.bar')

    assert.equal(modelName, undefined)
  })

  it('returns undefined when path is not a ref', () => {
    const modelName = detective(models.Invoice, '_id')

    assert.equal(modelName, undefined)
  })

  it('returns the referenced model name', () => {
    const modelName = detective(models.Invoice, 'customer')

    assert.equal(modelName, 'Customer')
  })

  it('returns the referenced model name when ref is an array', () => {
    const modelName = detective(models.Invoice, 'products')

    assert.equal(modelName, 'Product')
  })

  it('returns the referenced model name at a deep path', () => {
    const modelName = detective(models.Invoice, 'very.deep.ref')

    assert.equal(modelName, 'Reference')
  })
})
