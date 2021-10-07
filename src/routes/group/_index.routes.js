require('module-alias/register')

const router = require('express').Router()

router.use('/string', require('@/routes/group/string.routes'))

router.use('/email', require('@/routes/group/email.routes'))

module.exports = router
