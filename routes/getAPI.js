const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')

const { Center } = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
    Center.find({ }).then((result) => {
        res.send(result)
    })
})

module.exports = router