# mongoose-detective [![NPM version](https://badge.fury.io/js/mongoose-detective.png)](http://badge.fury.io/js/mongoose-detective) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Find the referenced model name at a specified path

```js
npm i mongoose-detective --save
```

## Usage

```js
const detective = require('mongoose-detective')
const mongoose = require('mongoose')

const InvoiceSchema = new Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
})

mongoose.model('Invoice', InvoiceSchema)

const modelName = detective(mongoose.models.Invoice, 'customer')

// modelName = 'Customer'
```

## Contributing

I'd love for you to contribute and make mongoose-detective even better than it is today!

```
git clone https://github.com/Zertz/mongoose-detective.git
npm install
npm test
```
