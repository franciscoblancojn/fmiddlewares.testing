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
