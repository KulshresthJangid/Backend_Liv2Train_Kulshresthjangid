require('dotenv').config()
const mongoose = require('mongoose')
const validator = require('validator')

const addressSchema = mongoose.Schema({
    fullAddress: {
        type: String,
        required: 'Full Address is required.'
    }, city: {
        type: String,
        required: 'City is required.'
    }, state: {
        type: String,
        required: 'State is required.'
    },
    pincode: {
        type: Number,
        required: 'Pincode is required'
    }
})

const Address = mongoose.model('Address', addressSchema)

const centerSchema = mongoose.Schema({
    centerName: {
        type: String, 
        required: 'Center Name is required',
        max: [40, 'Only less than 40 characters are allowed.']
    }, centerCode: {
        type: String,
        required: 'Center Code is require',
        max: 12,
        min: 12
    }, address: addressSchema,
    studentCapacity: {
        type: Number,
        required: 'Please enter Student Capacity.'
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
        type: Number,
        required: 'Please enter contact no.'
    }
})

const Center = mongoose.model('Center', centerSchema)

module.exports = {
    Center: Center,
    Address: Address
}

