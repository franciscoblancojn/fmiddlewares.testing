require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.post(
  '/',
  [
    fmiddlewares.validateItem({
      married: {
        type: 'boolean'
      }
    })
  ],
  _default
)

module.exports = router
