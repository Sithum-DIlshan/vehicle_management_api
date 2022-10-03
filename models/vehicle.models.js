const mongoose = require('mongoose')

const vehicleSchema =new mongoose.Schema({
    ownerName: {
        type: String
    },
    ownerContact: {
        type: String
    },
    ownerAdrress: {
        type: String
    }, 
    vehicleChassiNumber:{
        type:String
    },
    vehicleRegistrationNumber: {
        type: String
    },
    frontView:{
        type:String
    },
    sideView:{
        type:String
    },
    backView:{
        type:String
    }
})

module.exports=mongoose.model('Vehicle', vehicleSchema)