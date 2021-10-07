require('module-alias/register')

const router = require('express').Router()

router.use('/test', require('@/routes/test.routes'))

module.exports = router
