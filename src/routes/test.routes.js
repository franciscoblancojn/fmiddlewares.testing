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
      key : {
          type:"compare",
          value:"value",
          function:(compare)=>{
            return compare.value == 1
          }
      }
    })
  ],
  _default
)

module.exports = router
