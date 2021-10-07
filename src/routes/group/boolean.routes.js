require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.post(
  '/',
  [
    fmiddlewares.validateItem({
      elements: {
        type: 'group',
        groupType: 'boolean',
        items: [
          'active',
          'show',
          'open'
        ]
      }
    })
  ],
  _default
)

module.exports = router
