const express = require('express')
const app = express();
const router = express.Router()

const User = require('../models/user.model')
const {json} = require("express");

app.use(express, json())

router.get('/', async (req, res) => {
    try {
        const users = await User.findOne({'emailId':req.query.emailId})
        res.json(users)
    } catch (err) {
        res.send('Error '+err)
    }
})

router.post('/', async (req, res) => {
    try {
        // const user = await User.find()
        const user = new User({
            emailId: req.body.email,
            fullName: req.body.fullName,
            mobile: req.body.mobile,
            password: req.body.password,
        })
        const response = await user.save();
        res.send(response);
    } catch (err) {

    }
})

module.exports = router
