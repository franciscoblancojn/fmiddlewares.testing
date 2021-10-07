require('module-alias/register')
const router = require('express').Router()
const fmiddlewaresTest = require('@/middlewares/fmiddlewares.test.js')
const fmiddlewares = require('fmiddlewares')
const _default = require('@/controllers/default')

  
router.post(
  '/',
  [
    fmiddlewaresTest.validateItem({
        exactItems:true,
        name : {
            type:"string",
        },
        company:{
            type:"object",
            items:{
                exactItems:true,
                name:{
                    type:"text"
                },
                direction:{
                    type:"text"
                }
            }
        }
    })
  ],
  _default
)

module.exports = router
