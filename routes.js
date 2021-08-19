const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('the first page').catch((err) => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


module.exports = router
