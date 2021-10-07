require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.get(
  '/', 
  [
    fmiddlewares.validateItem({
      name: {
        type: 'string',
        isEmpty:true,
      },
    },"query")
  ],
   _default
)
  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
      name: {
        type: 'string',
        isEmpty:true,
      },
    })
  ],
  _default
)

module.exports = router
