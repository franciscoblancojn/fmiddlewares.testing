require('module-alias/register')

const router = require('express').Router()

router.use('/string', require('@/routes/group/string.routes'))

module.exports = router
