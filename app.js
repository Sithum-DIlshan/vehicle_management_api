const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 8080
app.use(express.json())
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
const user = require('./routes/user')
app.use(express.static('public'));



app.use('/user', user)



const url = 'mongodb://localhost/vehicle_manager'
mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', ()=>{
  console.log('mongodb connected')
})

app.post('/', upload.single('avatar'), (req, res, next) => {
  console.log(req.file.path, req.body.name)
  res.send('saved')
})

app.get('/', (req, res) => {
  res.send('Hello Huto!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})