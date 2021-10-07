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
            groupType:"password",
            items:[
                "password",
                "password_user",
                "password_login"
            ],
            regexs:[
                {
                    regex:/^.{8,}$/,
                    msj:"minimum of 8 characters"
                },
                {
                    regex:/[a-z]/,
                    msj:"must contain lowercase letters"
                },
                {
                    regex:/[A-Z]/,
                    msj:"must contain capital letters"
                },
            ]
        }
    })
  ],
  _default
)

module.exports = router
