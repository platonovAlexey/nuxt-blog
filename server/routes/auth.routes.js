const {Router} = require('express')
// const passport = require('passport')
const {login, createUser} = require('../controllers/auth.controller')
const router = Router()

// example route path
// /api/auth/admin/login
// /api/auth

router.post('/admin/login', login)
router.post(
  '/admin/create',
  // passport.authenticate('jwt', {session: false}),
  createUser,
  )

module.exports = router