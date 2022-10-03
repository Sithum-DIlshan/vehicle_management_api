const mongoose = require('mongoose')
const Vehicle = require('../models/vehicle.models')

const userSchema =new mongoose.Schema({
    emailId: {
        type: String
    },
    fullName: {
        type: String
    },
    mobile: {
        type: String
    }, 
    password:{
        type:String
    },
    vehicles:[Vehicle.schema]
})

module.exports=mongoose.model('User', userSchema)