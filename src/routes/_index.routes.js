require('module-alias/register')

const router = require('express').Router()

router.use('/test', require('@/routes/test.routes'))

router.use('/string', require('@/routes/string/string.routes'))
router.use('/string/empty', require('@/routes/string/stringEmpty.routes'))

router.use('/email', require('@/routes/email.routes'))

router.use('/password', require('@/routes/password.routes'))

module.exports = router
