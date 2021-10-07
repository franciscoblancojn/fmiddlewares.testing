require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
        company : {
            type:"string",
            isUndefined:true
        }
    })
  ],
  _default
)

module.exports = router
