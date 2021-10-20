const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("GET API get request")
})

module.exports = router