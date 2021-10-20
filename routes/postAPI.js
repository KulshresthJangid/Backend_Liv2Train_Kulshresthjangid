const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')

const Center  = require('../db/db')



const router = express.Router()

router.get('/', (req, res) => {
    API.find({}).then((value) => {
        res.send(value)
    })
})

router.post('/addNewTrainingCenter',async (req, res) => {
    try {
        // const centerAddress = new Address({
        
    // })
    const center = new Center({
        centerName: req.body.centerName,
        centerCode: req.body.centerCode,
        studentCapacity: req.body.studentCapacity,
        address: {
            fullAddress: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode
        },
        contactEmail: req.body.email,
        contactPhone: req.body.phone
    })

    await center.save()
    res.send(center)
    } catch (e) {
        res.send("Error from the post request" + e.message)
    }
})


module.exports = router