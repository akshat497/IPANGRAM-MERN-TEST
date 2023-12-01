const connection = require('./db');
const express = require('express');
const cors=require('cors')
const app=express()


app.use(express.json())
app.use(cors())
var port=5000
connection()
app.use('/api/auth',require('./routes/auth'))
app.use('/api/departments',require('./routes/departments'))
app.use('/api/usercrud',require('./routes/userCrud'))



app.listen(port,()=>{
    console.log(`listining at port number ${port}`)
})