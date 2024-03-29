require('module-alias/register')

const router = require('express').Router()

router.use('/test', require('@/routes/test.routes'))

router.use('/string', require('@/routes/string/string.routes'))
router.use('/string/empty', require('@/routes/string/stringEmpty.routes'))

router.use('/email', require('@/routes/email.routes'))

router.use('/password', require('@/routes/password.routes'))

router.use('/list', require('@/routes/list.routes'))

router.use('/object', require('@/routes/object.routes'))

router.use('/number', require('@/routes/number.routes'))

router.use('/boolean', require('@/routes/boolean.routes'))

router.use('/array', require('@/routes/array.routes'))

router.use('/compare', require('@/routes/compare.routes'))

router.use('/leave-undefined', require('@/routes/leaveUndefined.routes'))

router.use('/exact-data', require('@/routes/exactData.routes'))

router.use('/group', require('@/routes/group/_index.routes'))

module.exports = router
