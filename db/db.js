require('dotenv').config()
const mongoose = require('mongoose')
const validator = require('validator')

const addressSchema = mongoose.Schema({
    fullAddress: {
        type: String,
        required: true
    }, city: {
        type: String,
        required: true
    }, state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    }
})

const Address = mongoose.model('Address', addressSchema)

const centerSchema = mongoose.Schema({
    centerName: {
        type: String, 
        required: true,
        max: [40, 'Only less than 40 characters are allowed.']
    }, centerCode: {
        type: String,
        required: true,
        max: 12,
        min: 12
    }, address: {
        fullAddress: {
            type: String,
            required: true
        }, city: {
            type: String,
            required: true
        }, state: {
            type: String,
            required: true
        }, pincode: {
            type: String,
            required: true
        }
    },
    studentCapacity: {
        type: Number,
        required: true
    }, courses: [String],
    CreatedOn: {
        type: Date,
        default: Date.now
    }, contactEmail: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }, contactPhone: {
        type: Number
    }
})

const Center = mongoose.model('Center', centerSchema)

module.exports = {
    Center: Center,
    Address: Address
}

