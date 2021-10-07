require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.get(
  '/', 
  [
    fmiddlewares.validateItem({
        email: {
            type: 'email',
        },
    },"query")
  ],
   _default
)
  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
        email: {
            type: 'email',
        },
    })
  ],
  _default
)

module.exports = router
