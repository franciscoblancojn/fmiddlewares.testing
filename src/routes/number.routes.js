require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.post(
  '/',
  [
    fmiddlewares.validateItem({
      age: {
        type: 'number',
        min: 10,
        max: 20
      }
    })
  ],
  _default
)

module.exports = router
