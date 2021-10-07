require('module-alias/register')
const router = require('express').Router()
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

router.get(
  '/', 
  [
    fmiddlewares.validateItem({
        password:{
            type:"password",
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
    },"query")
  ],
   _default
)
  
router.post(
  '/',
  [
    fmiddlewares.validateItem({
        password:{
            type:"password",
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
