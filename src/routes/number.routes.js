require('module-alias/register')
const router = require('express').Router()
const fmiddlewaresTest = require('@/middlewares/fmiddlewares.test.js')
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

  
router.post(
  '/',
  [
    fmiddlewaresTest.validateItem({
        age : {
            type:"number",
            min: 10,
            max: 20,
        }
    })
  ],
  _default
)

module.exports = router
