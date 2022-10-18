const express = require('express')
const router = express.Router()

// Home page route - GET /
router.get('/', (req, res, next) => {
  res.redirect('/api/blog')
})

module.exports = router
