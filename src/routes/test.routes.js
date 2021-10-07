require('module-alias/register')
const router = require('express').Router()
const fmiddlewaresTest = require('@/middlewares/fmiddlewares.test.js')
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.get('/', [], _default)
router.post(
  '/',
  [
    fmiddlewaresTest.validateItem({
      items : {
        type:"array",
        min:1,
        max:3,
        typeElemets:"number"
      }
    })
  ],
  _default
)

module.exports = router
