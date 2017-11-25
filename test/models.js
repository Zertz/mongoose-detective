'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = function () {
  const InvoiceSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    very: {
      deep: {
        ref: { type: Schema.Types.ObjectId, ref: 'Reference' }
      }
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  })

  if (!mongoose.models.Invoice) {
    mongoose.model('Invoice', InvoiceSchema)
  }

  return {
    models: mongoose.models
  }
}
