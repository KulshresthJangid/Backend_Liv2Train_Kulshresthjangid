const express = require('express')

const validator = require('validator')

const { Center }  = require('../db/db')
const { Address } = require('../db/db')
const mongoose = require('mongoose')


const router = express.Router()

router.get('/', (req, res) => {
    API.find({}).then((value) => {
        res.send(value)
    })
})

router.post('/addNewTrainingCenter',async (req, res) => {
    try {
    //     const centerAddress = new Address({
    //         fullAddress: req.body.address,
    //         city: req.body.city,
    //         state: req.body.state,
    //         pincode: req.body.pincode
    // })
    const center = new Center({
        centerName: req.body.centerName,
        centerCode: req.body.centerCode,
        studentCapacity: req.body.studentCapacity,
        courses: req.body.course,
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
    res.status(200).send(center)
   
    } catch (e) {
        res.status(400).send("Error from the post request" + e.message)
        console.log(e)
    }
})


module.exports = router