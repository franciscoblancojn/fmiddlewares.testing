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
        groupType: 'number',
        items: [
          'age',
          'nitems',
          'price'
        ],
        min: 10, // if need min
        max: 20 // id need max
      }
    })
  ],
  _default
)

module.exports = router
