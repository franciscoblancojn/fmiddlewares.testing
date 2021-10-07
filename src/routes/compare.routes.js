require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
        key : {
            type:"compare",
            value:"12345"
        }
    },"headers")
  ],
  _default
)

module.exports = router
