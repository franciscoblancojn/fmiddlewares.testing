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
            groupType:"list",
            items:[
                "var1",
                "var2",
                "var3"
            ],
            list:[
                "option1",
                "option2",
                "option3",
            ]
        }
    })
  ],
  _default
)

module.exports = router
