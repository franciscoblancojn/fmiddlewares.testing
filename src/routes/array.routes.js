require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
        items : {
            type:"array",
            min:1, //if need min elements
            max:3, //if need max elements
            typeElemets:"number" //if need all element is type typeElemets
        }
    })
  ],
  _default
)

module.exports = router
