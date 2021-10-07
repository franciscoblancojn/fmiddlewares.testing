require('module-alias/register')

const router = require('express').Router()

router.use('/string', require('@/routes/group/string.routes'))

router.use('/email', require('@/routes/group/email.routes'))

router.use('/password', require('@/routes/group/password.routes'))

router.use('/list', require('@/routes/group/list.routes'))

router.use('/number', require('@/routes/group/number.routes'))

module.exports = router
