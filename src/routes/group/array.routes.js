require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
        elements:{
            type:"group",
            groupType:"array",
            min:1, //if need min elements
            max:3, //if need max elements
            typeElemets:"number", //if need all element is type typeElemets
            items:[
                "items",
                "list",
                "card"
            ],
        }
    })
  ],
  _default
)

module.exports = router
