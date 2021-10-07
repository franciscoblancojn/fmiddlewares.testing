require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.get('/', [], _default)
router.post(
  '/',
  [
    fmiddlewares.validateItem({
      data: {
        type: 'object'
      },
    })
  ],
  _default
)

module.exports = router
