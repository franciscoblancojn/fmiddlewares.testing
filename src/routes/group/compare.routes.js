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
            groupType:"compare",
            items:[
                "key",
                "key2",
            ],
            value:"value"
        }
    })
  ],
  _default
)

router.post(
  '/function',
  [
    fmiddlewares.validateItem({
        elements:{
            type:"group",
            groupType:"compare",
            items:[
                "key",
                "key2",
            ],
            value:"value",
            function: (compare) => {
              switch (compare.key) {
                case "key":
                  return compare.value == "value1"
                  break;
                case "key2":
                  return compare.value == "value2"
                  break;
                default:
                  return false
                  break;
              }
            }
        }
    })
  ],
  _default
)
module.exports = router
