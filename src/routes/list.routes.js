require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.get(
  '/',
  [
    fmiddlewares.validateItem({
      sex: {
        type: 'list',
        list: [
          'male',
          'feminine'
        ]
      }
    }, 'query')
  ],
  _default
)

router.post(
  '/',
  [
    fmiddlewares.validateItem({
      sex: {
        type: 'list',
        list: [
          'male',
          'feminine'
        ]
      }
    })
  ],
  _default
)

module.exports = router
